import { atom } from 'recoil';

const userState = atom({
  key: 'userState',
  default: {
    firstName: '',
    lastName: '',
    age: '',
    vehicleType: '',
    vehicleColor: '',
    licensePlateNumber: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
});

export default userState;
