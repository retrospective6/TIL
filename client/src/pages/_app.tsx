import React from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';

export default function TILApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
`;
