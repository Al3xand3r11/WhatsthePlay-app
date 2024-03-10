import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
} from "./FooterStyled";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                This website is brought to you by What&apos;s The Play Productions
              </FooterLinkTitle>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;