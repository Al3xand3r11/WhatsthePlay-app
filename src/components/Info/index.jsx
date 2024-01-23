import { useState } from "react"; 
import { Button } from "../ButtonElements";
import backgroundImg from '../../images/InfoSection.png';
import instagram from '../../images/icons/instagram.png';
import tiktok from '../../images/icons/tiktok.png';
import twitter from '../../images/icons/twitter.png';
import youtube from '../../images/icons/youtube.png';
import { 
  HeroContainer,
  HeroContent,
  HeroH1,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  Image,
  SideWrapper,
  SideImage,
  HeroMain,
  HeroColor,
} from './InfoStyled';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <Image src={backgroundImg}/>
            <HeroContent>
            <SideWrapper>
                <SideImage src={instagram}/>
                <SideImage src={tiktok}/>
                <SideImage src={twitter}/>
                <SideImage src={youtube}/>
            </SideWrapper>
            <HeroMain>
                <HeroH1>What&apos;s The</HeroH1>
                <HeroH1><HeroColor>Play</HeroColor> Podcast</HeroH1>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                        Episodes{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroMain>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;