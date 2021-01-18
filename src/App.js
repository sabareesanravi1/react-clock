import Timer from './Timer'

import './App.css';

function App() {
  var d = new Date();
  var n = d.getTime();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Timer/>
        </div>
      </header>
    </div>
  );
}

export default App;
