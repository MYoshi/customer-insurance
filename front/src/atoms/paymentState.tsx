import { atom } from 'recoil';

const paymentState = atom({
  key: 'paymentState',
  default: {
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  },
});

export default paymentState;
