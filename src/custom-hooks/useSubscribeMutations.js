import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  SUBSCRIBE_EVENT,
  UNSUBSCRIBE_EVENT,
  GET_ALL_EVENTS
} from '../gql/events';

/**
 * @author welvin21
 * This custom hook simplifies event's subscribers modifications.
 * Both subscriber addition and removal are supported.
 * @returns {{ methods: { subscribeEvent, unsubscribeEvent }, loading: { subscribeLoading, unsubscribeLoading }, error: { subscribeError, unsubscribeError }}
 */

export const useSubscribeMutations = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [
    subscribeEvent,
    { loading: subscribeLoading, error: subscribeError }
  ] = useMutation(SUBSCRIBE_EVENT, {
    refetchQueries: [{ query: GET_ALL_EVENTS }]
  });

  const [
    unsubscribeEvent,
    { loading: unsubscribeLoading, error: unsubscribeError }
  ] = useMutation(UNSUBSCRIBE_EVENT, {
    refetchQueries: [{ query: GET_ALL_EVENTS }]
  });

  useEffect(() => {
    if (subscribeLoading || unsubscribeLoading) setLoading(true);
    else setLoading(false);

    if (subscribeError || unsubscribeError)
      setError({ subscribeError, unsubscribeError });
  }, [subscribeLoading, unsubscribeLoading, subscribeError, unsubscribeError]);

  return { methods: { subscribeEvent, unsubscribeEvent }, loading, error };
};
