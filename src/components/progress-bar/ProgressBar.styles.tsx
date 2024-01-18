import styled from 'styled-components';

const BORDER_RADIUS = '15px';

export const Container = styled.div`
  width: 100%;
  background-color: aliceblue;
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
`;

export const Progress = styled.div<{
    $progress: number;
  }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${ props => props.$progress === 0 ? 'transparent' : 'cadetblue'};
  border-radius: ${BORDER_RADIUS};
  transition: width 0.3s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${ props => props.$progress === 0 ? 'gray' : 'white'};
  padding: .2rem 2rem;
`;
