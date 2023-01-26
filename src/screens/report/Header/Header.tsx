import { Container, Value } from "./Header.styles";

interface HeaderProps {
  value: number;
}

export default function Header({ value }: HeaderProps) {
    return <Container>{value > 0 && <Value>{value}</Value>}</Container>
}
