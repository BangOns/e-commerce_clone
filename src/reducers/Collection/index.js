export const GET = "GET";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const EDITITEM = "EDITITEM";
export const PLUS = "PLUS";

let InitialState = {
  getCollection: false,
  loadingCollection: false,
  rejectedCollection: false,

  addCollection: false,

  plusCollection: false,

  removeCollection: false,

  editCollection: false,
};

const CollectionReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getCollection: action.payload.data,
        loadingCollection: action.payload.laoding,
        rejectedCollection: action.payload.reject,
      };
    case ADD:
      return {
        ...state,
        addCollection: action.payload.data,
        loadingCollection: action.payload.loading,
        rejectedCollection: action.payload.reject,
      };
    case PLUS:
      return {
        ...state,
        plusCollection: action.payload.data,
        loadingCollection: action.payload.loading,
        rejectedCollection: action.payload.reject,
      };
    case REMOVE:
      return {
        ...state,
        removeCollection: action.payload.data,
        loadingCollection: action.payload.loading,
        rejectedCollection: action.payload.reject,
      };
    default:
      return state;
  }
};
export default CollectionReducer;
