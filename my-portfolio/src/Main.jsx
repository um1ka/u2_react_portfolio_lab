import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';


export default function () {
    return (
        <div className="main">
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="About" element={<About/>}/>
                <Route exact path="Projects" element={<Projects/>}/>
                <Route exact path="Resume" element={<Resume/>}/>
                <Route exact path="Contact" element={<Contact/>}/>
               
            </Routes>
        </div>
    )
}