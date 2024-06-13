import { Button, Card, TextField, Typography } from '@mui/material';
import { Logo } from '../components/Logo';
import { useLogIn } from '../hooks/useLogIn';

export const LogIn = () => {
  const { ref, error, loading, login } = useLogIn();

  return (
    <Card style={{ width: '95%', maxWidth: 550, padding: '50px 70px' }}>
      <div style={{ width: 80, marginBottom: 40 }}>
        <Logo />
      </div>

      <Typography variant="h5" style={{ marginBottom: 40 }}>
        ログインしてください
      </Typography>

      {error.has('main') && (
        <Typography color="error" style={{ marginBottom: 40 }}>
          {error.get('main')}
        </Typography>
      )}

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
            error={error.has('email')}
            helperText={error.has('email') ? error.get('email') : ''}
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
            error={error.has('password')}
            helperText={error.has('password') ? error.get('password') : ''}
          />
        </form>
      </label>

      <div>
        <Button variant="contained" color="primary" onClick={login} style={{ marginBottom: 40 }}>
          {loading ? 'ログイン中' : 'ログイン'}
        </Button>
      </div>
      <div>
        <Button href="/signup" color="primary">
          登録(とうろく)はこちら
        </Button>
      </div>
      <div>
        <Button href="/forget" color="primary">
          パスワードを忘れたときはこちら
        </Button>
      </div>
    </Card>
  );
};
