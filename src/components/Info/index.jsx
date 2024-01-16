import { useState } from "react"; 
import { Button } from "../ButtonElements";
import backgroundImg from '../../images/InfoSection.png';
import { 
  HeroContainer,
  HeroContent,
  HeroH1,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  Image,
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
                <HeroH1>What&apos;s the Play Podcast</HeroH1>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover}>
                        Episodes{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;