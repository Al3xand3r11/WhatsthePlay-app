import { useState } from "react"; 
import InfoSection from '../../images/InfoSection.webp';
import { 
    HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from './InfoStyled';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={InfoSection}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>What`&apos`s the Play Podcast</HeroH1>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;