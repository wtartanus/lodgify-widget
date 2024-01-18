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
});
