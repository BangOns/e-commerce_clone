import axios from "axios";
import { TAMBAH, HAPUS, EDIT, GETPRODUCT } from "../reducers/Product";

export const DisplayProduct = () => {
  return (dispatch) => {
    dispatch({
      type: GETPRODUCT,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .get(`http://localhost:3004/cart`)
      .then((response) => {
        console.log("Product is done get biasa");
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: response.data,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const DisplayProductOld = () => {
  return (dispatch) => {
    dispatch({
      type: GETPRODUCT,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .get(`http://localhost:3004/cart`)
      .then((response) => {
        console.log("Product is done get biasa");
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: response.data,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const DisplayProductUpdate = () => {
  return (dispatch) => {
    dispatch({
      type: GETPRODUCT,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .get(`http://localhost:3004/cart`)
      .then((response) => {
        console.log("Product is done");
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: response.data,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GETPRODUCT,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const TambahProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: TAMBAH,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .post(`http://localhost:3004/cart`, product)
      .then((response) => {
        console.log("Product is Publish");
        dispatch({
          type: TAMBAH,
          payload: {
            data: response.data,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: TAMBAH,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const hapus = (productID) => {
  return (dispatch) => {
    dispatch({
      type: HAPUS,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .delete(`http://localhost:3004/cart/${productID.id}`)
      .then((response) => {
        console.log("Product is Publish");
        dispatch({
          type: HAPUS,
          payload: {
            data: false,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: HAPUS,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};

export const editPrd = (product) => {
  return (dispatch) => {
    dispatch({
      type: EDIT,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .put(
        `http://localhost:3004/cart/${product.id}`,
        product
        // {
        //   barang: product.barang,
        //   harga: product.harga,
        // }
      )
      .then((response) => {
        console.log("Product is Edit");
        dispatch({
          type: EDIT,
          payload: {
            data: response.data,
            loading: false,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: EDIT,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
