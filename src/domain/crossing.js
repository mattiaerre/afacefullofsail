import {
  A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
  BIG_SHIP,
  GIVE_WAY,
  POWER_DRIVEN,
  SAILBOAT,
  STAND_ON
} from './constants';

const hierarchy = {
  [A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER]: 2,
  [BIG_SHIP]: 1,
  [POWER_DRIVEN]: 4,
  [SAILBOAT]: 3
};

function crossing(vesselA, vesselB) {
  if (hierarchy[vesselA.type] < hierarchy[vesselB.type]) {
    // e.g. big ship = 1 and sailboat = 3
    vesselA.isThe = STAND_ON;
    vesselB.isThe = GIVE_WAY;
  } else if (hierarchy[vesselA.type] > hierarchy[vesselB.type]) {
    vesselA.isThe = GIVE_WAY;
    vesselB.isThe = STAND_ON;
  } else {
    throw new Error('same type');
  }
}

export default crossing;
