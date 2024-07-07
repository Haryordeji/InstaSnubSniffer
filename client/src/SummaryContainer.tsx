// src/SummaryContainer.tsx
import React from 'react';
import styled from 'styled-components';

const SummaryWrapper = styled.div`
  background-color: #e7f3ff;
  border-left: 4px solid #1877f2;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  color: #1877f2;
  margin: 0;
`;

const CountHighlight = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #1877f2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

interface SummaryContainerProps {
  count: number;
}

const SummaryContainer: React.FC<SummaryContainerProps> = ({ count }) => {
  return (
    <SummaryWrapper>
      <SummaryText>You follow</SummaryText>
      <CountHighlight>{count}</CountHighlight>
      <SummaryText>
        account{count !== 1 ? 's' : ''} that {count !== 1 ? 'do' : 'does'} not follow you back.
      </SummaryText>
    </SummaryWrapper>
  );
};

export default SummaryContainer;