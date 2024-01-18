import { Container, Progress } from "./ProgressBar.styles";

// TODO: should be possible to enter only numbers between 0 & 100
interface Props {
    progress: number;
}

// TODO: how should look progress if 0%
export const ProgressBar = ({ progress }: Props) => {
    return (
      <Container>
        <Progress $progress={progress}>{progress}%</Progress>
      </Container>
    );
};
