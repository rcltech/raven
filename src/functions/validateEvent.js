import moment from 'moment';

/**
 * @author welvin21
 * This function returns the size of a base64-encoded image in byte(s)
 * @param  {String} base64 the base64-encoded image whose size is to be determined
 * @return {Number}        the size of the image in byte(s)
 */
const getImageSize = base64 => {
  const decoded = atob(base64.replace(/^data:image\/\w+;base64,/, ''));
  return decoded.length;
};

/**
 * @author welvin21
 * This function validates an event which is to be created
 * based on several criteria
 * @param  {object} event the event object containing all fields inputted by event organiser
 * @return {object}       an object telling whether an event input is valid
 */
const validateEvent = ({
  title,
  venue,
  start,
  end,
  image_url: image_base64
}) => {
  const imageSize = getImageSize(image_base64);

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
  else if (moment(start).isAfter(moment(end)))
    return {
      isEventValid: false,
      message: "Start time can't be after end time."
    };
  else if (imageSize > 10 * 1000000)
    return {
      isEventValid: false,
      message:
        'The size of your image is too large, file size limit is 10 MB per event.'
    };

  return { isEventValid: true, message: 'Event is valid.' };
};

export { validateEvent };
