import moment from 'moment';

export const validateEvent = ({ title, venue, start, end }) => {
  if (title === '' || venue === '')
    return {
      isEventValid: false,
      message: 'Please fill in all the required fields.'
    };
  else if (
    moment(start).isBefore(moment(), 'day') ||
    moment(end).isBefore(moment(), 'day')
  )
    return { isEventValid: false, message: "Event time can't be in the past." };
  else if (moment(start).isSameOrAfter(moment(end)))
    return {
      isEventValid: false,
      message: "Start time can't be after end time."
    };

  return { isEventValid: true, message: 'Event is valid.' };
};
