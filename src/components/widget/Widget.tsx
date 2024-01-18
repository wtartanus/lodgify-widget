import { ProgressBar } from '../progress-bar/ProgressBar';
import { Container, Header } from './Widget.styles';

export function Widget() {
  return (
    <Container>
        <Header>
            <h3>Lodgify Grouped Tasks</h3>
            <ProgressBar progress={75} />
        </Header>
    </Container>
  );
}
