import { atom } from 'recoil';

const insuranceOptionsState = atom({
  key: 'insuranceOptions',
  default: [false, false, false, false],
});

export default insuranceOptionsState;
