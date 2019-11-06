import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Proptypes from 'prop-types';

import { MdSave } from 'react-icons/md';

import { parseISO } from 'date-fns';
// import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import api from '~/services/api';

import { Container } from './styles';
import BannerInput from '~/pages/NewMeetup/BannerInput';
import DatePicker from '~/pages/NewMeetup/DatePicker';
import { editMeetupRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  file_id: Yup.number(),
  title: Yup.string().required('O campo título é obrigatório'),
  description: Yup.string().required('O campo descrição é obrigatório'),
  location: Yup.string().required('O campo localização é obrigatório'),
  date: Yup.date().required('O campo data é obrigatório'),
});

export default function EditMeetup({ match }) {
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState({});
  const [file, setFile] = useState();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${match.params.id}/details`);

      const meetupDetails = response.data;

      meetupDetails.date = parseISO(meetupDetails.date);

      setFile(meetupDetails.File);
      setMeetup(meetupDetails);
    }
    loadMeetup(match.params.id);
  }, [match.params.id]);

  function handleSubmit(data) {
    dispatch(editMeetupRequest({ ...data, id: match.params.id }));
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput fileObj={file} />
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="description" multiline />
        <DatePicker name="date" placeholder="data" />
        <Input name="location" placeholder="localização" />
        <button type="submit">
          <MdSave size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.node,
    }).isRequired,
  }).isRequired,
};
