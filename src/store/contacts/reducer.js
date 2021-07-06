import { SET_CONTACTS, SET_CONTACTS_LOADING, SET_UPDATE_CONTACTS } from './types';

const initialState = {
  isLoading: true,
  data: [],
  updateData: { openModal: false, contact: {} },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS: {
      return { ...state, data: action.payload };
    }
    case SET_CONTACTS_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case SET_UPDATE_CONTACTS: {
      return { ...state, updateData: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
