import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, isBefore, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  getMeetupsSuccess,
  meetupFailure,
  newMeetupSuccess,
  editMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'meetups');
    const meetups = response.data.map(meetup => ({
      ...meetup,
      formattedDate: format(
        parseISO(meetup.date),
        "d 'de' MMMM', às' HH:mm'h'",
        {
          locale: pt,
        }
      ),
      past: isBefore(parseISO(meetup.date), new Date()),
    }));

    yield put(getMeetupsSuccess(meetups));
  } catch (err) {
    Alert.alert(
      'Não foi possível listar seus meetups',
      'Verifique os dados informados'
    );
    yield put(meetupFailure());
  }
}

export function* createNewMeetup({ payload }) {
  const { file_id, title, description, date, location } = payload.data;
  try {
    const meetup = {
      file_id,
      title,
      description,
      date,
      location,
    };

    const response = yield call(api.post, 'meetups', meetup);
    yield put(newMeetupSuccess(response.data));
    Alert.alert(
      'Meetup cadastrado com sucesso',
      'Seu meetup já está disponível para inscrições'
    );
    // history.push('dashboard');
  } catch (err) {
    const { message } = err;
    Alert.alert(
      'Não foi possível cadastrar seu meetup',
      `Verifique os dados informados ${message}`
    );
    yield put(meetupFailure());
  }
}

export function* editMeetup({ payload }) {
  const { id, title, description, date, location, file_id } = payload.data;

  const meetup = {
    title,
    description,
    date,
    location,
    file_id,
  };

  try {
    const response = yield call(api.put, `meetups/${id}`, meetup);
    Alert.alert(
      'Atualizado!',
      'Os dados do meetup foram atualizados com sucesso'
    );
    // history.push(`meetups/${id}/details`, { meetup });
    yield put(editMeetupSuccess(response.data));
  } catch (err) {
    const { message } = err;

    Alert.alert('The meetup could not be updated', `${message}`);
  }
}

export function* cancelMeetup({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.delete, `meetups/${id}`);
    toast.success(' The meetup was cancelled successfully.');
    yield put(cancelMeetupSuccess(response.data));
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Este meetup não pode ser cancelado.',
      'Verifique se você tem permissões ou se a data do meetup já passou'
    );
    yield put(meetupFailure());
  }
}

export default all([
  takeLatest('@meetup/GET_MEETUPS_REQUEST', getMeetups),
  takeLatest('@meetup/NEW_MEETUP_REQUEST', createNewMeetup),
  takeLatest('@meetup/EDIT_MEETUP_REQUEST', editMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
