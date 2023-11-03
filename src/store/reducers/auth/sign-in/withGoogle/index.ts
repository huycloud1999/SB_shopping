import { GET_TOKEN_LOGIN } from './../../../action';
import { createRequest, createSliceReducer } from "@/utils/reduxToolkit";
import { METHOD } from "@/global/enum";

export const getTokenLogin: any = createRequest(GET_TOKEN_LOGIN, '/api/v1/auth/google', METHOD.GET);
const detailLogin = createSliceReducer('loginWithGoogle', getTokenLogin);
export default detailLogin.reducer;