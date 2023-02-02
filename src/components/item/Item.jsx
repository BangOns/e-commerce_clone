import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_ITEM,
  MINUS_ITEM,
  PLUS_ITEM,
  REMOVE_ITEM,
} from "../../action/CollectionAction";
import { DisplayProduct } from "../../action/ProductAction";
import "./Item.css";
function Item() {
  const [Name, setName] = useState("");
  const [ID, setID] = useState([]);
  const [product, setProduct] = useState([]);
  let [thisUser, setThisUser] = useState([]);

  const { getProduct, addProduct } = useSelector(
    (state) => state.ProductReducer
  );
  const { getCollection } = useSelector((state) => state.CollectionReducer);
  const dispatch = useDispatch();
  const nameStorage = localStorage.getItem("user");

  async function getTampil() {
    let resUserTampil = ID.find((state) => state[Name]);
    if (resUserTampil !== undefined) {
      setThisUser(resUserTampil[Name]);
    }
  }
  async function getUser(user) {
    return user && (await setName(JSON.parse(user).name));
  }

  async function handleMinus(prd) {
    let userThis = [];
    let resIDUser = ID.find((state) => state[Name]).id;
    let resUser = ID.find((state) => state[Name])[Name];
    let checkBarang = resUser.some((state) => {
      return state.id === prd.id;
    });
    let findProductUser = product.find((state) => state.id === prd.id);
    if (checkBarang) {
      let findUpdateUser;
      for (var key of resUser) {
        userThis.push(key);
      }
      findUpdateUser = userThis.find((value) => value.id === prd.id);
      if (findUpdateUser.item > 1) {
        let updateData = {
          id: findUpdateUser.id,
          barang: prd.barang,
          price: findProductUser.harga,
          harga: (findUpdateUser.harga -= findProductUser.harga),
          item: (findUpdateUser.item -= 1),
          user: prd.user,
          takebarang: Name,
          img: prd.img,
        };

        for (var keys in resUser) {
          if (resUser[keys].id === updateData.id) {
            resUser[keys] = updateData;
          }
        }

        await dispatch(
          MINUS_ITEM({
            id: resIDUser,
            [Name]: [...resUser],
          })
        );
      } else {
        let removeList = userThis.filter((state) => state.id !== prd.id);
        await dispatch(
          REMOVE_ITEM({
            id: resIDUser,
            [Name]: [...removeList],
          })
        );
      }
    }
    dispatch(GET_ITEM());
  }

  async function handlePlus(prd) {
    let userThis = [];
    let resIDUser = ID.find((state) => state[Name]).id;
    let resUser = ID.find((state) => state[Name])[Name];
    let checkBarang = resUser.some((state) => {
      return state.id === prd.id;
    });
    let findProductUser = product.find((state) => state.id === prd.id);
    if (checkBarang) {
      let findUpdateUser;
      for (var key of resUser) {
        userThis.push(key);
      }
      findUpdateUser = userThis.find((value) => value.id === prd.id);
      let updateData = {
        id: findUpdateUser.id,
        barang: prd.barang,
        price: findProductUser.harga,
        harga: (findUpdateUser.harga += findProductUser.harga),
        item: (findUpdateUser.item += 1),
        user: prd.user,
        takebarang: Name,
        img: prd.img,
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
    dispatch(GET_ITEM());
  }

  useEffect(() => {
    getUser(nameStorage);
  }, [nameStorage]);
  useEffect(() => {
    if (getProduct) {
      setProduct(getProduct);
    } else {
      dispatch(DisplayProduct());
    }
  }, [dispatch, getProduct, addProduct]);
  useEffect(() => {
    if (!getCollection) {
      dispatch(GET_ITEM());
    } else {
      setID(getCollection);
      getTampil();
    }
  }, [dispatch, getCollection, ID]);
  return (
    <>
      <div className="containerItem">
        {getCollection ? (
          thisUser.map((product) => {
            return (
              <div className="kotakItem" key={product.id}>
                <div className="namaProduk">
                  <p>{product.barang}</p>
                </div>
                <div className="hargaProduk">
                  <p>${product.price}</p>
                </div>
                <div className="hargaProduk">
                  <p>${product.harga}</p>
                </div>
                <div className="jumlahProduk">{product.item}</div>
                <div className="plus" onClick={handlePlus.bind(this, product)}>
                  +
                </div>
                <div
                  className="minus"
                  onClick={handleMinus.bind(this, product)}
                >
                  -
                </div>
              </div>
            );
          })
        ) : (
          <>
            <h1>Loading</h1>
          </>
        )}
      </div>
    </>
  );
}

export default Item;
