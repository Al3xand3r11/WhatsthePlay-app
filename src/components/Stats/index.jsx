import { 
    Image,
    StatsContainer,
    StatsContent,
    StatsH1,
} from "./StatsStyled";
import ApiBackground from '../../images/ApiBackground.png'
import YoutubeClip from "../YouTubeVids/YoutubeVid";
import { Stack } from "@mui/system";
import YoutubeBball from "../YouTubeVids/YoutubeVidBball";
import YoutubeSpotlight from "../YouTubeVids/YoutubeVidSpot";

const Stats = () => {
    return (
        <StatsContainer id="Stats">
            <Image src={ApiBackground}/>
            <StatsContent>
                <Stack direction="row" spacing={75} paddingBottom={10}>
                    <StatsH1>Basketball</StatsH1>
                    <StatsH1>Football</StatsH1>
                    <StatsH1>Spotlight</StatsH1>
                </Stack>
                <Stack direction="row" spacing={10}>
                <YoutubeBball/>
                <YoutubeClip/>
                <YoutubeSpotlight/>
                </Stack>
            </StatsContent>
        </StatsContainer>
    );
};

export default Stats;