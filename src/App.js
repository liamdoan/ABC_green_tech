
import './App.css';
import { Switch, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GlobalStyle from './GlobalStyle'
import { useEffect, useState, useLayoutEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import InfrastructurePage from './pages/InfrastructurePage';
import VehiclesPage from './pages/VehiclesPage';
import PlanningPage from './pages/PlanningPage';
import EnergyPage from './pages/EnergyPage';
import SocialHumanPage from './pages/SocialHumanPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import DevelopingPages from './pages/DevelopingPages';


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  };


  // force to scroll to top
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])


  // Animation 
  useEffect(() => {
    Aos.init({})
  }, [])

  return ( 
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen}/>
      <Switch>
        <Route path="/developing" exact component={DevelopingPages} />
        <Route path="/ABC_green_tech" exact component={HomePage} />
        <Route path="/services" exact component={ServicesPage} />
        <Route path="/infrastructure_development" exact component={InfrastructurePage} />
        <Route path="/vehicles" exact component={VehiclesPage} />
        <Route path="/urban_planning" exact component={PlanningPage} />
        <Route path="/environment_energy" exact component={EnergyPage} />
        <Route path="/social_human" exact component={SocialHumanPage} />
        <Route path="/clients" exact component={ClientsPage} />
        <Route path="/contact" exact component={ContactPage} />      
      </Switch>
      <Footer/>
      </>
  );
}

export default App;
