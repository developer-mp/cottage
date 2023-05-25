import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterStyles } from "./footerStyles";

const Footer = () => {
  return (
    <FooterStyles.Container>
      <FooterStyles.Top>
        <FooterStyles.About>
          CottageRental offers a wide variety of cottages and vacation
          properties across Alberta. We provide high service and and activities
          for every season for affordable price. Call us now to get expert
          advice and a quote from our specialists.
        </FooterStyles.About>
        <FooterStyles.Links>
          <FooterStyles.LinksHeader>Rentals</FooterStyles.LinksHeader>
          <FooterStyles.LinksList>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Home</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Properties</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Site Map</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Contact Us</a>
            </FooterStyles.LinksItem>
          </FooterStyles.LinksList>
        </FooterStyles.Links>
        <FooterStyles.Links>
          <FooterStyles.LinksHeader>Links</FooterStyles.LinksHeader>
          <FooterStyles.LinksList>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">FAQ</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Support</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Private Policy</a>
            </FooterStyles.LinksItem>
            <FooterStyles.LinksItem>
              <a href="https://www.google.com/">Terms &amp; Conditions</a>
            </FooterStyles.LinksItem>
          </FooterStyles.LinksList>
        </FooterStyles.Links>
        <FooterStyles.LinksCallCenter>
          <FooterStyles.LinksCall>
            <FooterStyles.LinksHeader>Call Now</FooterStyles.LinksHeader>
            <FooterStyles.LinksCallWrapper>
              <FooterStyles.LinksCallIcon>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </FooterStyles.LinksCallIcon>
              <FooterStyles.LinksPhoneNumber>
                +800-555-55-55
              </FooterStyles.LinksPhoneNumber>
            </FooterStyles.LinksCallWrapper>
          </FooterStyles.LinksCall>
        </FooterStyles.LinksCallCenter>
      </FooterStyles.Top>
      <FooterStyles.Bottom>
        <FooterStyles.SocialMedia>
          <FooterStyles.SocialMediaHeader>
            FOLLOW US ON SOCIAL MEDIA
          </FooterStyles.SocialMediaHeader>
          <FooterStyles.SocialMediaLinks>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </FooterStyles.SocialMediaLinks>
        </FooterStyles.SocialMedia>
        <FooterStyles.Copyright>
          Copyright &copy; {new Date().getFullYear()} CottageRental. All rights
          reserved.
        </FooterStyles.Copyright>
      </FooterStyles.Bottom>
    </FooterStyles.Container>
  );
};

export default Footer;
