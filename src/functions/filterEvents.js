import { quickSort } from './quickSort';

const selectUserEvents = (events, username) => {
  return events.filter(
    ({ organiser: { username: organiserUsername } }) =>
      organiserUsername === username
  );
};

const filterEvents = ({ events, filter }) => {
  return events.filter(
    ({ title, venue }) =>
      title.toLowerCase().includes(filter) ||
      venue.toLowerCase().includes(filter)
  );
};

const sortEvents = ({ events, sortParam }) => {
  const size = events.length;

  if (sortParam) quickSort({ events, left: 0, right: size - 1, sortParam });
  return events;
};

export { selectUserEvents, filterEvents, sortEvents };
