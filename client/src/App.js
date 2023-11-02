import './App.css';
import Home from './components/Home';
import AddProject from './components/AddProject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddProject" element={<AddProject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;