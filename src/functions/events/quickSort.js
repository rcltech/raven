import moment from 'moment';

/**
 * @author welvin21
 * This function returns a boolean value.
 * It returns true if firstEvent should be put after secondEvent depending on sortParam.
 * @return {boolean}  boolean value telling whether firstEvent should be put after secondEvent
 */
const isAfter = ({ firstEvent, secondEvent, sortParam }) => {
  const {
    start: firstEventStart,
    subscribers: firstEventSubscribers
  } = firstEvent;
  const {
    start: secondEventStart,
    subscribers: secondEventSubscribers
  } = secondEvent;
  switch (sortParam) {
    case 'Date':
      return moment(firstEventStart).isAfter(moment(secondEventStart));
    case 'Subscribers':
      return firstEventSubscribers.length !== secondEventSubscribers.length
        ? firstEventSubscribers.length < secondEventSubscribers.length
        : moment(firstEventStart).isAfter(moment(secondEventStart));
    case 'Most recent':
      return moment(firstEventStart).isBefore(moment(secondEventStart));
    default:
      return false;
  }
};

const findPartition = ({ events, left, right, sortParam }) => {
  const pivot = events[right];
  let startingIndex = left - 1;

  for (let i = left; i <= right - 1; i++) {
    if (isAfter({ firstEvent: pivot, secondEvent: events[i], sortParam })) {
      startingIndex++;
      [events[startingIndex], events[i]] = [events[i], events[startingIndex]];
    }
  }

  [events[startingIndex + 1], events[right]] = [
    events[right],
    events[startingIndex + 1]
  ];
  return startingIndex + 1;
};

/**
 * @author welvin21
 * This function sorts events array based on sortParam using quickSort algorithm
 */
const quickSort = ({ events, left, right, sortParam }) => {
  if (left < right) {
    const partition = findPartition({ events, left, right, sortParam });

    quickSort({ events, left, right: partition - 1, sortParam });
    quickSort({ events, left: partition + 1, right, sortParam });
  }
  return;
};

export { quickSort };
