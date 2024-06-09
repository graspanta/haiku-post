import { Button, Card, TextField, Typography } from '@mui/material';
import { useLogin } from '../hooks/useLogin';

export default function Login() {
  const { ref, login } = useLogin();

  return (
    <Card style={{ width: '95%', maxWidth: 550, padding: '50px 70px' }}>
      <Typography variant="h5" style={{ marginBottom: 40 }}>
        ログイン
      </Typography>

      <label style={{ display: 'block', marginBottom: 40 }}>
        <Typography>メールアドレス</Typography>
        <form>
          <TextField
            type="email"
            required
            fullWidth
            size="small"
            variant="outlined"
            inputRef={ref.emailRef}
          />
        </form>
      </label>

      <label style={{ display: 'block', marginBottom: 40 }}>
        <Typography>パスワード</Typography>
        <TextField type="password" required fullWidth size="small" variant="outlined" />
        <form>
          <TextField
            type="password"
            required
            fullWidth
            size="small"
            variant="outlined"
            inputRef={ref.passwordRef}
          />
        </form>
      </label>

      <div>
        <Button variant="contained" color="primary" onClick={login} style={{ marginBottom: 40 }}>
          ログイン
        </Button>
      </div>
      <div>
        <Button href="/signup" color="primary">
          アカウント作成はこちら
        </Button>
      </div>
      <div>
        <Button href="/forget" color="primary">
          パスワードを忘れた場合はこちら
        </Button>
      </div>
    </Card>
  );
}
