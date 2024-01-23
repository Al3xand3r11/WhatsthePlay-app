import { 
    Image,
    StatsContainer,
    StatsContent,
} from "./StatsStyled";
import ApiBackground from '../../images/ApiBackground.png'
import YoutubeClip from "../YoutubeVid";

const Stats = () => {
    return (
        <StatsContainer id="Stats">
            <Image src={ApiBackground}/>
            <StatsContent>
                <YoutubeClip/>
            </StatsContent>
        </StatsContainer>
    );
};

export default Stats;