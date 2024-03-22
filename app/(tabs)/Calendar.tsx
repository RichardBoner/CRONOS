import { Link } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen(): React.ReactNode {
  const [selected, setSelected] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          height: 370,
          width: 350,
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true },
        }}
      />
      <Link href="/(stacks)/CreateSchedule/[id]">CreateSchedule?</Link>
    </View>
  );
}
