import { OPEN_MODAL,CLOSE_MODAL } from "../action";
import { openModal,closeModal } from "@/global/interface";
interface ModalState {
    isModalOpen: boolean;
  }
  
  const initialState: ModalState = {
    isModalOpen: false,
  };
  
  type ModalAction = ReturnType<typeof openModal | typeof closeModal>;
  
  const modalReducer = (state = initialState, action: ModalAction): ModalState => {
    switch (action.type) {
      case OPEN_MODAL:
        return {
          ...state,
          isModalOpen: true,
        };
      case CLOSE_MODAL:
        return {
          ...state,
          isModalOpen: false,
        };
      default:
        return state;
    }
  };
  
  export default modalReducer;