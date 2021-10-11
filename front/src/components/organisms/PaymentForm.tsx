import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import paymentState from '../../atoms/paymentState';

export default function PaymentForm() {
  const [payment, setPayment] = useRecoilState(paymentState);

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            label='Name on card'
            fullWidth
            autoComplete='cc-name'
            variant='standard'
            value={payment.cardName}
            onChange={(event) => {
              setPayment({
                ...payment,
                cardName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            label='Card number'
            fullWidth
            autoComplete='cc-number'
            variant='standard'
            value={payment.cardNumber}
            onChange={(event) => {
              setPayment({
                ...payment,
                cardNumber: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            label='Expiry date'
            fullWidth
            autoComplete='cc-exp'
            variant='standard'
            value={payment.expDate}
            onChange={(event) => {
              setPayment({
                ...payment,
                expDate: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            label='CVV'
            helperText='Last three digits on signature strip'
            fullWidth
            autoComplete='cc-csc'
            variant='standard'
            value={payment.cvv}
            onChange={(event) => {
              setPayment({
                ...payment,
                cvv: event.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
