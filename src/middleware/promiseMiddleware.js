import axios from 'axios';

// 보면 처음에 login을 Dispatch할 때 LOGIN_REQUEST Action가 실행됩니다.
// 그 후, 전송에 성공하면 LOGIN_SUCCESS, 실패하면 LOGIN_FAILURE Action이 추가적으로 실행됩니다.
// store에서 제공하는 dispatch 메소드로 Action을 Store로 넘깁니다.
// Store에서 View로는 props를 통해 데이터가 넘어갑니다.
// 아까 connect 함수로 연결한 것이 state를 자동으로 props로 바꿔줍니다.

// // 1단계
// container/Login.jsx(View)에서 id와 password 전송
//   -> action/user.js(Action)을 바탕으로
//   -> Store에서 promiseMiddleware로 ajax 전송
//   -> LOGIN_REQUEST가 Dispatch됨
//   -> Reducer에서 state의 fetchingUpdate가 true로 변경
//   -> container/Login.jsx(View)에서 state 변경에 따른 점 처리
// // 2단계
//   -> promiseMiddleware로 보낸 ajax 결과 도착
//   -> ajax 결과에 따라 LOGIN_SUCCESS 또는 LOGIN_FAIL Action이 추가적으로 Dispatch
//   -> Reducer에서 Action에 따라 state가 변화
//   -> state의 변화가 container/Login.jsx(View)에 반영

export default () => {
  return next => action => {
    const { promise, type, ...rest } = action;
    next({ ...rest, type: `${type}_REQUEST` });
    return axios({
      method: promise.method,
      url: promise.url,
      data: promise.data
    })
      .then(result => {
        next({ ...rest, result, type: `${type}_SUCCESS` });
      })
      .catch(error => {
        next({ ...rest, error, type: `${type}_FAILURE` });
      });
  };
};