import { useEffect, useState } from 'react';
import Vessel from './domain/Vessel';
import {
  A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
  BIG_SHIP,
  LEEWARD,
  PORT,
  POWER_DRIVEN,
  SAILBOAT,
  STARBOARD,
  WINDWARD
} from './domain/constants';
import List from './List';

function Section({ name, onChange, position, tack, type }) {
  const positions = [LEEWARD, WINDWARD];

  const tacks = [PORT, STARBOARD];

  const types = [
    A_FISHING_VESSEL_WITH_NETS_IN_THE_WATER,
    BIG_SHIP,
    POWER_DRIVEN,
    SAILBOAT
  ];

  const [selectedPosition, setSelectedPosition] = useState(position);
  const [selectedTack, setSelectedTack] = useState(tack);
  const [selectedType, setSelectedType] = useState(type);

  useEffect(() => {
    const vessel = new Vessel({
      position: selectedPosition,
      tack: selectedTack,
      type: selectedType
    });

    onChange(vessel);
  }, [onChange, selectedPosition, selectedTack, selectedType]);

  useEffect(() => {
    if (selectedType !== SAILBOAT) {
      setSelectedPosition(LEEWARD);
      setSelectedTack(PORT);
    }
  }, [selectedType]);

  return (
    <section>
      <h3>{name}</h3>
      <form>
        <h4>Type</h4>
        <List
          collection={types}
          name="type"
          onChange={setSelectedType}
          selected={selectedType}
        />
        {selectedType === SAILBOAT && (
          <>
            <h4>Tack</h4>
            <List
              collection={tacks}
              name="tack"
              onChange={setSelectedTack}
              selected={selectedTack}
            />
            <h4>Position</h4>
            <List
              collection={positions}
              name="position"
              onChange={setSelectedPosition}
              selected={selectedPosition}
            />
          </>
        )}
      </form>
    </section>
  );
}

export default Section;
