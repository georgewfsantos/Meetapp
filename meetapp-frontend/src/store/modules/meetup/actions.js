export function getMeetupsRequest() {
  return {
    type: '@meetup/GET_MEETUPS_REQUEST',
  };
}

export function getMeetupsSuccess(meetups) {
  return {
    type: '@meetup/GET_MEETUPS_SUCCESS',
    payload: { meetups },
  };
}

export function meetupFailure() {
  return {
    type: '@meetup/FAILURE',
  };
}

export function newMeetupRequest(data) {
  return {
    type: '@meetup/NEW_MEETUP_REQUEST',
    payload: { data },
  };
}

export function newMeetupSuccess(data) {
  return {
    type: '@meetup/NEW_MEETUP_SUCCESS',
    payload: { data },
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: { id },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
  };
}

export function editMeetupRequest(data) {
  return {
    type: '@meetup/EDIT_MEETUP_REQUEST',
    payload: { data },
  };
}

export function editMeetupSuccess(data) {
  return {
    type: '@meetup/EDIT_MEETUP_SUCCESS',
    payload: {
      data,
    },
  };
}
