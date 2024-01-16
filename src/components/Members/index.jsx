import React from "react";
import icon1 from '../../images/profilepic.png';
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
            <MembersIcon src={icon1} />
            <MembersH2>Jalen</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={icon1} />
            <MembersH2>Demarco</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={icon1} />
            <MembersH2>Christian</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={icon1} />
            <MembersH2>Nate</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={icon1} />
            <MembersH2>Caleb</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
          <MembersCard>
            <MembersIcon src={icon1} />
            <MembersH2>Brian</MembersH2>
            <MembersP>
            Lorem ipsum dolor sit amet
            </MembersP>
          </MembersCard>
      </MembersWrapper>
      </MembersContent>
    </MembersContainer>
    )
}

export default Members;