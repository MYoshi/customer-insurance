import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Checkbox } from '@mui/material';
import { useRecoilState } from 'recoil';
import insuranceOptionsState from '../../atoms/insuranceOptionsState';

export const products = [
  {
    name: 'Option 1',
    desc: 'Add option 1',
    price: '$100.00',
    value: 100,
  },
  {
    name: 'Option 2',
    desc: 'Add option 2',
    price: '$150.00',
    value: 150,
  },
  {
    name: 'Option 3',
    desc: 'Add option 3',
    price: '$130.00',
    value: 130,
  },
  {
    name: 'Option 4',
    desc: 'Add option 4',
    price: '$230.00',
    value: 230,
  },
];

export default function InsuranceOptions() {
  const [insuranceOptions, setInsuranceOptions] = useRecoilState(
    insuranceOptionsState,
  );

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Insurance Options
      </Typography>
      <List disablePadding>
        {products.map((product, index) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <Checkbox
              checked={insuranceOptions[index]}
              onChange={(event, checked) => {
                const cloneInsuranceOptions = [...insuranceOptions];
                cloneInsuranceOptions[index] = checked;
                setInsuranceOptions(cloneInsuranceOptions);
              }}
            />
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant='body2'>{product.price}</Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
}
