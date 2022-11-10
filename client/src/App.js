import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
