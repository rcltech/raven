export const filterEvents = (events, username) => {
  return events.filter(
    ({ organiser: { username: organiserUsername } }) =>
      organiserUsername === username
  );
};
