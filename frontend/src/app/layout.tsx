import React from 'react';
import Script from 'next/script';

import type { Metadata } from 'next';

import './layout.css';
import Recoil from '../states/recoil';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

declare global {
  interface Window {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    Kakao: any;
  }
}

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Recoil>
          {children}
          <div id='modal' />
        </Recoil>
        <Script
          src='https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js'
          integrity={`${process.env.NEXT_PUBLIC_KAKAO_INTEGRITY_KEY}`}
          crossOrigin='anonymous'
        />
      </body>
    </html>
  );
};

export default RootLayout;
