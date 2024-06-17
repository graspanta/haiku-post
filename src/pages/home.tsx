import { Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { HaikuCard } from '../components/HaikuCard';
import { storage } from '../firebase/config';
import { useHailkusQuery } from '../graphql/generated';

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
            <HaikuCard
              haiku={haiku.haiku}
              owner={haiku.owner?.name || ''}
              created={haiku.created_at}
              fetcher={() => storage.ref(haiku.image_url!).getDownloadURL()}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
