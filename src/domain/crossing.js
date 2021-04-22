import {
  A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
  BIG_SHIP,
  GIVE_WAY,
  LEEWARD,
  // PORT,
  POWER_DRIVEN,
  SAILBOAT,
  STAND_ON,
  STARBOARD
  // WINDWARD
} from './constants';

const hierarchy = {
  [A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER]: 2,
  [BIG_SHIP]: 1,
  [POWER_DRIVEN]: 4,
  [SAILBOAT]: 3
};

function byPosition(position) {
  return position === LEEWARD ? STAND_ON : GIVE_WAY;
}

function byTack(tack) {
  return tack === STARBOARD ? STAND_ON : GIVE_WAY;
}

function crossing(vesselA, vesselB) {
  if (hierarchy[vesselA.type] < hierarchy[vesselB.type]) {
    // e.g. big ship = 1 and sailboat = 3
    vesselA.isThe = STAND_ON;
    vesselB.isThe = GIVE_WAY;
  } else if (hierarchy[vesselA.type] > hierarchy[vesselB.type]) {
    vesselA.isThe = GIVE_WAY;
    vesselB.isThe = STAND_ON;
  } else if (vesselA.type === SAILBOAT && vesselB.type === SAILBOAT) {
    if (vesselA.tack !== vesselB.tack) {
      vesselA.isThe = byTack(vesselA.tack);
      vesselB.isThe = byTack(vesselB.tack);
    } else {
      if (vesselA.position !== vesselB.position) {
        vesselA.isThe = byPosition(vesselA.position);
        vesselB.isThe = byPosition(vesselB.position);
      } else {
        throw new Error('Same tack and position');
      }
    }
  } else {
    throw new Error('Same vessel type');
  }
}

export default crossing;
