import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { HaikuCard } from '../components/HaikuCard';
import { storage } from '../firebase/config';
import { useHailkusQuery } from '../graphql/generated';
// import { Link } from 'react-router-dom';

export const Home = () => {
  const { data, error } = useHailkusQuery();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container>
      <Grid container spacing={2}>
        {data?.haikus.map(haiku => (
          <Grid item xs={4}>
            {/* <Link to={`/detail/${haiku.id}`} style={{ textDecoration: 'none' }}> */}
            <HaikuCard
              haiku={haiku.haiku}
              owner={haiku.owner?.name || ''}
              created={haiku.created_at}
              fetcher={() => storage.ref(haiku.image_url).getDownloadURL()}
            />
            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
