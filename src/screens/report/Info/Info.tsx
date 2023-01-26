import {Container, Field, Value} from './Info.styles';

interface InfoProps {
  title: string;
  value: string;
}

export default function Info({title, value}: InfoProps) {
  return (
    <Container>
      <Field>{title}</Field>
      <Value>{value}</Value>
    </Container>
  );
}
