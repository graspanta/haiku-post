import { Button } from '@mui/material';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Home = () => {
  const [inputText, setInputText] = useState('');
  const { session: isLogin } = useAuth();

  const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(() => event.target.value);

  const onSubmitNewMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText === '') return;
    // Insert haiku Mutation here
    setInputText('');
  };

  return (
    <>
      {isLogin ? (
      <div style={{ marginLeft: 20 }}>
        <form onSubmit={onSubmitNewMessage}>
          <input type="text" name="message" value={inputText} onChange={onChangeInputText} />
          <Button type="submit" disabled={inputText === ''}>
            送信
          </Button>
        </form>
      </div>
       ) : (
        <div></div>
      )} 

      <div style={{ marginLeft: 20, marginTop: 60 }}>
        {/* Retrieve haikus here */}
        hello world
      </div>
    </>
  );
};
