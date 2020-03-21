import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../gql/users';
import { GET_ALL_EVENTS } from '../gql/events';

/**
 * @author 98sean98
 * This custom hook simplifies data fetching to one code snippet.
 * The two most commonly used data objects which are me and events are fetched all at once here, and returned.
 * Note that the error object corresponds to the errors returned by Apollo's useQuery hook.
 * @returns {{data: {me, events}, loading: boolean, error: {me, events}}}
 */

export const useDataFetching = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  // loads me data from cache
  const { loading: meLoading, error: meError, data: meData } = useQuery(GET_ME);

  // loads events data from cache first then update cache from network
  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData
  } = useQuery(GET_ALL_EVENTS, { fetchPolicy: 'cache-and-network' });

  useEffect(() => {
    if (meLoading || eventsLoading) setLoading(true);
    else setLoading(false);

    if (meError || eventsError)
      setError({ me: meError, eventsError: eventsError });

    if (meData && meData.me && eventsData && eventsData.events) {
      setData({ me: meData.me, events: eventsData.events });
    }
  }, [meData, meLoading, meError, eventsData, eventsLoading, eventsError]);

  return { data, loading, error };
};
