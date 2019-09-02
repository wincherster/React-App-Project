import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGOUT ="LOGOUT";

// 20190902 
const USER_DATA = 'USER_DATA'

// 20190902 初始化数据
const initState = {
  isAuth: false, 
  user: '李云龙',
  age: 20
}

// reducer
export function auth( state = initState, action){
  console.log(state, action)
  switch (action.type){
    case LOGIN:
      return { ...state, isAuth: true }
    case LOGOUT: 
      return { ...state, isAuth: false }
    case USER_DATA:
      // return { ...state, ...action.payload}
      return { ...state, user: action.payload.user, age: action.payload.age}
    default:
      return state
  }
}
// 20190902 
export function getUserData() {
  // dispatch 用来通知数据修改
  return dispatch => {
    axios.get('/data')
      .then( res => {
        if(res.status === 200){
          dispatch(userData(res.data));
        }
      })
  }
}
export function userData(data) {
  return { type: USER_DATA, payload: data }
}



// action creator
export function login() {
  return { type: LOGIN }
}
export function logout() {
  return { type: LOGOUT }
}