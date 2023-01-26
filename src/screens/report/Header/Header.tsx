import { Container, Value } from "./Header.styles";
import currencyFormat from '../../../utils/currencyFormat';

interface HeaderProps {
  value: number;
}

export default function Header({ value }: HeaderProps) {
    return <Container>{value > 0 && <Value>{currencyFormat(value)}</Value>}</Container>
}
