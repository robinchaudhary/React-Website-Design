import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMedia,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
} from './footerElements';
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/'>How it works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Term of Services</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Submit Videos</FooterLink>
              <FooterLink to='/'>Ambassdors</FooterLink>
              <FooterLink to='/'>Agency</FooterLink>
              <FooterLink to='/'>Influencers</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>Destination</FooterLink>
              <FooterLink to='/'>Sposorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Youtube</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
              <FooterLink to='/'>Github</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Robeens
            </SocialLogo>
            <WebsiteRights>
              Robeens &copy; {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//https://www.facebook.com/rob.eens.7'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//www.instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//www.twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
