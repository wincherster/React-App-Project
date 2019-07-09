import { createStore } from 'redux';

// 1.新建store 
// 通过reducer处理函数建立，并根据老的state 和 action 生成新的状态
function counter( state = 0, action ) {
  switch( action.type ) {
    case '加机关枪':
      return state + 1
    case '减机关枪':
      return stete - 1
    default:
     return 10
  }
}

const store = createStore( counter );
const init = store.getState();
console.log(init, 'state')

// 增加监听事件处理函数
function listener() {
  const current = store.getState();
  console.log(`现在的机关枪${current}把`)
}

// 事件订阅
store.subscribe(listener);

// 派发事件 传递 action
store.dispatch( { type: '加机关枪' });
console.log(store.getState());