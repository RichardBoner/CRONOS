import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { TouchableWithoutFeedback, View, Text, TextInput, TouchableHighlight } from 'react-native';

import SearchScreen from '@/components/SearchGameComponent';
import UserSearchScreen from '@/components/SearchUsers';
// import { useGameIdStore } from '@/hooks/ZustandStore';

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
  const [Duration, setDuration] = useState('');
  // const [scheduleData, setScheduleData] = useState<Schedule>();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const gameId = useGameIdStore((state) => state.selectedGameId);
  const onChange = (event, selectedDate): void => {
    const currentDate: Date = selectedDate;
    setShow(false);
    setDate(currentDate);
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#ffe',
          backgroundColor: '#222',
          borderRadius: 10,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#9ff', marginVertical: 10 }}>{String(date)}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableWithoutFeedback onPress={showDatepicker}>
              <Text
                style={{
                  color: '#ff0',
                  borderWidth: 2,
                  borderColor: '#ffa',
                  paddingHorizontal: 5,
                  textAlign: 'center',
                  marginRight: 5,
                  borderRadius: 5,
                }}>
                Select date
              </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={showTimepicker}>
              <Text
                style={{
                  color: '#ff0',
                  borderWidth: 2,
                  borderColor: '#ffa',
                  paddingHorizontal: 5,
                  textAlign: 'center',
                  marginLeft: 5,
                  borderRadius: 5,
                }}>
                Select Time
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Text
          style={{
            color: '#9ff',
            textAlign: 'center',
            marginVertical: 10,
            width: 355,
          }}>
          How Long Will You Play for?
        </Text>
        <TextInput
          onChangeText={setDuration}
          value={Duration}
          placeholder="Tags..."
          style={{
            height: 40,
            width: 365,
            borderWidth: 1,
            borderColor: '#ffa',
            borderRadius: 5,
            padding: 8,
            color: '#fff',
            marginBottom: 10,
          }}
        />
        <UserSearchScreen />
        <SearchScreen />
      </View>
      <TouchableHighlight>
        <Text>Create Schedule?</Text>
      </TouchableHighlight>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour
          mode={mode}
          onChange={onChange}
        />
      )}
    </View>
  );
}
