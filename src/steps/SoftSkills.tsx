import React, { useState, useContext } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import VSensor from 'react-visibility-sensor';

import Language from '../contexts/language';
import SoftSkill from '../components/SoftSkill';
import Text from '../components/Text';

import empathyImg from '../assets/soft/empathy.svg';
import determinationImg from '../assets/soft/determination.svg';
import honestyImg from '../assets/soft/honesty.svg';
import teamworkImg from '../assets/soft/teamwork.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  @media (min-width: 730px) {
    /*padding-top: 7rem;*/
    padding-bottom: 7rem;
  }
`

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 2rem;

  @media (min-width: 600px) {
    font-size: 2.2em;
  }
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 730px) {
    flex-flow: row wrap;
    max-width: 800px;
  }
`

interface AnimatedProps {
  animated?: boolean;
  // Added at 'attrs' props
  animationPreset?: FlattenSimpleInterpolation
}

export default function () {
  const s = useContext(Language);
  
  return (
    <Container>
      <Title>{s.soft.title}</Title>
        <SkillsContainer>
          <SoftSkill image={determinationImg} {...s.soft.items.determination}></SoftSkill>
          <SoftSkill right image={honestyImg} {...s.soft.items.honesty}></SoftSkill>
          <SoftSkill image={teamworkImg} {...s.soft.items.teamwork}></SoftSkill>
          <SoftSkill right image={empathyImg} {...s.soft.items.empathy}></SoftSkill>
        </SkillsContainer>
    </Container>
  );
}