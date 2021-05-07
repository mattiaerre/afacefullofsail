import jibing from './images/sailing-26588_1280.png';
import tacking from './images/sailing-26592_1280.png';

function Tacks() {
  const height = '320px';
  const width = '240px';

  return (
    <p className="Tacks">
      <img
        alt="jibing"
        className="Tacks__Image"
        height={height}
        src={jibing}
        width={width}
      />
      <img
        alt="tacking"
        className="Tacks__Image"
        height={height}
        src={tacking}
        width={width}
      />
    </p>
  );
}

export default Tacks;
