import Home from "../components/Home";
import Contact from '../components/Contact';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';

const RoutesConfig =
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/Login',
            element: <Login />
        },
        {
            path: '/Signup',
            element: <Signup />
        },
        {
            path: '/Contact',
            element: <Contact />
        },
    ];

export default RoutesConfig;
