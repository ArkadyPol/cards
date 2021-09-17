import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../../features/auth/auth-reducer';
import testReducer from '../../features/test/test-reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store