import { produce } from 'immer';

const INITIAL_STATE = {
  subscriptions: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@subscription/GET_SUBSCRIPTIONS_REQUEST': {
        return state;
      }
      case '@subscription/GET_SUBSCRIPTIONS_SUCCESS': {
        draft.subscriptions = action.payload.subscriptions;
        break;
      }
      case '@subscription/FAILURE': {
        break;
      }
      case '@subscription/NEW_SUBSCRIPTION_REQUEST': {
        break;
      }
      case '@subscription/NEW_SUBSCRIPTION_SUCCESS': {
        break;
      }
      case '@subscription/CANCEL_SUBSCRIPTION_REQUEST': {
        break;
      }
      case '@subscription/CANCEL_SUBSCRIPTION_SUCCESS': {
        break;
      }
      default:
    }
  });
}
