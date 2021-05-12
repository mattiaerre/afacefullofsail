import jibing from './images/sailing-26588_1280.png';
import tacking from './images/sailing-26592_1280.png';

function Tacks() {
  const height = '320px';
  const width = '240px';

  return (
    <article className="Tacks">
      <section>
        <img
          alt="jibing"
          className="Tacks__Image"
          height={height}
          src={jibing}
          width={width}
        />
        <p>"Prepare to jibe!"</p>
        <p>"Ready."</p>
        <p>"Jibe-ho," or "Jibing,"</p>
      </section>
      <section>
        <img
          alt="tacking"
          className="Tacks__Image"
          height={height}
          src={tacking}
          width={width}
        />
        <p>"Prepare to tack!" or "Ready about!"</p>
        <p>"Ready!"</p>
        <p>"Helm's a-lee," or "Tacking,"</p>
      </section>
    </article>
  );
}

export default Tacks;
