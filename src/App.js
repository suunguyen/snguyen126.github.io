import './App.scss';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import CV from './pages/CV';
import PortfliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

function App() {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle);
    };

    return (
        <div className='App'>
            <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
                <NavBar />
            </div>
            <div className='nav-btn' onClick={navClick}>
                <div className='lines-1'></div>
                <div className='lines-2'></div>
                <div className='lines-3'></div>
            </div>
            <div className='main-content'>
                <div className='content'>
                    <Switch>
                        <Route path='/' exact>
                            <HomePage />
                        </Route>
                        <Route path='/about' exact>
                            <CV />
                        </Route>
                        <Route path='/portfolios' exact>
                            <PortfliosPage />
                        </Route>
                        <Route path='/contact' exact>
                            <ContactPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
