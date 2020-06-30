import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () =>
  <CloseIconWrapper area-hidden="true">
    <path d="M31.9264 28.8736L19.0528 16L31.9264 3.12639L28.8736 0.0735931L16 12.9472L3.12641 0.0735931L0.0736084 3.12639L12.9472 16L0.0736084 28.8736L3.12641 31.9264L16 19.0528L28.8736 31.9264L31.9264 28.8736Z" fill="black"/>
  </CloseIconWrapper>

