import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';

import { getMeetupsRequest } from '~/store/modules/meetup/actions';

import { Container, DashHeader, MeetupInfo, MeetupList, Empty } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    async function loadMeetups() {
      try {
        dispatch(getMeetupsRequest());
      } catch (err) {
        toast.error('Não foi possível carregar a listagem de meetups');
      }
    }

    loadMeetups();
  }, [dispatch]);

  function handleDetails(meetup) {
    history.push(`/details/${meetup.id}`);
  }

  function handleNewMeetup() {
    history.push('/new-meetup');
  }
  return (
    <Container>
      <DashHeader>
        <strong> Meus Meetups</strong>
        <button type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline size={20} color="#FFF" /> Novo Meetup
        </button>
      </DashHeader>
      <MeetupList>
        {meetups.length > 0 ? (
          meetups.map(meetup => (
            <MeetupInfo key={meetup.id}>
              <div id="info-left">
                <strong>{meetup.title}</strong>
              </div>
              <div id="info-right">
                <span>{meetup.formattedDate}</span>
                <button type="button" onClick={() => handleDetails(meetup)}>
                  <MdChevronRight size={20} color="#FFF" />
                </button>
              </div>
            </MeetupInfo>
          ))
        ) : (
          <Empty>
            <strong>
              Você não possui nenhum meetup. Cadastre clicando no botão Novo
              Meetup
            </strong>
          </Empty>
        )}
      </MeetupList>
    </Container>
  );
}
