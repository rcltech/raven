import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../gql/users';
import { GET_ALL_EVENTS } from '../gql/events';
import { redirectToLogin } from '../functions/redirectToLogin';

/**
 * @author 98sean98
 * This custom hook simplifies data fetching to one code snippet.
 * The two most commonly used data objects which are me and events are fetched all at once here, and returned.
 * Note that the error object corresponds to the errors returned by Apollo's useQuery hook.
 * This hook redirects to login when me data becomes null as id token becomes invalid
 * @returns {{data: {me, events}, loading: boolean, error: {me, events}}}
 */

export const useDataFetching = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { loading: meLoading, error: meError, data: meData } = useQuery(
    GET_ME,
    { fetchPolicy: 'network-only' }
  );

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

    // resolves edge cases where id token becomes invalid, and then web page is refreshed
    if (loading && !meLoading && (!meData || !meData.me)) {
      setError({ me: 'error: no user logged in' });
      return redirectToLogin();
    }
  }, [
    loading,
    meData,
    meLoading,
    meError,
    eventsData,
    eventsLoading,
    eventsError
  ]);

  return { data, loading, error };
};
