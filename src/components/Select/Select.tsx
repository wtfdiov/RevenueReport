import {Text} from 'react-native';
import {Container, Dropdown, Highlight, Label} from './Select.styles';

interface Option {
  label: string;
  value: any;
}

export interface SelectProps {
  highlightedLabel?: string;
  label?: string;
  selected?: Option;
  options?: Option[];
  disabled: boolean;
}

export default function Select({
  label = '',
  highlightedLabel = '',
  options,
  selected,
  disabled
}: SelectProps) {
  return (
    <Container disabled={disabled}>
      <Highlight>{highlightedLabel}</Highlight>
      {label && <Label>{label}</Label>}
      <Dropdown>
        <Text>▼</Text>
      </Dropdown>
    </Container>
  );
}
