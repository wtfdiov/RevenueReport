import {DateDisplayed, Picker} from '../ReportScreen.styles';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

export interface iosDateButtonProps {
  label?: string;
  handleDateSelected: (event: DateTimePickerEvent, newValue: Date | undefined) => void;
  value: Date | undefined;
  onPress: () => void;
  isShowing?: boolean;
}

export default function DateButton({
  value,
  handleDateSelected,
}: iosDateButtonProps) {
  const today = new Date();
  return (
    <Picker>
      <DateDisplayed>
        <DateTimePicker
          testID="dateTimePicker"
          value={value || today}
          onChange={handleDateSelected}
          maximumDate={today}
        />
      </DateDisplayed>
    </Picker>
  );
}
