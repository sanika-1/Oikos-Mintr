import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import Slider from './components/Slider';
import Wallet from './components/Wallet';
import MobileTablet from './components/MobileTablet';
import {BrowserView,MobileView, isMobile,isBrowser} from 'react-device-detect';
import { LanguageDropdown } from './components/Dropdown';

import i18next from 'i18next';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <>
     <div className="main">
     <BrowserView>
        <Router>
          <Text />
          <div className="box">
                <Navbar /> 
                <LanguageDropdown />
                <div className="box2">
                    <Slider />
                </div>
                        
            </div> 
        <div className="box3">
             <Wallet />      
        
        </div>       
               
        </Router>
        </BrowserView>
                
    </div>
    <>
    <MobileView>
            <MobileTablet />
        </MobileView>
        </>
        </>
    );
}

export default App;