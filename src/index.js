import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import './App/App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

render(
  // provider : react-redux 라이브러이에 내장된 리액트 애플리케이션에
  // 손쉽게 스토어를 연동할 수 있도록 도와주는 컴포넌트
  // 컴포넌트를 불러오고 연동할 프로젝트의 최상위 컴포넌트를 감싸, provider 컴포넌트의 props로 store를 넣어준다.
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);