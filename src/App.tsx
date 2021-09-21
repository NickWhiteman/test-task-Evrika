import './style/style.css';
import { Dashboard } from './dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="app__head"></div>
      <div className="app__left-panel"></div>
      <div className="app__dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
