import Home from '../pages/home'
import Scanne from '../pages/Scanne'
import { Routes, Route } from 'react-router-dom';
import User from '../pages/User';


function MainRoutes() {

    return (
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/Scanne' element={<Scanne />} />
            <Route path="/User/:userName" element={<User />} />


        </Routes>
    )
}

export default MainRoutes;