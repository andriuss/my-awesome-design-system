import React from 'react';
import styled from 'styled-components';
import {useSpring, animated, config} from 'react-spring';
import {typeScale} from '../utils';
import {Illustrations, CloseIcon} from '../assets';
import {PrimaryButton} from '.';

const ModalWrapper = styled.div`
  width: 800px;
  heigh: 500px;
  padding: 32px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3}
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  padding: 0;
`


export const SignUpModal = ({showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0)' : 'translateY(-200%)',
    config: config.stiff,
  })

  return (
    <animated.div style={animation}>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for account" aria-hidden="true"
        />
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to get access!</SignUpText>
        <PrimaryButton>Sign up!</PrimaryButton>
        <CloseModalButton aria-label="Close Modal">
          <CloseIcon />
        </CloseModalButton>
      </ModalWrapper>
    </animated.div>
  )
}
