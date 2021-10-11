import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import userState from '../../atoms/userState';

export default function UserForm() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <>
      <Typography variant='h6' gutterBottom>
        User Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='First name'
            fullWidth
            autoComplete='given-name'
            variant='standard'
            value={user.firstName}
            onChange={(event) => {
              setUser({
                ...user,
                firstName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Last name'
            fullWidth
            autoComplete='family-name'
            variant='standard'
            value={user.lastName}
            onChange={(event) => {
              setUser({
                ...user,
                lastName: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='vehicleType'
            name='vehicleType'
            label='Vehicle Type'
            fullWidth
            autoComplete='family-name'
            variant='standard'
            value={user.vehicleType}
            onChange={(event) => {
              setUser({
                ...user,
                vehicleType: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='vehicleColor'
            name='vehicleColor'
            label='Vehicle Color'
            fullWidth
            autoComplete='family-name'
            variant='standard'
            value={user.vehicleColor}
            onChange={(event) => {
              setUser({
                ...user,
                vehicleColor: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='licensePlateNumber'
            name='licensePlateNumber'
            label='Plate Number'
            fullWidth
            autoComplete='family-name'
            variant='standard'
            value={user.licensePlateNumber}
            onChange={(event) => {
              setUser({
                ...user,
                licensePlateNumber: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Address line 1'
            fullWidth
            autoComplete='shipping address-line1'
            variant='standard'
            value={user.address1}
            onChange={(event) => {
              setUser({
                ...user,
                address1: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='address2'
            name='address2'
            label='Address line 2'
            fullWidth
            autoComplete='shipping address-line2'
            variant='standard'
            value={user.address2}
            onChange={(event) => {
              setUser({
                ...user,
                address2: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='City'
            fullWidth
            autoComplete='shipping address-level2'
            variant='standard'
            value={user.city}
            onChange={(event) => {
              setUser({
                ...user,
                city: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            name='state'
            label='State/Province/Region'
            fullWidth
            variant='standard'
            value={user.state}
            onChange={(event) => {
              setUser({
                ...user,
                state: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='postalCode'
            name='postalCode'
            label='Zip / Postal code'
            fullWidth
            autoComplete='shipping postal-code'
            variant='standard'
            value={user.postalCode}
            onChange={(event) => {
              setUser({
                ...user,
                postalCode: event.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='country'
            name='country'
            label='Country'
            fullWidth
            autoComplete='shipping country'
            variant='standard'
            value={user.country}
            onChange={(event) => {
              setUser({
                ...user,
                country: event.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
