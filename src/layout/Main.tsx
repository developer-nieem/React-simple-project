
import Header from '../common/shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
             <Header/>
             <Outlet></Outlet>
        </>
    );
};

export default Main;