import {createStore} from 'redux';
import {useProductReducer} from '../utils/reducers';

const store = createStore(useProductReducer);
export default store;
