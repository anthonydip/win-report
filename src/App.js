import React, { useRef } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/bg.jpg';
import logo from './assets/logo-white.png';

const BgContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: 100% 100%;  
  height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`

const Heading = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #65656e;
  font-weight: 300;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`

const Numbered = styled.span`
  color: #0088cc;
  font-weight: 600;
`;

const App = () => {
  const introRef = useRef();
  const goalRef = useRef();
  const jobRef = useRef();
  const conRef = useRef();
  const ackRef = useRef();

  return (
    <div>
      <BgContainer>
        <Header introRef={introRef} goalRef={goalRef} jobRef={jobRef} conRef={conRef} ackRef={ackRef} />

        <TitleContainer>
          <img style={{ marginLeft: '130px' }} alt="Logo" src={logo} width={500}/>
          <p style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}>Weather INnovations Consulting LP</p>
          <span style={{ color: 'white', fontSize: '2rem' }}>Web Developer Intern</span>
        </TitleContainer>
      </BgContainer>
      

      <Heading ref={introRef}>Introduction</Heading>
      <Text>
        Starting at the University of Guelph in 2000 as the Ontario Weather Network, the company was quickly renamed to Weather
        INnovations (WIN) as it turned into a global company and moved to Chatham, Ontario. Operating weather and environmental sensory equipment
        in locations throughout Canada, the U.S. and Europe, the company specializes in data driven decision agriculture, providing
        valuable weather-based monitoring and modeling solutions for agricultural businesses, goverment agencies and researchers. Using modern full-stack
        web development technologies, WIN presents clients with turnkey models and data through easy to use and interactive web applications.
      </Text>

      <Heading ref={goalRef}>Goals</Heading>
      <Text>
        Heading into this position with the development team at Weather INnovations for a four-month work term, I had a few goals in mind to work towards:
      </Text>

      <Text><Numbered>1.</Numbered> Improve on my creativity and creative thinking</Text>
      <Text><Numbered>2.</Numbered> Improve on my personal organization and time management skills working hybrid</Text>
      <Text><Numbered>3.</Numbered> Improve my technological literacy, learning to efficiently program in a new language</Text>

      <Text>
        Throughout the twelve weeks working with the developers at Weather INnovations, I was able to successfully complete all of my goals I have set
        for myself at the start of the work term. The most important goal to me during my experience at WIN was number three: to improve my
        technological literacy by learning how to efficiently program in a new language, TypeScript. Web development has been a big focus for my
        personal projects, and the opportunity to learn a new web development framework in a real-world environment was very valuable and eye-opening.
        I am always eager to learn new technologies, and I was able to pick up Angular and TypeScript fairly quick, allowing me to apply my new knowledge
        into client web applications.
      </Text>

      <Heading ref={jobRef}>Job Description</Heading>
      <Text>
        Working at Weather INnovations in Chatham, I was a part of the development team as a web developer intern. The main focus of my work and tasks was
        to work with the backend team to design, recommend and implement improvements to new and existing features for existing web interfaces, customizing
        them to specific client needs. Although my job title was a web developer intern, I had the opportunity to work full-stack, assisting in analying various
        problems regarding both frontend and backend services, and implemented solutions using Angular and NodeJS. I was also given the task to develop the
        WINtranet, a full-stack, mobile-friendly internal web application for the company using React, NodeJS and a MSSQL database. I was able to set-up the
        framework and backbone for the frontend and backend, allowing for easy implementations of future modules and changes to the application.
      </Text>

      <Heading ref={conRef}>Conclusion</Heading>
      <Text>
        Overall, I had an outstanding experience with the development team and colleagues at Weather INnovations during my four-months with them!
        The opportunity to apply what I have learned on my own time through personal web development projects into real-world applications that are
        used by companies was a very rewarding feeling. I was able to successfully learn and improve a lot of my technical and personal skills from
        my team, along with gaining valuable knowledge on the web development process for a business. My communication skills definitely improved as well,
        as working hybrid required a lot of back-and-forth messages, meetings and emails in order to stay on top of tasks at home. I will never forget the
        relationships and moments I was able to build and experience with the team at Weather INnovations!
      </Text>

      <Heading ref={ackRef}>Acknowledgements</Heading>
      <Text>
        First, I want to show my greatest appreciation to my supervisor, Manish Patel, for giving me the opportunity to join the development team at WIN.
        He always showed a lot of care towards my learning process at Weather INnovations, offering me a vast amount of opportunities to learn and work with
        new technologies I was interested in. I also want to express my gratitude to Kory Vink, the developer who provided the main source of guidance
        throughout my work term. He taught me a lot about web development, and provided aid whenever I needed during my learning process! I am very grateful
        to the warm smiles and open arms that Weather INnovations provided me during my time with them!
      </Text>

      <Footer />
    </div>
  );
}

export default App;
