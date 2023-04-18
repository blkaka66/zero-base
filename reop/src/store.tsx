import { createStore } from 'redux';
import rootReducer from './rootReducer'; // rootReducer 임포트

// rootReducer를 사용하여 Redux store 생성
const store = createStore(rootReducer);

export default store;