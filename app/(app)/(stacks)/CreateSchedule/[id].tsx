import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

// import { ScheduleType } from '@/types/SchemaTypes';
// import { presentDate } from '@/utils/FormattedDate';

export default function CreateScheduleScreen(): React.ReactNode {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState();
  const [show, setShow] = useState(false);
  // const [schedule, setSchedule] = useState<ScheduleType>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [primaryDate, setPrimaryDate] = useState<any>(presentDate());

  const onChange = (event, selectedDate): void => {
    const currentDate: Date = selectedDate;
    setShow(false);
    setDate(currentDate);
    // setPrimaryDate(currentDate);
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
      <TouchableWithoutFeedback onPress={showDatepicker}>
        <Text>Select Time</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={showTimepicker}>
        <Text>Select Time</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={showTimepicker}>
        <Text>Select Time</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}
