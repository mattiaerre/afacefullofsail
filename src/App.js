import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { name, version } from '../package.json';
import crossing from './domain/crossing';
import {
  BIG_SHIP,
  GIVE_WAY,
  LEEWARD,
  PORT,
  SAILBOAT,
  STAND_ON,
  UNKNOWN
} from './domain/constants';
import './App.css';
import Section from './Section';

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
        setNotification(error.message);
        setClassNameA(makeClassName({ ...vesselA, isThe: UNKNOWN }));
        setClassNameB(makeClassName({ ...vesselB, isThe: UNKNOWN }));
      }
    }
  }, [vesselA, vesselB]);

  return (
    <article className="App">
      <h1>{name}</h1>
      <p>
        "But when I raise the sail and lose those ties, anyone else in the
        cockpit inevitably gets <b>a face full of sail</b>."
      </p>
      <h2>Crossing</h2>
      {notification && (
        <p data-testid="notification" className="Notification">
          {notification}
        </p>
      )}
      <ul>
        <li className={classNameA}>
          <Section name="Vessel A" onChange={setVesselA} type={BIG_SHIP} />
        </li>
        <li className={classNameB}>
          <Section
            name="Vessel B"
            onChange={setVesselB}
            position={LEEWARD}
            tack={PORT}
            type={SAILBOAT}
          />
        </li>
      </ul>
      <p className="Legend">
        <span className="Legend__span--giveWay">Give-way</span>
        <span className="Legend__span--standOn">Stand-on</span>
      </p>
      <footer className="App__footer">
        {new Date().getFullYear()} {name} v{version}
      </footer>
    </article>
  );
}

export default App;
