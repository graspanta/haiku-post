import { Button, TextField, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useImageUploader } from '../hooks/useImageUploader';
import { GlobalUser } from '../stores/user';

export type UploadFormProps = {
  imageFile: File | undefined;
};

export function UploadForm({ imageFile }: UploadFormProps) {
  const haikuRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<Error>();
  const { upload, loading, error: uploadError } = useImageUploader();
  const navigate = useNavigate();
  const user = useRecoilValue(GlobalUser);

  const submit = () => {
    if (!user?.id) {
      return setErrorMessage(new Error('ログインしてください。'));
    }
    if (!imageFile) {
      return setErrorMessage(new Error('画像ファイルを選択してください。'));
    }
    if (!haikuRef.current?.value) {
      return setErrorMessage(new Error('俳句を入力してください。'));
    }

    upload({
      file: {
        image: imageFile,
      },
      haiku: haikuRef.current.value,
      ownerId: user.id,
    }).then(data => {
      if (data?.id) {
        navigate('/');
      }
    });
  };

  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      <label style={{ display: 'block', paddingBottom: 40 }}>
        <Typography variant="body2">俳句(はいく)</Typography>
        <TextField fullWidth size="small" variant="outlined" inputRef={haikuRef} />
      </label>

      {errorMessage?.message && (
        <label>
          <Typography align="center" color="error">
            {errorMessage?.message}
          </Typography>
        </label>
      )}

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" disabled={loading} onClick={submit}>
          {loading ? 'アップロード中' : 'おくる'}
        </Button>
      </div>
    </>
  );
}
