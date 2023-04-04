import NavbarSection from './NavbarSection';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import AboutMe from './routes/AboutMe';
import PollSurvey from './routes/PollSurvey';
import NotMatch from './routes/NoMatch';

function App() {
    return (
        <>
            <NavbarSection />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/aboutMe' element={<AboutMe/>}></Route>
                <Route exact path='/survey' element={<PollSurvey/>}></Route>
                <Route path='*' element={<NotMatch/>}></Route>
			</Routes>
            <Footer />
        </>
    );    
}
export default App;