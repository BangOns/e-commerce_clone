import axios from "axios";
import { ADD, EDITITEM, GET, PLUS, REMOVE } from "../reducers/Collection";

export const GET_ITEM = () => {
  return (dispatch) => {
    dispatch({
      type: GET,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .get("http://localhost:3004/keranjang")
      .then((response) => {
        dispatch({
          type: GET,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};

export const ADD_ITEM = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .post("http://localhost:3004/keranjang", product)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: ADD,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);

        dispatch({
          type: ADD,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};

export const PLUS_ITEM = (product) => {
  return (dispatch) => {
    dispatch({
      type: PLUS,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .put(`http://localhost:3004/keranjang/${product.id}`, product)
      .then((response) => {
        dispatch({
          type: PLUS,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: PLUS,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const MINUS_ITEM = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .put(`http://localhost:3004/keranjang/${product.id}`, product)
      .then((response) => {
        dispatch({
          type: REMOVE,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: REMOVE,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
export const REMOVE_ITEM = (productID) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .put(`http://localhost:3004/keranjang/${productID.id}`, productID)
      .then((response) => {
        dispatch({
          type: REMOVE,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: REMOVE,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};

export const EDIT_ITEM = (product) => {
  return (dispatch) => {
    dispatch({
      type: EDITITEM,
      payload: {
        data: false,
        loading: true,
        reject: false,
      },
    });
    axios
      .put(`http://localhost:3004/keranjang/${product.id}`, product)
      .then((response) => {
        dispatch({
          type: EDITITEM,
          payload: {
            data: response.data,
            loading: true,
            reject: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: EDITITEM,
          payload: {
            data: false,
            loading: false,
            reject: error.message,
          },
        });
      });
  };
};
