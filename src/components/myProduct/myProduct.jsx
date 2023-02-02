import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_ITEM,
  GET_ITEM,
  PLUS_ITEM,
  REMOVE_ITEM,
} from "../../action/CollectionAction";
import { userLogout } from "../../action/LoginAction";
import { DisplayProduct, hapus } from "../../action/ProductAction";
import Item from "../item/Item";
import "./myProduct.css";
function MyProduct() {
  const [item, setItem] = useState(false);
  const [Name, setName] = useState("");
  const [ID, setID] = useState([]);
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilter] = useState([]);
  const { isSuccess } = useSelector((state) => state.LoginReducer);
  const { getProduct, addProduct } = useSelector(
    (state) => state.ProductReducer
  );
  const { getCollection } = useSelector((state) => state.CollectionReducer);
  const dispatch = useDispatch();
  const nameStorage = localStorage.getItem("user");
  function handleitems() {
    setItem(!item);
  }
  function handleLogout() {
    dispatch(userLogout());
    localStorage.removeItem("user");
  }
  async function getUser(user) {
    return user && (await setName(JSON.parse(user).name));
  }

  async function HapusProduct(id) {
    let resUserID = ID.find((state) => state[Name])[Name];
    let resUserIDName = ID.find((state) => state[Name]).id;
    let oneUser;
    let removeUpdate = [];
    let checkID = resUserID.some((state) => {
      return state.id === id.id;
    });
    for (var keys in resUserID) {
      if (resUserID[keys].id === id.id) {
        oneUser = resUserID[keys];
      }
    }
    for (var newKey of resUserID) {
      removeUpdate.push(newKey);
    }

    try {
      oneUser = await removeUpdate.filter((state) => state.id !== oneUser.id);

      if (checkID) {
        await dispatch(hapus(id));
        await dispatch(
          REMOVE_ITEM({
            id: resUserIDName,
            [Name]: [...oneUser],
          })
        );
      } else {
        await dispatch(hapus(id));
      }

      await dispatch(DisplayProduct());
      await dispatch(GET_ITEM());
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleClick(product) {
    let countItem = 0;
    if (isSuccess) {
      let checkUser = ID.some((state) => state[Name]);
      if (checkUser) {
        let resIDUser = ID.find((state) => state[Name]).id;
        let resUser = ID.find((state) => state[Name])[Name];
        let checkBarang = resUser.some((state) => {
          return state.id === product.id;
        });
        if (!checkBarang) {
          let newBarang = {
            id: product.id,
            barang: product.barang,
            price: product.harga,
            harga: product.harga,
            item: (countItem += 1),
            user: product.user,
            takebarang: Name,
            img: product.img,
          };
          await dispatch(
            PLUS_ITEM({
              id: resIDUser,
              [Name]: [...resUser, newBarang],
            })
          );
        } else {
          let thisUser = [];
          let findUpdateUser;
          for (var key of resUser) {
            thisUser.push(key);
          }
          findUpdateUser = thisUser.find((value) => value.id === product.id);
          let updateData = {
            id: findUpdateUser.id,
            barang: product.barang,
            price: product.harga,
            harga: (findUpdateUser.harga += product.harga),
            item: (findUpdateUser.item += 1),
            user: product.user,
            takebarang: Name,
            img: product.img,
          };

          for (var keys in resUser) {
            if (resUser[keys].id === updateData.id) {
              resUser[keys] = updateData;
            }
          }

          await dispatch(
            PLUS_ITEM({
              id: resIDUser,
              [Name]: [...resUser],
            })
          );
        }
      } else {
        await dispatch(
          ADD_ITEM({
            [Name]: [
              {
                id: product.id,
                barang: product.barang,
                price: product.harga,
                harga: product.harga,
                item: (countItem += 1),
                user: product.user,
                takebarang: Name,
                img: product.img,
              },
            ],
          })
        );
      }
      countItem = 0;
      dispatch(GET_ITEM());
    } else {
      alert("anda Harus Login");
    }
  }
  async function getMyProduct() {
    let resUserTampil = await product.filter((state) => state.user === Name);
    if (resUserTampil !== undefined) {
      setFilter(resUserTampil);
    }
  }
  useEffect(() => {
    getUser(nameStorage);
  }, [nameStorage]);
  useEffect(() => {
    if (getProduct) {
      setProduct(getProduct);
      getMyProduct();
    } else {
      dispatch(DisplayProduct());
    }
  }, [dispatch, getProduct, addProduct, product]);
  useEffect(() => {
    if (!getCollection) {
      dispatch(GET_ITEM());
    } else {
      setID(getCollection);
    }
  }, [dispatch, getCollection]);
  return (
    <div className="containerProduct">
      <div
        className="judulWebsite"
        style={{ textAlign: "center", margin: "0px" }}
      >
        <h1>TodoList</h1>
      </div>
      <div className="loginProduct">
        {isSuccess ? (
          <div className="logoutProduct" onClick={handleLogout}>
            <p>Logout</p>
            <p>Hello {Name} !!</p>
          </div>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}
      </div>
      <div className="itemProduct" onClick={handleitems}>
        <h4>My Item : {filterProduct.length > 0 ? filterProduct.length : 0}</h4>
      </div>
      {isSuccess && (
        <>
          <div className="tambahMyProduct">
            <Link to={"/tambahProduct"}>
              <p>Tambah Product</p>{" "}
            </Link>
          </div>
          <div className="BackProduct">
            <Link to={"/"}>
              <p>Kembali</p>{" "}
            </Link>
          </div>
        </>
      )}
      <div className="kotakCartProduct">
        {/*  */}
        {getProduct ? (
          filterProduct.map((product) => {
            return (
              <div className="cart" key={product.id}>
                {filterProduct.length !== 0 ? (
                  <>
                    <div className="tools">
                      <Link to={`/editProduct/${product.id}`}>
                        <div className="edit">
                          <p>Edit</p>
                        </div>
                      </Link>
                      <div
                        className="remove"
                        onClick={HapusProduct.bind(this, product)}
                      >
                        <p>remove</p>
                      </div>
                    </div>
                    <div className="image">
                      <img src={product.img} alt="" />
                    </div>
                    <div className="nameAndPrice">
                      <div className="name">
                        <h3>{product.barang}</h3>
                      </div>
                      <div className="price">${product.harga}</div>
                    </div>
                    <div className="addToCart">
                      <button onClick={handleClick.bind(this, product)}>
                        ADD TO CART
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h1>Anda Tidak Memiliki Product</h1>
                  </>
                )}
              </div>
            );
          })
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
        {}
      </div>
      {isSuccess && item === true && <Item />}
    </div>
  );
}

export default MyProduct;
