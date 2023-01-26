import {DateDisplayed, Picker} from '../ReportScreen.styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { iosDateButtonProps } from './DateButton';

export default function DateButton({
  label,
  value,
  handleDateSelected,
  isShowing,
  onPress,
}: iosDateButtonProps) {
  const today = new Date();
  return (
    <Picker>
      <DateDisplayed onPress={onPress}>
        {label}
      </DateDisplayed>
      {isShowing && <DateTimePicker
          testID="dateTimePicker"
          value={value || today}
          onChange={handleDateSelected}
          maximumDate={today}
        />}
    </Picker>
  );
}
