import { Container } from './Divider.styles';

export interface DividerProps {
  color?: string;
}
export default function Divider({ color = '#b2bdc7' }: DividerProps) {
    return <Container color={color} />
}
