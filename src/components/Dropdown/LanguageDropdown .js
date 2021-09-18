import React from 'react';
import {LanguageImage , Wrapper, Languages,LanguageElement } from './DropdownElements';
import globe from '../../images/globe.svg';
import OutsideClickHandler from 'react-outside-click-handler';
import i18n from 'i18next';


const SUPPORTED_LANGUAGES = ['en', 'es', 'ru', 'zh-CN', 'zh-TW'];

const codeToLang = code => {
	switch (code) {
		case 'en':
			return 'English';
		case 'es':
			return 'Spanish';
		case 'ru':
			return 'Russian';
		case 'zh-CN':
			return 'Chinese (Simplified)';
		case 'zh-TW':
			return 'Chinese (Traditional)';
        default :
            return 'English';
	}
};

const LanguageDropdown  = ({ setIsVisible, isVisible, position }) => {
	if (!isVisible) return null;
	return (
		<OutsideClickHandler onOutsideClick={() => setIsVisible(false)}>
                          
			<Wrapper style={{ ...position }}>
				<Languages>
					{SUPPORTED_LANGUAGES.map(language => {
						return (
							<LanguageElement key={language} onClick={() => i18n.changeLanguage(language)}>
								<LanguageImage  src={`/image/languages/${language}.svg`}></LanguageImage>
								<h4 m={0}>{codeToLang(language)}</h4>
							</LanguageElement>
						);
					})}
				</Languages>
			</Wrapper>
		</OutsideClickHandler>
	)
}


export default LanguageDropdown ;
