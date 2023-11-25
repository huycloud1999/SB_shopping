import detailLogin from '@/store/reducers/auth/sign-in/withGoogle/index'
import modalReducer from './shoppingCart';
const rootReducer = {
detailLogin,
modal: modalReducer,
};
export default rootReducer;