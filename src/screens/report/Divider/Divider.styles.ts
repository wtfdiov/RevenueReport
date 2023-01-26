import styled from "styled-components/native";
import { DividerProps } from "./Divider";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ color }: DividerProps) => color};
  height: 1px;
  margin-top: 6px;
  margin-bottom: 6px;
`;
