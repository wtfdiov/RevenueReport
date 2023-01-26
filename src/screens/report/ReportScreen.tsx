import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import {Container, EmptyMessage} from './ReportScreen.styles';
import {getReport} from '../../services/report';

import Header from './Header/Header';
import ReportDisplay from './ReportDisplay/ReportDisplay';

export default function ReportScreen() {
  const [revenue, setRevenue] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const selectedDay = 23;
      const selectedMonth = 1;
      const selectedYear = 2023;
      try {
        setLoading(true);
        const response = await getReport(
          selectedDay,
          selectedMonth,
          selectedYear
        );
        setRevenue(response.data.revenue);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);



  const renderReport = () => {
    if (isLoading) {
      return <EmptyMessage>Loading...</EmptyMessage>;
    }
    if (revenue) {
      return <ReportDisplay revenue={revenue} />;
    }
    return (
      <EmptyMessage>
        Select a date on the field above to see revenue report.
      </EmptyMessage>
    );
  };

  return (
    <>
      <StatusBar />
      <Header value={1000} />
      <Container>
        {renderReport()}
      </Container>
    </>
  );
}
