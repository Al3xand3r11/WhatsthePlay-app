import { useState } from "react"; 
import { Button } from "../ButtonElements";
import { 
    HeroContainer,
  HeroContent,
  HeroH1,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from './InfoStyled';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
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