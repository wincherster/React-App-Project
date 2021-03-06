// 声明类型常量
const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

// 创建reducer
export function counter( state = 10, action ) {
  console.log( state , 'state')
  switch( action.type ) {
    case ADD_GUN:
      return state + 1
    case REMOVE_GUN:
      return state - 1
    default:
     return state
  }
}

// action creator 创建action
export function addGun(){
  return { type: ADD_GUN }
}
export function removeGun(){
  return { type: REMOVE_GUN }
}
// 使用异步的方式 创建action
export function addGunAsync(){
  // 可返回 执行函数
  return dispatch => {
    setTimeout (()=>{
      dispatch( addGun() )
    }, 2000)
  }
}
