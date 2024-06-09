import { useAuth } from '../hooks/useAuth';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export const SignInWithGitHub = () => {
  const { signInWithGithub, error } = useAuth();

  return (
    <div>
      <Button onClick={signInWithGithub} variant="outlined" color="primary">
        <GitHubIcon />
      </Button>
      {error && <p>{error}</p>}
    </div>
  );
};
