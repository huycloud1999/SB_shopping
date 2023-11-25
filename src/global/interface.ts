import { CLOSE_MODAL,OPEN_MODAL } from "@/store/reducers/action";
export const openModal = () => {
    return {
      type: OPEN_MODAL,
    } as const;
  };
  
  export const closeModal = () => {
    return {
      type: CLOSE_MODAL,
    } as const;
  };
export interface Action {
    isLoading?: boolean;
        componentId?: string;
    payload?: {
        success?: string;
        failed?: string;
        query?: Query
    },
    response?: Record<string, unknown> | null;
    success?: boolean;
}
export interface State {
    state: Action
}
export interface Obj {
    [k: string]: {} | undefined | any;
}
export interface Query {
    body?: Obj;
    query?: {
        [k: string]: {} | undefined | any;
        fields?: Array<string>;
    };
    params?: Array<string>;
}