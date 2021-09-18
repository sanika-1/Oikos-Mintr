import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { NavbarContainer, NavLogo,LanguageButtonWrapper,RoundButton,Icon,Filler} from './navbarElements'
import logo from '../../images/oikos-logo.png';
import globe from '../../images/globe.svg';
import { LanguageDropdown } from '../Dropdown';

const Navbar = () => {
    const [flagDropdownIsVisible, setFlagVisibility] = useState(false);
    return (
        <>
                <NavbarContainer>
                    <NavLogo to='/'>
                         <img src={logo} alt='logo' width='150' height='30' />
                    </NavLogo>
                    
                    <LanguageButtonWrapper>
                  
                    <RoundButton onClick={() => setFlagVisibility(true)}>
                            <img src={globe} alt='' />
                    </RoundButton>
                   
                     <LanguageDropdown
                        isVisible={flagDropdownIsVisible}
                        setIsVisible={setFlagVisibility}
                        position={{ right: 0 }}
                        />
                    </LanguageButtonWrapper>
                   
                    
                    </NavbarContainer>

        </>
    )
}

export default withTranslation() (Navbar);
