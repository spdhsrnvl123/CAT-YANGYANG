import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from "recoil"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
      <RecoilRoot>
            <App />
      </RecoilRoot>
);
