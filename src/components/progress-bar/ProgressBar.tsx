import { Container, Progress } from "./ProgressBar.styles";
import { Range } from "../../utilityTypes";

interface Props {
    progress: Range<0, 101>
}

// TODO: how should look progress if 0%
export const ProgressBar = ({ progress }: Props) => {
    return (
      <Container>
        <Progress $progress={progress} data-testid="progress-bar">
            {progress}%
        </Progress>
      </Container>
    );
};
