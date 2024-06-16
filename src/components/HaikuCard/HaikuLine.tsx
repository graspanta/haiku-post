import { Typography } from '@mui/material';

export interface HaikuLineProps {
  haiku: string;
}

export const HaikuLine = ({ haiku }: HaikuLineProps) => {
  return (
    <Typography style={{ lineHeight: 1.2 }} component="h3" variant="subtitle1">
      {haiku}
    </Typography>
  );
};
