import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import TwoWheeler from '@mui/icons-material/TwoWheeler';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHistory } from 'react-router-dom';

const tiers = [
  {
    title: 'Automobile',
    price: '1000',
    description: [
      <div style={{ fontSize: '100px' }}>
        <DirectionsCar fontSize='inherit' />
      </div>,
    ],
    buttonText: 'Sign up for Automobile',
    buttonVariant: 'outlined',
    link: 'automobile',
  },
  {
    title: 'Bike',
    price: '500',
    description: [
      <div style={{ fontSize: '100px' }}>
        <TwoWheeler fontSize='inherit' />
      </div>,
    ],
    buttonText: 'Sign up for Bike',
    buttonVariant: 'outlined',
    link: 'bike',
  },
];

function PricingContent() {
  const history = useHistory();

  return (
    <>
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth='sm'
        component='main'
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='text.primary'
          gutterBottom
        >
          Insurance Products
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='text.secondary'
          component='p'
        >
          Choose your product for the insurance
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={6}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography
                      component='h2'
                      variant='h3'
                      color='text.primary'
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant='h6' color='text.secondary'>
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component='li'
                        variant='subtitle1'
                        align='center'
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    onClick={() => {
                      history.push(`/${tier.link}`);
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default function PricingPage() {
  return <PricingContent />;
}
