import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
// 초기 상태를 정의
const initialState = user ? { loggedIn: true, user } : {};

// 리듀서 : 액션의 type에 따라 변화를 일으키는 함수
/*
 리듀서 함수를 정의한다.
 리듀서는 state와 action을 파라미터로 받는다.
 state가 undefined일 때(store가 생성될 때) state 기본 값을 initialState로 사용한다.
 action.type에 따라 다른 작업을 하고, 새 상태를 만들어 반환한다.
 이때 주의할 점은 state를 직접 수정하면 안되고,
 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어 반환해야 한다.
 */
export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        // loggedIn: true,
        ...state,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}

