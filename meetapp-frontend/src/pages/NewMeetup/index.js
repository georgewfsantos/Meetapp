import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdSave } from 'react-icons/md';

import { Container } from './styles';
import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import { newMeetupRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  file_id: Yup.number(),
  title: Yup.string().required('O campo título é obrigatório'),
  description: Yup.string().required('O campo descrição é obrigatório'),
  location: Yup.string().required('O campo localização é obrigatório'),
  date: Yup.date().required('O campo data é obrigatório'),
});

export default function NewMeetup() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch(newMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePicker name="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">
          <MdSave size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
