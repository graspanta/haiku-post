import { Dialog, DialogContent, Grid, CircularProgress } from '@mui/material';
import { HaikuImageSelector } from '../../components/HaikuImageSelector';
import { UploadForm } from '../../components/UploadForm';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { AccountLoaded } from '../../stores/accountLoaded';
import { GlobalUser } from '../../stores/user';
import { useNavigate } from 'react-router-dom';

export const Compose = () => {
  const accountLoaded = useRecoilValue(AccountLoaded);
  const user = useRecoilValue(GlobalUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (accountLoaded) {
      if (!user?.id) {
        navigate('/login');
      }
    }
  }, [accountLoaded, navigate, user?.id]);

  const [imageFile, setImageFile] = useState<File>();

  return (
    <Dialog open={true} fullWidth={true} maxWidth="md">
      <DialogContent style={{ marginTop: 40 }}>
        {user?.id ? (
          <Grid container spacing={4}>
            <Grid item xs style={{ marginRight: 10 }}>
              <HaikuImageSelector imageFile={imageFile} setImageFile={setImageFile} />
              <UploadForm imageFile={imageFile} />
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <CircularProgress size={50} />
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};
