import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
  return (
    <Paper
      elevation={0}
      variant="outlined"
      style={{
        paddingLeft: 10,
        display: 'flex',
        alignItems: 'center',
        maxWidth: 500,
        flex: 1,
        overflow: 'hidden',
        marginLeft: 10,
      }}
    >
      <InputBase placeholder="検索" style={{ width: '100%' }} />
      <div
        style={{
          width: 80,
          height: 34,
          backgroundColor: '#F4F4F4',
          borderLeft: '1px solid #CCCCCC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <SearchIcon />
      </div>
    </Paper>
  );
};
