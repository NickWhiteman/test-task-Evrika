import './style/style.css';
import { Dashboard } from './dashboard/Dashboard';
import { selectIsOpenModal } from './components/modal-window/selectors';
import { useSelector } from 'react-redux';

function App() {
  const isOpen = useSelector(selectIsOpenModal)
  return (
    <div className={`App ${isOpen &&  'dark-screen'}`}>
      <div className="app__head"></div>
      <div className="app__left-panel"></div>
      <div className="app__dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
