// src/App.tsx
import React, { useState } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins';
import SummaryContainer from './SummaryContainer';

interface ResultItem {
  username: string;
  profileUrl: string;
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
    color: #1c1e21;
    margin: 0;
    padding: 0;
  }
`;

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1877f2;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const FileInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #166fe5;
  }
`;

const ResultsContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ResultsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResultItemStyle = styled.li`
  margin-bottom: 0.5rem;
`;

const ProfileLink = styled.a`
  color: #1877f2;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #166fe5;
    text-decoration: underline;
  }
`;

function App() {
  const [followers, setFollowers] = useState<File | null>(null);
  const [following, setFollowing] = useState<File | null>(null);
  const [result, setResult] = useState<ResultItem[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!followers || !following) return;

    const formData = new FormData();
    formData.append('followers', followers);
    formData.append('following', following);

    try {
      const response = await axios.post('http://localhost:3001/api/compare', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title>InstaSnubSniffer</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="followers">Followers file:</Label>
            <FileInput
              type="file"
              id="followers"
              onChange={(e) => setFollowers(e.target.files?.[0] || null)}
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="following">Following file:</Label>
            <FileInput
              type="file"
              id="following"
              onChange={(e) => setFollowing(e.target.files?.[0] || null)}
            />
          </InputGroup>
          <SubmitButton type="submit">Compare</SubmitButton>
        </Form>
        {result.length > 0 && (
          <ResultsContainer>
            <SummaryContainer count={result.length} />
            <h2>Users you follow who don't follow you back:</h2>
            <ResultsList>
              {result.map((item) => (
                <ResultItemStyle key={item.username}>
                  <ProfileLink href={item.profileUrl} target="_blank" rel="noopener noreferrer">
                    {item.username}
                  </ProfileLink>
                </ResultItemStyle>
              ))}
            </ResultsList>
          </ResultsContainer>
        )}
      </AppContainer>
    </>
  );
}

export default App;