import React from "react";
import Brian from '../../images/Brian.png';
import Caleb from '../../images/Caleb.jpg';
import CT from '../../images/CT.jpg';
import Nate from '../../images/Nate.jpg'
import JB from '../../images/JB.png';
import JG from '../../images/JG.jpeg';
import MemberBackground from '../../images/MembersBackground.png';
import {
    Image,
    MembersContainer,
    MembersContent,
    MembersH1,
    MembersH2,
    MembersWrapper,
    MembersCard,
    MembersIcon,
    MembersP,
  } from "./MembersStyled";

const Members = () => {
    return (
        <MembersContainer id="Members">
          <Image src={MemberBackground}/>
        <MembersContent>
        <MembersH1>Members</MembersH1>
        <MembersWrapper>
          <MembersCard>
            <MembersIcon src={JG} />
            <MembersH2>Jalen</MembersH2>
            <MembersP>
            Football, Baseball, Basketball
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={JB} />
            <MembersH2>Demarco</MembersH2>
            <MembersP>
            Basketball
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={CT} />
            <MembersH2>Christian</MembersH2>
            <MembersP>
            Football, Basketball, WWE
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={Nate} />
            <MembersH2>Nate</MembersH2>
            <MembersP>
            Basketball, Soccer, WWE
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={Caleb} />
            <MembersH2>Caleb</MembersH2>
            <MembersP>
            Videographer, Football, Basketball
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={Brian} />
            <MembersH2>Brian</MembersH2>
            <MembersP>
            Football, Baseball, Basketball, WWE
            </MembersP>
          </MembersCard>
      </MembersWrapper>
      </MembersContent>
    </MembersContainer>
    )
}

export default Members;