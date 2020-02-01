import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { format, isBefore, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  getSubscriptionsSuccess,
  subscriptionsFailure,
  newSubscriptionSuccess,
  cancelSubscriptionSuccess,
} from './actions';

export function* getSubscriptions() {
  try {
    const response = yield call(api.get, 'subscriptions');
    const subscriptions = response.data.map(subscription => ({
      ...subscription,
      formattedDate: format(
        parseISO(subscription.Meetup.date),
        "d 'de' MMMM', às' HH:mm'h'",
        {
          locale: pt,
        }
      ),
      past: isBefore(parseISO(subscription.Meetup.date), new Date()),
    }));

    yield put(getSubscriptionsSuccess(subscriptions));
  } catch (err) {
    Alert.alert(
      'Não foi possível listar seus meetups',
      'Verifique os dados informados'
    );
    yield put(subscriptionsFailure());
  }
}

export function* newSubscription({ payload }) {
  try {
    const { id } = payload.data;

    const response = yield call(api.post, `meetups/${id}/subscriptions`);
    yield put(newSubscriptionSuccess(response.data));
    Alert.alert(
      'Inscrição realizada.',
      'Sua inscrição foi cadastrada com sucesso'
    );
    // history.push('dashboard');
  } catch (err) {
    const { message } = err;
    Alert.alert(
      'Não foi possível realizar sua inscrição.',
      `Verifique os dados informados ${message}`
    );
    yield put(subscriptionsFailure());
  }
}

export function* cancelSubscription({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `subscriptions/${id}`);
    Alert.alert('Cancelada.', 'Inscrição cancelada com sucesso');
    yield put(cancelSubscriptionSuccess());
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Este inscrição não pode ser cancelada.',
      'Verifique se você tem permissões ou se a data do meetup já passou'
    );
    yield put(subscriptionsFailure());
  }
}

export default all([
  takeLatest('@subscription/GET_SUBSCRIPTIONS_REQUEST', getSubscriptions),
  takeLatest('@subscription/NEW_SUBSCRIPTION_REQUEST', newSubscription),
  takeLatest('@subscription/CANCEL_SUBSCRIPTION_REQUEST', cancelSubscription),
]);
