export function getSubscriptionsRequest() {
  return {
    type: '@subscription/GET_SUBSCRIPTIONS_REQUEST',
  };
}

export function getSubscriptionsSuccess(subscriptions) {
  return {
    type: '@subscription/GET_SUBSCRIPTIONS_SUCCESS',
    payload: { subscriptions },
  };
}

export function subscriptionsFailure() {
  return {
    type: '@subscription/FAILURE',
  };
}

export function newSubscriptionRequest(id) {
  return {
    type: '@subscription/NEW_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function newSubscriptionSuccess(data) {
  return {
    type: '@subscription/NEW_SUBSCRIPTION_SUCCESS',
    payload: { data },
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@subscription/CANCEL_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function cancelSubscriptionSuccess() {
  return {
    type: '@subscription/CANCEL_MEETUP_SUCCESS',
  };
}
