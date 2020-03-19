import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../gql/users';
import { GET_ALL_EVENTS } from '../gql/events';
import { redirectToLogin } from '../functions/redirectToLogin';

export const useDataFetching = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { loading: meLoading, error: meError, data: meData } = useQuery(GET_ME);

  const {
    loading: eventsLoading,
    error: eventsError,
    data: eventsData
  } = useQuery(GET_ALL_EVENTS);

  useEffect(() => {
    if (meLoading || eventsLoading) setLoading(true);
    else setLoading(false);

    if (meError || eventsError)
      setError({ me: meError, eventsError: eventsError });

    if (!meData || !meData.me) {
      return redirectToLogin();
    }

    if (meData && eventsData) {
      setData({ me: meData.me, events: eventsData.events });
    }
  }, [meData, meLoading, meError, eventsData, eventsLoading, eventsError]);

  return { data, loading, error };
};
