const initialState = {
  visibility: "#000",
};

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case 'dark':
      return {
        ...state,
        visibility: "#000",
      };

    case 'light':
      return {
        ...state,
        visibility: "#fff",
      };

    default:
      return state;
  }
};

const rootReducer = visibility;

export default rootReducer;
