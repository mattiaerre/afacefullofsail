import { name, version } from '../package.json';
import './App.css';

function App() {
  return (
    <article className="App">
      <p>
        "But when I raise the sail and lose those ties, anyone else in the
        cockpit inevitably gets <b>a face full of sail</b>."
      </p>
      <footer className="App__footer">
        {new Date().getFullYear()} {name} v{version}
      </footer>
    </article>
  );
}

export default App;
