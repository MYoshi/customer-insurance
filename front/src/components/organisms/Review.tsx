import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useRecoilValue } from 'recoil';
import { products } from './InsuranceOptions';
import userState from '../../atoms/userState';
import insuranceOptionsState from '../../atoms/insuranceOptionsState';
import paymentState from '../../atoms/paymentState';

export default function Review() {
  const user = useRecoilValue(userState);
  const insuranceOptions = useRecoilValue(insuranceOptionsState);
  const payment = useRecoilValue(paymentState);
  const paymentLabels = [
    { name: 'Card holder', detail: payment.cardName },
    { name: 'Card number', detail: payment.cardNumber },
    { name: 'Expiry date', detail: payment.expDate },
  ];
  const addresses = `${user.state} ${user.city} ${user.postalCode} ${user.country}`;

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product, index) =>
          insuranceOptions[index] ? (
            <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant='body2'>{product.price}</Typography>
            </ListItem>
          ) : null,
        )}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
            $
            {products.reduce(
              (previousValue, currentValue, index) =>
                insuranceOptions[index]
                  ? previousValue + currentValue.value
                  : previousValue,
              0,
            )}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            User Info
          </Typography>
          <Typography gutterBottom>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography gutterBottom>{addresses}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Car Info
          </Typography>
          <Typography gutterBottom>
            {user.vehicleType} {user.vehicleColor} {user.licensePlateNumber}
          </Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {paymentLabels.map((paymentLabel) => (
              <React.Fragment key={paymentLabel.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{paymentLabel.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{paymentLabel.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
