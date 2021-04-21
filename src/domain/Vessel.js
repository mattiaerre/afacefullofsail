import { N_A, UNKNOWN } from './constants';

class Vessel {
  constructor({ position = UNKNOWN, tack = N_A, type }) {
    this.isThe = UNKNOWN;
    this.position = position;
    this.tack = tack;
    this.type = type;
  }
}

export default Vessel;
