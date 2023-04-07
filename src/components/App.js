import NavbarSection from './NavbarSection';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import SplashApi from '../pages/assignments/SplashApi';
import NotMatch from '../pages/NoMatch';

function App() {
    return (
        <>
            <NavbarSection />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/aboutMe' element={<AboutMe/>}></Route>
                <Route exact path='/assignments/imageapi' element={<SplashApi/>}></Route>
                <Route path='*' element={<NotMatch/>}></Route>
			</Routes>
            <Footer />
        </>
    );    
}
export default App;