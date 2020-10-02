import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(219, 219, 219);
  border-radius: 10%;

  height: 140px;
  width: 120px;

  /* Font family */

  padding: 1.2em;
  
`

const Image = styled.img`
  height: 0;
  width: 100%;
  flex-grow: 1;
  object-fit: scale-down;

  /*height: 55px;
  width: 55px;
  flex-grow: 0;*/
  margin-bottom: auto;
`

const Name = styled.span`
  font-size: 1em;
  text-align: center;
  /*margin-top: 1.5em;*/
  line-height: 1em;
  /*height: 1em;*/
  
`

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 2em;
  overflow: visible;
  margin-top: 1em;
`

const Description = styled.span`
  font-size: 0.8em;
  margin-top: 0.2em;
  text-align: center;
`

interface Props {
  image?: string;
  name: string;
  desc?: string;
  className?: string;
}

export default function (props: Props) {
  return (
    <Container className={`skill-item container ${props.className}`}>
      <Image className='image' src={props.image} alt={`${props.name} image.`} />
      <NameWrapper className='name-wrapper'>
        <Name className='name'>{props.name}</Name>
      </NameWrapper>
      {props.desc && <Description className='description'>{props.desc}</Description>}
    </Container>
  );
}