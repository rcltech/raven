/**
 * @author welvin21
 * This function creates a modal
 * based on a unique key which determines the modal message
 * @param  {string} modalKey modal key which is unique to a particular modal message
 * @return {object}          an object describing the details of the modal
 */
export const createModal = modalKey => {
  const isOpen = true;
  let title = '';

  switch (modalKey) {
    case 'create-event-success':
      title = 'Your event has been created successfully!';
      break;
    case 'delete-event-success':
      title = 'Your event has been deleted successfully!';
      break;
    case 'error':
      title = 'An error has occured.';
      break;
    default:
      title = 'This is an empty modal.';
  }

  return { isOpen, title };
};
