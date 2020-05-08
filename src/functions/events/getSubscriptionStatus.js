export const getSubscriptionStatus = (subscribers, username) =>
  subscribers.map(({ username }) => username).includes(username);
