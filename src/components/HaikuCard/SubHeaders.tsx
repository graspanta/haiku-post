import { Typography } from '@mui/material';

export interface SubHeadersProps {
  owner: string;
  created: Date;
}

export const SubHeaders = ({ owner, created }: SubHeadersProps) => {
  return (
    <>
      <Typography variant="body2">{owner}</Typography>
      <Typography variant="body2">{new Date(created).toLocaleDateString()}</Typography>
    </>
  );
};
