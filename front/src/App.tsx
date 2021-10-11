import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import PricingPage from './components/page/PricingPage';
import FormPage from './components/page/FormPage';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const footers = [
  {
    title: 'Menu 1',
    description: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  },
  {
    title: 'Menu 2',
    description: ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'],
  },
  {
    title: 'Menu 3',
    description: ['Option1', 'Option2', 'Option3', 'Option4'],
  },
];

export default function App() {
  return (
    <Router>
      <div>
        <AppBar
          position='static'
          color='default'
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Insurance Company
            </Typography>
            <nav>
              <Link
                variant='button'
                color='text.primary'
                href='#'
                sx={{ my: 1, mx: 1.5 }}
              >
                Insurance
              </Link>
              <Link
                variant='button'
                color='text.primary'
                href='#'
                sx={{ my: 1, mx: 1.5 }}
              >
                Support
              </Link>
            </nav>
            <Button href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/'>
            <PricingPage />
          </Route>
          <Route path='/automobile'>
            <FormPage />
          </Route>
          <Route path='/bike'>
            <FormPage />
          </Route>
        </Switch>

        {/* Footer */}
        <Container
          maxWidth='md'
          component='footer'
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            py: [3, 6],
          }}
        >
          <Grid container spacing={4} justifyContent='space-evenly'>
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant='h6' color='text.primary' gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href='#' variant='subtitle1' color='text.secondary'>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        {/* End footer */}
      </div>
    </Router>
  );
}
