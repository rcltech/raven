export const selectEvents = ({ events, filter, sortParam }) => {
  return events.filter(
    ({ title, venue }) =>
      title.toLowerCase().includes(filter) || venue.toLowerCase().includes(filter)
  );
};
