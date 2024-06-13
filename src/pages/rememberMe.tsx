import { Button, Card, TextField, Typography } from '@mui/material';
import { useRememberMe } from '../hooks/useRememberMe';

export const RememberMe = () => {
  const { ref, sendEmail, sendSuccess, loading, error } = useRememberMe();

  return (
    <Card style={{ width: '95%', maxWidth: 550, padding: '50px 70px' }} variant="outlined">
      <Typography variant="h5" style={{ marginBottom: 40 }}>
        パスワードをつくりなおしますか？
      </Typography>

      {error.has('main') && (
        <Typography color="error" style={{ marginBottom: 40 }}>
          {error.get('main')}
        </Typography>
      )}

      <label style={{ display: 'block', marginBottom: 40 }}>
        <Typography>メールアドレス</Typography>
        <TextField
          type="email"
          required
          fullWidth
          size="small"
          variant="outlined"
          inputRef={ref.emailRef}
          error={error.has('email')}
          helperText={error.has('email') ? error.get('email') : ''}
        />
      </label>

      {sendSuccess && (
        <Typography color="primary" style={{ marginBottom: 40 }}>
          ✔メールの送信が完了しました。
        </Typography>
      )}

      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={sendEmail}
          disabled={loading}
          style={{ marginBottom: 40 }}
        >
          再発行
        </Button>
      </div>
      <div>
        <Button href="/login" color="primary">
          ログインはこちら
        </Button>
      </div>
    </Card>
  );
};
