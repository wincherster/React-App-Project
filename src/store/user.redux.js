import axios from 'axios';
// 定义常量
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const initState = {
  isAuth: "",
  msg: "",
  user: "",
  pwd: "",
  type: ""
}

export function user(state=initState, action) {
  switch(action.type){
    case REGISTER_SUCCESS:
      return {...state, msg:"", isAuth: true, ...action.payload}
      break;
    case ERROR_MSG:
      return {...state, isAuth: false, msg: action.msg}
      break;
    default:
      return state;
  }
}

function registerSuccess(data){
  return {type: REGISTER_SUCCESS, payload: data}
}

function errorMsg(msg) {
  return { msg, type: ERROR_MSG }
}

export function register({user, pwd, repeatpwd, type}) {
  // 判断用户名，密码，用户类型
  if(!user || !pwd || !type){
    return errorMsg("用户名密码不能为空")
  }
  // 密码 和 重复密码是否一致
  if(pwd !== repeatpwd) {
    return errorMsg("两次密码输入不一致")
  }
  // 异步 dispatch 处理
  return dispatch => {
    axios.post('/user/register', {})
      .then( res => {
        if(res.status === 200 && res.data.code === 0){
          dispatch(REGISTER_SUCCESS({user, pwd, type}))
        }else {
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
  

}