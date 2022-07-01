import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there... <br />
          I'm Prem Kumar 
        </SectionTitle>
        <SectionText>
        Front-End Developer with ability to work hard, Learn and Adapt to new Technologies. With a Passion of 
        Web Development. I'm Ready to contribute my work for reputable organization.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;