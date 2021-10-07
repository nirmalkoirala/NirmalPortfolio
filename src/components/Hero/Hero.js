import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      Nirmal Koirala's Portfolio
    </SectionTitle>
    <SectionText>
    Today’s web page developer landscape is full of innovative projects and intelligent people. Together, these factors push the industry forward at amazing speeds, while also making it more difficult for individual web developers to be outstanding.
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com' }>Learn More</Button>
  </LeftSection>
</section>
);

export default Hero;