import { produce } from 'immer';

const INITIAL_STATE = {
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/GET_MEETUPS_REQUEST': {
        return state;
      }
      case '@meetup/GET_MEETUPS_SUCCESS': {
        draft.meetups = action.payload.meetups;
        break;
      }
      case '@meetup/FAILURE': {
        break;
      }
      case '@meetup/NEW_MEETUP_REQUEST': {
        break;
      }
      case '@meetup/NEW_MEETUP_SUCCESS': {
        break;
      }
      case '@meetup/CANCEL_MEETUP_REQUEST': {
        break;
      }
      case '@meetup/CANCEL_MEETUP_SUCCESS': {
        break;
      }
      case '@meetup/EDIT_MEETUP_REQUEST': {
        break;
      }
      case '@meetup/EDIT_MEETUP_SUCCESS': {
        break;
      }
      default:
    }
  });
}
