export const filterEvents = (events, username) => {
  return events.filter(event => event.organiser.username === username);
};
