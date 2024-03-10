import { 
    Image,
    StatsContainer,
    StatsContent,
    StatsH1,
    StatsWrapper,
} from "./StatsStyled";
import ApiBackground from '../../images/ApiBackground.png'
import YoutubeClip from "../YouTubeVids/YoutubeVid";
import YoutubeBball from "../YouTubeVids/YoutubeVidBball";
import YoutubeSpotlight from "../YouTubeVids/YoutubeVidSpot";
import { Stack } from "@mui/system";
import { useBreakpointMatch } from "../../utils/hooks/useBreakpointMatch";

const Stats = () => {
    const isCompact = useBreakpointMatch('md');
    return (
        <StatsContainer id="Stats">
            <Image src={ApiBackground}/>
            <StatsContent>
                <StatsWrapper>
                <Stack direction={isCompact ? 'column' : 'row'} >
                    <Stack alignItems='center' >
                    <StatsH1>Basketball</StatsH1>
                    <YoutubeBball/>
                    </Stack>
                    <Stack alignItems='center'>
                    <StatsH1>Football</StatsH1>
                    <YoutubeClip/>
                    </Stack>
                    <Stack  alignItems='center'>
                    <StatsH1>Spotlight</StatsH1>
                    <YoutubeSpotlight/>
                    </Stack>
                </Stack>
                </StatsWrapper>
            </StatsContent>
        </StatsContainer>
    );
};

export default Stats;