import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

// 스토어 생성
export const store = createStore(
    rootReducer, // 우리가 만든 리듀서를 파라미터로 넣어 스토어를 생성한다.
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

/* 리덕스에서 가장 핵심적인 인스턴스로 이 안에 현재 상태가 내장되어 있고,
    상태를 업데이트할 때마다 구독 중인 함수들을 호출합니다.
 */