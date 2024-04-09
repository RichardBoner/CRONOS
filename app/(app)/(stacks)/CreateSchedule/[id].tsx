import DateTimePicker from '@react-native-community/datetimepicker';
import { useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

export default function CreateScheduleScreen(): React.ReactNode {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<string>('');
  const [show, setShow] = useState(false);
  const [primaryDate, setPrimaryDate] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = useGlobalSearchParams();
  const onChange = (event, selectedDate): void => {
    const currentDate: Date = selectedDate;
    setShow(false);
    setDate(currentDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate: string = `${year}-${month}-${day}`;
    setPrimaryDate(formattedDate);
    console.log(primaryDate);
    console.log(currentDate);
  };

  const showMode = (currentMode): void => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = (): void => {
    showMode('date');
  };

  const showTimepicker = (): void => {
    showMode('time');
  };
  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          mode={mode}
          onChange={onChange}
        />
      )}
      <Text>{date}</Text>
      <Text>{id}</Text>
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <Text>Select Time</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={showTimepicker}>
        <Text>Select Time</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
