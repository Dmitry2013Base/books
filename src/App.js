import '../src/styles/app.css'
import { Routes, Route } from 'react-router-dom';
import { routes } from './store/Routes';
import CustomHeader from './components/CustomHeader';

function App() {
  return (
    <div className="App">
      <CustomHeader/>
      <Routes>
        {
          routes.map(({ path, element }) => <Route key={path} path={path} element={element} exact />)
        }
      </Routes>
    </div>
  );
}

export default App;
