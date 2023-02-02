export const TAMBAH = "TAMBAH";
export const HAPUS = "HAPUS";
export const EDIT = "EDIT";
export const GETPRODUCT = "GETPRODUCT";

const initialState = {
  getProduct: false,
  loadingProduct: false,
  rejectedProduct: false,
  addProduct: false,
  editProduct: false,
};
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCT:
      return {
        ...state,
        getProduct: action.payload.data,
        loadingProduct: action.payload.loading,
        rejectedProduct: action.payload.reject,
      };
    case TAMBAH:
      return {
        ...state,
        addProduct: action.payload.data,
        loadingProduct: action.payload.loading,
        rejectedProduct: action.payload.reject,
      };
    case HAPUS:
      return {
        ...state,
        getProduct: action.payload.data,
        loadingProduct: action.payload.loading,
        rejectedProduct: action.payload.reject,
      };
    case EDIT:
      return {
        ...state,
        editProduct: action.payload.data,
        loadingProduct: action.payload.loading,
        rejectedProduct: action.payload.reject,
      };
    default:
      return state;
  }
};
export default ProductReducer;
