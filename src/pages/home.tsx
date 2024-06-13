import { Button, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useUploadHaiku } from '../hooks/useCompose';

export const Home = () => {
  const [inputText, setInputText] = useState('');
  const haikuRef = useRef<HTMLInputElement>(null);
  const { upload, loading, error: uploadError } = useUploadHaiku();
  const [errorMessage, setErrorMessage] = useState<Error>();

  // const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) =>
  //   setInputText(() => event.target.value);

  // const onSubmitNewMessage = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (inputText === '') return;
  //   // Insert haiku Mutation here
  //   upload({
  //     haiku: haikuRef.current?.value,
  //     ownerId: user.id,
  //   });
  //   setInputText('');
  // };

  useEffect(() => {
    setErrorMessage(uploadError);
  }, [uploadError]);

  return (
    <>
      {/* {isLogin ? ( */}
      <div style={{ marginLeft: 20 }}>
        <form>
          <label>
            <TextField fullWidth size="small" variant="outlined" inputRef={haikuRef} />
          </label>
          <div>
            <Button type="submit" disabled={inputText === ''}>
              送信
            </Button>
          </div>
        </form>
      </div>
      {/* ) : (
        <div></div>
      )} */}

      <div style={{ marginLeft: 20, marginTop: 60 }}>
        {/* Retrieve haikus here */}
        hello world
      </div>
    </>
  );
};
