import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
    test('renders ProgressBar with 50% progress', () => {
        render(<ProgressBar progress={50} />);
        const progressBar = screen.getByTestId('progress-bar');
  
        expect(progressBar).toHaveStyle('width: 50%');
    });
  
    test('renders ProgressBar with 0% progress', () => {
        render(<ProgressBar progress={0} />);
        const progressBar = screen.getByTestId('progress-bar');
  
        expect(progressBar).toHaveStyle('width: 0%');
    });
  
    test('renders ProgressBar with 100% progress', () => {
        render(<ProgressBar progress={100} />);
        const progressBar = screen.getByTestId('progress-bar');
  
        expect(progressBar).toHaveStyle('width: 100%');
    });

    test('ProgressBar with 0% is rendered transparent', () => {
        render(<ProgressBar progress={0} />);
        const progressBar = screen.getByTestId('progress-bar');
    
        expect(progressBar).toHaveStyle('backgroundColor: transparent');
    });

    test('ProgressBar with % above 0 is rendered cadetblue', () => {
        render(<ProgressBar progress={10} />);
        const progressBar = screen.getByTestId('progress-bar');
    
        expect(progressBar).toHaveStyle('backgroundColor: cadetblue');
    });
});
