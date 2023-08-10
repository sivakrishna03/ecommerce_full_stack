import HomeNavbar from './components/HomeNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesConfig from './config/RoutesConfig'


const App = () => {
  return (
    <>
      <HomeNavbar />
      <BrowserRouter>
        <Routes>
          {RoutesConfig.map((route) => {
            return (<Route exact key={route.path} path={route.path} element={route.element} />)
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
