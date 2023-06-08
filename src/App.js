import { Box, Container, Grid, Typography } from '@mui/material';
import Searche from './components/Searche';
import React from 'react';
import useGetUser from './hooks/useGetUsers';

function App() {
  const [ state, setState ] = React.useState('octocat')

  const url = 'https://​api.github.com/users'
  const data = useGetUser()
  React.useEffect(() => {
    data.solicitud(url, state)
  }, [])

  return (
    <Container
      maxWidth='xl'
      className='container'
    >
      <Grid container
        justifyContent='center'
        justifyItems='center'
      >
        <Grid item sm={12} xs={12} md={8} lg={8}>
          <Searche setState={setState} />
        </Grid>
        <Grid item sm={2} xs={6} md={4} lg={4} justifySelf='center'>
          <Typography align='center'>
            hola
          </Typography>
        </Grid>
      </Grid>


    </Container>
  );
}

export default App;

