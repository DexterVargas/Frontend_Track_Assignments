import NavbarSection from './NavbarSection';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import MyPetRoute from '../pages/assignments/MyPetRoute';
import NotMatch from '../pages/NoMatch';

function App() {
    return (
        <>
            <NavbarSection />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/aboutMe' element={<AboutMe/>}></Route>
                <Route exact path='/assignments/mypet' element={<MyPetRoute/>}></Route>
                <Route path='*' element={<NotMatch/>}></Route>
			</Routes>
            <Footer />
        </>
    );    
}
export default App;