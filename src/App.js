import classnames from 'classnames';
import { useEffect, useState } from 'react';
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
import anatomy from './images/news-2020-9-24-boat-anatomy-1024x512.png';
import './App.css';
import Section from './Section';
import Tacks from './Tacks';

function App({ name, version }) {
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

  const size = 256;

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
      <Tacks />
      <h2>The Anatomy of a Boat</h2>
      <img
        alt="the anatomy of a boat"
        className="Tacks__Image"
        height={`${size}px`}
        src={anatomy}
        width={`${size * 2}px`}
      />
      <h2>Resources</h2>
      <ul>
        <li>
          <a
            href="https://asa.com/news/2022/03/14/boat-anotomy/"
            rel="noreferrer"
            target="_blank"
          >
            https://asa.com/news/2022/03/14/boat-anotomy/
          </a>
        </li>
      </ul>
      <footer className="App__footer">
        {new Date().getFullYear()} {name} v{version}
      </footer>
    </article>
  );
}

export default App;
