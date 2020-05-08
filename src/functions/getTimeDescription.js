import moment from 'moment';

export const getTimeDescription = ({ start, end }) =>
  moment(start).isSame(moment(end), 'd')
    ? `${moment(start).format('ll')}, ${moment(start).format('LT')} - ${moment(
        end
      ).format('LT')}`
    : `${moment(start).format('lll')} - ${moment(end).format('lll')}`;
