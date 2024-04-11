import DateTimePicker from '@react-native-community/datetimepicker';
import { useGlobalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

import SearchScreen from '@/components/SearchGameComponent';
import { FormatDate, FormatTime } from '@/utils/FormattedDate';

// interface Schedule {
//   users: string[];
//   creatorUserId: string;
//   date: string;
//   duration: string;
//   gameId: string;
// }

export default function CreateScheduleScreen(): React.ReactNode {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<string>('');
  const [show, setShow] = useState(false);
  const [primaryDate, setPrimaryDate] = useState('');
  const [primaryTime, setprimaryTime] = useState('');
  // const [scheduleData, setScheduleData] = useState<Schedule>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { id } = useGlobalSearchParams();
  const onChange = (event, selectedDate): void => {
    const currentDate: Date = selectedDate;
    setShow(false);
    setDate(currentDate);
    const formattedDate: string = FormatDate(date);
    setPrimaryDate(formattedDate);
    const formattedTime: string = FormatTime(date);
    setprimaryTime(formattedTime);
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SearchScreen />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          mode={mode}
          onChange={onChange}
        />
      )}
      <Text>{primaryDate}</Text>
      <Text>{primaryTime}</Text>
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
