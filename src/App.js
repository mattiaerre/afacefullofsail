import classnames from 'classnames';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { name, version } from '../package.json';
import './App.css';
import crossing from './domain/crossing';
import Vessel from './domain/Vessel';
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
  UNKNOWN,
  WINDWARD
} from './domain/constants';

function List({ collection, name, onChange, selected }) {
  return (
    <ul>
      {collection.map((element) => {
        const id = uuid();
        return (
          <li key={element}>
            <input
              checked={element === selected}
              id={id}
              name={name}
              onChange={({ target: { value } }) => onChange(value)}
              type="radio"
              value={element}
            />
            <label htmlFor={id}>{element}</label>
          </li>
        );
      })}
    </ul>
  );
}

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

  return (
    <section>
      <h2>{name}</h2>
      <form>
        <h3>Type</h3>
        <List
          collection={types}
          name="type"
          onChange={setSelectedType}
          selected={selectedType}
        />
        <h3>Tack</h3>
        <List
          collection={tacks}
          name="tack"
          onChange={setSelectedTack}
          selected={selectedTack}
        />
        <h3>Position</h3>
        <List
          collection={positions}
          name="position"
          onChange={setSelectedPosition}
          selected={selectedPosition}
        />
      </form>
    </section>
  );
}

function App() {
  const [classNameA, setClassNameA] = useState(null);
  const [classNameB, setClassNameB] = useState(null);
  const [notification, setNotification] = useState(null);
  const [vesselA, setVesselA] = useState(null);
  const [vesselB, setVesselB] = useState(null);

  function makeClassName(vessel) {
    return classnames({
      'Section__li--giveWay': vessel !== null && vessel.isThe === GIVE_WAY,
      'Section__li--standOn': vessel !== null && vessel.isThe === STAND_ON
    });
  }

  useEffect(() => {
    if (vesselA !== null && vesselB !== null) {
      try {
        setNotification(null);
        crossing(vesselA, vesselB);
        setClassNameA(makeClassName(vesselA));
        setClassNameB(makeClassName(vesselB));
      } catch (error) {
        // console.log(error);
        setNotification(error.message);
        setClassNameA(makeClassName({ ...vesselA, isThe: UNKNOWN }));
        setClassNameB(makeClassName({ ...vesselB, isThe: UNKNOWN }));
      }
    }
  }, [vesselA, vesselB]);

  return (
    <article className="App">
      <p>
        "But when I raise the sail and lose those ties, anyone else in the
        cockpit inevitably gets <b>a face full of sail</b>."
      </p>
      {notification && <p className="Notification">{notification}</p>}
      <ul>
        <li className={classNameA}>
          <Section name="A" onChange={setVesselA} type={BIG_SHIP} />
        </li>
        <li className={classNameB}>
          <Section
            name="B"
            onChange={setVesselB}
            position={LEEWARD}
            tack={PORT}
            type={SAILBOAT}
          />
        </li>
      </ul>
      <footer className="App__footer">
        {new Date().getFullYear()} {name} v{version}
      </footer>
    </article>
  );
}

export default App;
