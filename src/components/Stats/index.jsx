import { 
    Image,
    StatsContainer,
    StatsContent,
} from "./StatsStyled";
import ApiBackground from '../../images/ApiBackground.png';

const Stats = () => {
    return (
        <StatsContainer id="Stats">
            <Image src={ApiBackground}/>
            <StatsContent>
            </StatsContent>
        </StatsContainer>
    );
};

export default Stats;