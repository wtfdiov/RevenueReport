import styled from 'styled-components/native';
import { SelectProps } from './Select';

export const Container = styled.View`
  border: 1px solid #707b87;
  background-color: ${({disabled}: SelectProps) => disabled ? '#c5c9c8' : 'white'};
  padding: 12px;
  position: relative;
  border-radius: 6px;
  height: 64px;
  box-sizing: border-box;
  min-width: 80px;
  justify-content: center;
`;

export const Dropdown = styled.View`
  height: 62px;
  width: 24px;
  background-color: #c5c9c8;
  position: absolute;
  right: 0;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Highlight = styled.Text`
font-weight: 700;
font-size: 14px;
color: #404a59;
`;

export const Label = styled.Text`
font-size: 14px;
color: #7e848b;
`;
