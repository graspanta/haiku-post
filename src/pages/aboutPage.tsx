import { Container } from '@mui/material';

export const AboutPage = () => {
  return (
    <>
      <Container style={{ textAlign: 'left', minHeight: '100%' }}>
        <h2 style={{ paddingBottom: 10 }}>俳句(はいく) </h2>
        <p>
          俳句(はいく)とは、<strong>5 &middot; 7 &middot; 5</strong>の<strong>17</strong>
          文字(もじ)を基本(きほん)にしてこころの動(うご)きなどを、あらわします。
        </p>
        <p>
          また、俳句には季語(きご)といって、自然(しぜん)の変化(へんか)を
          あらわす言葉(ことば)をつかうことが多(おお)いです。
        </p>
        <p>たとえば、 桜(さくら)という語(ご)は、春(はる)が感(かん)じられます。</p>
      </Container>
    </>
  );
};
