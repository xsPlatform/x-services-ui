/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { Container, ItemFooter, MobileFooter } from './styles';

const FooterComponent = () => (
  <>
    <Container>
      <ItemFooter>
        <h3>CUSTOMER</h3>
        <a href="/">My tickets</a>
        <a href="/">Events</a>
        <a href="/">FAQ</a>
      </ItemFooter>
      <ItemFooter>
        <h3>ORGANIZER</h3>
        <a href="/">How it works?</a>
        <a href="/">Create your event</a>
        <a href="/">Organiser App</a>
        <a href="/">FAQ</a>
      </ItemFooter>
      <ItemFooter>
        <h3>INFLUENCER</h3>
        <a href="/">How it works?</a>
        <a href="/">Organiser App</a>
        <a href="/">FAQ</a>
      </ItemFooter>
      <ItemFooter>
        <h3>COMPANY</h3>
        <a href="/">About us</a>
        <a onClick={() => {}}>Privacy & Terms</a>
        <a href="/">Contact us</a>
        <div className="social">
          <img
            src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/facebook.svg"
            alt="facebook"
          />
          <img
            src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/instagram.svg"
            alt="instagran"
          />
          <img
            src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/twitter.svg"
            alt="twitter"
          />
        </div>
      </ItemFooter>
    </Container>
    <MobileFooter>
      <h3>COMPANY</h3>
      <a href="/">About us</a>
      <a onClick={() => {}}>Privacy & Terms</a>
      <a href="/">Contact us</a>
      <div className="social">
        <img
          src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/facebook.svg"
          alt="facebook"
        />
        <img
          src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/instagram.svg"
          alt="instagran"
        />
        <img
          src="https://frontend-xservices-assets.s3-us-west-2.amazonaws.com/img/twitter.svg"
          alt="twitter"
        />
      </div>
    </MobileFooter>
  </>
);

const Footer = FooterComponent;

export { Footer };
