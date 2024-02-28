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
                <a href="https://www.instagram.com/whatstheplayproductions/" target="_blank">
                    <SideImage src={instagram}/>
                </a>
                <a href="https://www.tiktok.com/@whatstheplayproductions" target="_blank">
                    <SideImage src={tiktok}/>
                </a>
                <a href="https://twitter.com/WTPlayPodcast" target="_blank">
                    <SideImage src={twitter}/>
                </a>
                <a href="https://www.youtube.com/@whatstheplayproductions" target="_blank">
                    <SideImage src={youtube}/>
                </a>
            </SideWrapper>
            <HeroMain>
                <HeroH1>What&apos;s The</HeroH1>
                <HeroH1><HeroColor>Play</HeroColor> Podcast</HeroH1>
                <HeroBtnWrapper>
                    <a 
                        href={"https://www.youtube.com/@whatstheplayproductions/videos"}
                        target="blank"
                    >
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                        Episodes{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    </a>
                </HeroBtnWrapper>
            </HeroMain>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;