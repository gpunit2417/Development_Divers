import './App.css';
import Center from './components/Center';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='center'>
        <Sidebar />
        <Center/>
      </div>
    </div>
  );
}

export default App;
