import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Github from './components/GitHub/GitHub';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/comingsoon" element={<Home />} />
            <Route path="/about" element={<About color="red" />} />
            <Route path="/github" element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
