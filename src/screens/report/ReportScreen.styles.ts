import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #344559;
  padding: 0 24px;
  margin-top: 72px;
`;
export const Picker = styled.Pressable`
  background-color: white;
  border: 1px solid #707b87;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;

export const DateDisplayed = styled.Text`
  color: #4c515f;
`;

export const GroupSpacing = styled.View`
  margin: 12px 0;
`;

export const RevenueValue = styled.Text`
  font-size: 36px;
  color: white;
`;

export const DateConfigRow = styled.View`
  margin-top: 12px;
`;

export const EmptyMessage = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;
