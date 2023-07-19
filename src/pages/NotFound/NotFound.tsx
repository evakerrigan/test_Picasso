import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import img404 from '../../assets/404.png';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleBackHome = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    navigate(`/`);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h1">
              404
            </Typography>
            <Typography variant="h6">
              The page you’re looking for doesn’t exist.
            </Typography>
            <Button variant="contained" onClick={handleBackHome}>Back Home</Button>
          </Grid>
          <Grid item xs={6}>
            <img
              src={img404}
              alt=""
              width={500} height={500}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
