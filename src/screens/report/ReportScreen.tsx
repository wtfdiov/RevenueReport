import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import {getReport} from '../../services/report';

import {
  Container,
  DateConfigRow,
  EmptyMessage,
  GroupSpacing,
} from './ReportScreen.styles';
import Header from './Header/Header';
import ReportDisplay from './ReportDisplay/ReportDisplay';
import {Revenue} from '../../../types/Revenue';
import {Field} from './Info/Info.styles';
import DateButton from './DateButton/DateButton';

export default function ReportScreen() {
  const [revenue, setRevenue] = useState<Revenue | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDatePickerOpen, setDatePickerOpen] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const date = getDateValue();
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;
      const selectedYear = date.getFullYear();
      try {
        setLoading(true);
        const response = await getReport(
          selectedDay,
          selectedMonth,
          selectedYear,
        );
        setRevenue(response.data.revenue);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    if (selectedDate) {
      fetchData();
    }
  }, [selectedDate]);

  const openPicker = () => {
    handleDatePickerDisplay(true);
  };

  function dismissPicker() {
    handleDatePickerDisplay(false);
  }

  function getDateString() {
    if (!selectedDate) {
      return 'Select date';
    }
    var options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date(selectedDate);
    return date.toLocaleDateString('en-US', options);
  }

  function getDateValue() {
    if (!selectedDate) {
      return new Date();
    }
    return new Date(selectedDate);
  }

  const handleDateSelected = (
    event: DateTimePickerEvent,
    newValue: Date | undefined = undefined,
  ) => {
    if (newValue && newValue !== selectedDate) {
      setSelectedDate(newValue);
    }
    handleDatePickerDisplay(false);
  };

  const handleDatePickerDisplay = (value: boolean) => {
    setDatePickerOpen(value);
  };

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
      <Header value={revenue?.net || 0} />
      <Container>
        <GroupSpacing>
          <Field>SELECT OFFER AND TIME</Field>
          <DateConfigRow>
            <DateButton
              label={getDateString()}
              isShowing={isDatePickerOpen}
              value={selectedDate}
              handleDateSelected={handleDateSelected}
              onPress={openPicker}
            />
          </DateConfigRow>
        </GroupSpacing>
        {renderReport()}
      </Container>
    </>
  );
}
