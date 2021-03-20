import useSWR from 'swr';
// import format from 'comma-number';

import fetcher from '../lib/fetcher';

export default function Unsplash() {
  const { data } = useSWR('/api/unsplash', fetcher);

  return (
    <p>{data?.url}</p>
  );
}