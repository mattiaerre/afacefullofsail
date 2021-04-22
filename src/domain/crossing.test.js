import {
  A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
  BIG_SHIP,
  GIVE_WAY,
  LEEWARD,
  PORT,
  POWER_DRIVEN,
  SAILBOAT,
  STAND_ON,
  STARBOARD,
  WINDWARD
} from './constants';
import crossing from './crossing';
import Vessel from './Vessel';

describe('hierarchy', () => {
  it('a big ship and a sailboat', () => {
    const bigShip = new Vessel({ type: BIG_SHIP });
    const sailboat = new Vessel({ tack: STARBOARD, type: SAILBOAT });

    // crossing(bigShip, sailboat);
    crossing(sailboat, bigShip);

    expect(bigShip.isThe).toBe(STAND_ON);
    expect(sailboat.isThe).toBe(GIVE_WAY);

    // console.log(sailboat, bigShip);
  });

  it('a fishing vessel with nets in the water and a sailboat', () => {
    const fishing = new Vessel({
      type: A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER
    });
    const sailboat = new Vessel({ tack: STARBOARD, type: SAILBOAT });

    crossing(fishing, sailboat);

    expect(fishing.isThe).toBe(STAND_ON);
    expect(sailboat.isThe).toBe(GIVE_WAY);
  });

  it('a power-driven vessel and a sailboat', () => {
    const powerDriven = new Vessel({ type: POWER_DRIVEN });
    const sailboat = new Vessel({ tack: STARBOARD, type: SAILBOAT });

    crossing(powerDriven, sailboat);

    expect(powerDriven.isThe).toBe(GIVE_WAY);
    expect(sailboat.isThe).toBe(STAND_ON);
  });

  it('2 big ships', () => {
    expect(() => {
      crossing(new Vessel({ type: BIG_SHIP }), new Vessel({ type: BIG_SHIP }));
    }).toThrowError();
  });
});

describe('sailing vessels', () => {
  it('opposite tack', () => {
    const sailboatA = new Vessel({ tack: PORT, type: SAILBOAT });
    const sailboatB = new Vessel({ tack: STARBOARD, type: SAILBOAT });

    // crossing(sailboatA, sailboatB);
    crossing(sailboatB, sailboatA);

    expect(sailboatA.isThe).toBe(GIVE_WAY);
    expect(sailboatB.isThe).toBe(STAND_ON);
  });

  it('same tack', () => {
    const sailboatA = new Vessel({
      position: LEEWARD,
      tack: STARBOARD,
      type: SAILBOAT
    });
    const sailboatB = new Vessel({
      position: WINDWARD,
      tack: STARBOARD,
      type: SAILBOAT
    });

    crossing(sailboatA, sailboatB);

    expect(sailboatA.isThe).toBe(STAND_ON);
    expect(sailboatB.isThe).toBe(GIVE_WAY);
  });

  it('same position', () => {
    const sailboatA = new Vessel({
      position: WINDWARD,
      tack: STARBOARD,
      type: SAILBOAT
    });
    const sailboatB = new Vessel({
      position: WINDWARD,
      tack: STARBOARD,
      type: SAILBOAT
    });

    expect(() => {
      crossing(sailboatA, sailboatB);
    }).toThrowError();
  });
});
