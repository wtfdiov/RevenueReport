import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import {Container} from './ReportScreen.styles';
import {getReport} from '../../services/report';

import Header from './Header/Header';

export default function ReportScreen() {
  useEffect(() => {
    async function getData() {
      const response = await getReport(22, 1, 2023);
      console.log(response);
    }
    getData();
  }, []);

  return (
    <>
      <StatusBar />
      <Header value={1000} />
      <Container></Container>
    </>
  );
}
