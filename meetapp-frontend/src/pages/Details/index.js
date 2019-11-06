import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdEdit, MdDelete, MdEvent, MdPlace } from 'react-icons/md';

import { useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Banner, Content, InfoFooter } from './styles';

import api from '~/services/api';

import history from '~/services/history';
import { cancelMeetupRequest } from '~/store/modules/meetup/actions';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function getMeetup() {
      const response = await api.get(`/meetups/${match.params.id}/details`);

      const meetupDetails = response.data;

      meetupDetails.formattedDate = format(
        parseISO(meetupDetails.date),
        "d 'de' MMMM', às' HH:mm'h'",
        {
          locale: pt,
        }
      );
      setMeetup(meetupDetails);
    }
    getMeetup();
  }, [match.params.id, meetup.date]);

  function handleEdit() {
    history.push(`/edit-meetup/${match.params.id}`);
  }

  function handleCancel() {
    dispatch(cancelMeetupRequest(match.params.id));
  }

  return (
    <Container>
      <div id="info">
        <Header>
          <strong> {meetup.title}</strong>

          {!meetup.past === true ? (
            <div id="buttons">
              <button id="edit" type="button" onClick={handleEdit}>
                <MdEdit size={20} color="#FFF" /> Editar
              </button>
              <button id="cancel" type="button" onClick={handleCancel}>
                <MdDelete size={20} color="#FFF" /> Cancelar
              </button>
            </div>
          ) : (
            ''
          )}
        </Header>
        <Banner>
          <img src={meetup.File && meetup.File.url} alt="" />
        </Banner>
        <Content>
          <p id="description">{meetup.description}</p>
          <p>
            Caso queira participar como palestrante neste meetup, envie um email
            para :{` ${meetup.User && meetup.User.email}`}
          </p>
        </Content>

        <InfoFooter>
          <span>
            <MdEvent size={20} color="#FFF" />
            {meetup.formattedDate}
          </span>
          <span>
            <MdPlace size={20} color="#FFF" />
            {meetup.location}
          </span>
        </InfoFooter>
      </div>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
