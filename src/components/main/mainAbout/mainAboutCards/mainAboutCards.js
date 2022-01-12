import React, {memo} from "react";

import dot from '../../../../images/svg/dotIcon.svg';
import learning from '../../../../images/svg/learning.png';
import reading from '../../../../images/svg/reading.png';
import watching from '../../../../images/svg/watching.png';
import sport from '../../../../images/svg/sport2.png';

import instagram from '../../../../images/svg/instagram.png';
import telegram from '../../../../images/svg/telegram.png';
import vk from '../../../../images/svg/vk.png';
import youtube from '../../../../images/svg/youtube.png';

import PrimalryCard from "./PrimalryCard";
import MainEducationCard from "./MainEducationCard";
import MainDoingCard from "./MainDoingCard";
import MainSocialsCard from "./MainSocialsCard";

import './mainAboutCards.scss';

const MainAboutCards = () => {
    return (
        <div className="main-about-cards">
            <PrimalryCard 
                dot={dot}
                title={'Personal'} 
                firstInfo={'Age: 20 years old'} 
                secondInfo={'Located in: Russia'} 
                thirdInfo={'Total quantity of learning programming: more than 2 years'} 
                fourthInfo={'Total quantity of learning Front-end: more than 1 year'}
            />
            <MainEducationCard
                dot={dot}
                title={'Education'} 
                firstInfo={'University: Voronezh State University'} 
                secondInfo={'Faculty: Fundamental IT and technologies'}
                thirdInfo={'Current course: third'} 
                firstLang={"Russian"}
                secondLang={"English"}
            />
            <MainDoingCard
                firstPic={learning}
                firstText={"Learning"}
                secondPic={reading}
                secondText={"Reading"}
                thirdPic={watching}
                thirdText={"Series"}
                fourthPic={sport}
                fourthText="Sports"
            />
            <MainSocialsCard
                firstPic={instagram}
                firstLink={"https://www.instagram.com/nikita.nwb/"}
                firstText={"Instagram"}
                secondPic={telegram}
                secondLink={"https://t-do.ru/@NikitaNWB"}
                secondText={"Telegram"}
                thirdPic={vk}
                thirdLink={"https://vk.com/id142686682"}
                thirdText={"VK"}
                fourthPic={youtube}
                fourthLink={"https://www.youtube.com/channel/UC9ocBXKY3JriLT939bWjaQQ"}
                fourthText={"YouTube"}
            />
        </div>
    )
}
export default memo(MainAboutCards);