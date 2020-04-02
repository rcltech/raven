const selectUserEvents = (events, username) => {
  return events.filter(
    ({ organiser: { username: organiserUsername } }) =>
      organiserUsername === username
  );
};

const filterEvents = ({ events, filter, sortParam }) => {
  return events.filter(
    ({ title, venue }) =>
      title.toLowerCase().includes(filter) ||
      venue.toLowerCase().includes(filter)
  );
};

export { selectUserEvents, filterEvents };
