import {
  A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
  BIG_SHIP,
  GIVE_WAY,
  POWER_DRIVEN,
  SAILBOAT,
  STAND_ON
} from './constants';
import crossing from './crossing';
import Vessel from './Vessel';

describe('hierarchy', () => {
  it('a big ship and a sailboat', () => {
    const bigShip = new Vessel(BIG_SHIP);
    const sailboat = new Vessel(SAILBOAT);

    // crossing(bigShip, sailboat);
    crossing(sailboat, bigShip);

    expect(bigShip.isThe).toBe(STAND_ON);
    expect(sailboat.isThe).toBe(GIVE_WAY);

    console.log(sailboat, bigShip);
  });

  it('a fishing vessel with nets in the water and a sailboat', () => {
    const fishing = new Vessel(A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER);
    const sailboat = new Vessel(SAILBOAT);

    crossing(fishing, sailboat);

    expect(fishing.isThe).toBe(STAND_ON);
    expect(sailboat.isThe).toBe(GIVE_WAY);
  });

  it('a power-driven vessel and a sailboat', () => {
    const powerDriven = new Vessel(POWER_DRIVEN);
    const sailboat = new Vessel(SAILBOAT);

    crossing(powerDriven, sailboat);

    expect(powerDriven.isThe).toBe(GIVE_WAY);
    expect(sailboat.isThe).toBe(STAND_ON);
  });

  it('2 big ships', () => {
    expect(() => {
      crossing(new Vessel(BIG_SHIP), new Vessel(BIG_SHIP));
    }).toThrowError();
  });
});
