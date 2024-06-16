import { Card, CardHeader, CardMedia } from '@mui/material';
import { HaikuLine, HaikuLineProps } from './HaikuLine';
import { SubHeaders, SubHeadersProps } from './SubHeaders';
import { useEffect, useState } from 'react';

export type HaikuCardProps = {
  fetcher: () => Promise<string | undefined>;
} & HaikuLineProps &
  SubHeadersProps;

export const HaikuCard = ({ fetcher, haiku, owner, created }: HaikuCardProps) => {
  const [imageSrc, setImageSrc] = useState<string>();
  useEffect(() => {
    fetcher().then(setImageSrc);
  });

  return (
    <Card elevation={0} square style={{ maxWidth: 360, backgroundColor: 'transparent' }}>
      <CardMedia
        image={imageSrc || '/static/black-screen.jpeg'}
        style={{ height: 0, paddingTop: '56.25%' }}
      />

      <CardHeader
        title={<HaikuLine haiku={haiku} />}
        subheader={<SubHeaders owner={owner} created={created} />}
        style={{
          alignItems: 'start',
          backgroundColor: 'transparent',
          paddingLeft: 0,
          paddingRight: 0,
        }}
      />
    </Card>
  );
};
