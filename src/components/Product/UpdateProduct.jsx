import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EDIT_ITEM, GET_ITEM } from "../../action/CollectionAction";
import { DisplayProductUpdate, editPrd } from "../../action/ProductAction";
import "./updateProduct.css";
function EditProducts() {
  const [brg, setBrg] = useState("");
  const [harga, setHarga] = useState("");
  const [ID, setID] = useState("");
  const [user, setUser] = useState("");
  const [item, setItem] = useState([]);
  const [Name, setName] = useState("");
  const dispatch = useDispatch();
  const { editProduct } = useSelector((state) => state.ProductReducer);
  const { getCollection } = useSelector((state) => state.CollectionReducer);
  const navigate = useNavigate();
  const params = useParams();
  const nameStorage = localStorage.getItem("user");
  async function getUser(user) {
    return user && (await setName(JSON.parse(user).name));
  }
  async function HandleSubmitProduct(e) {
    const checkID = item.some((state) => state[Name]);
    const prdID = item.find((state) => state[Name]).id;
    const prdName = item.find((state) => state[Name])[Name];
    const prd = [];
    for (var key of prdName) {
      prd.push(key);
    }
    let prdUpdate = prd.find((state) => state.id === parseInt(params.id));

    let updateData = {
      id: prdUpdate.id,
      barang: brg,
      price: parseInt(harga),
      harga: prdUpdate.harga,
      item: prdUpdate.item,
      user: prdUpdate.user,
      takebarang: Name,
      img: prdUpdate.img,
    };
    for (var keys in prdName) {
      if (prdName[keys].id === updateData.id) {
        prdName[keys] = updateData;
      }
    }

    if (checkID) {
      await dispatch(
        editPrd({
          id: ID,
          barang: brg,
          user: user,
          harga: parseInt(harga),
          img: `https://random.imagecdn.app/500/150`,
        })
      );
      await dispatch(
        EDIT_ITEM({
          id: prdID,
          [Name]: [...prdName],
        })
      );
    } else {
      await dispatch(
        editPrd({
          id: ID,
          barang: brg,
          user: user,
          harga: parseInt(harga),
          img: `https://random.imagecdn.app/500/150`,
        })
      );
    }
    await dispatch(DisplayProductUpdate());
    await dispatch(GET_ITEM());
    navigate("/");
    setBrg("");
    setHarga("");
  }

  async function getProductID() {
    let response = await axios.get(`http://localhost:3004/cart/${params.id}`);
    setBrg(response.data.barang);
    setHarga(response.data.harga);
    setID(response.data.id);
    setUser(response.data.user);
  }
  useEffect(() => {
    if (editProduct) {
      dispatch(DisplayProductUpdate());
      console.log(editProduct);
    }
  }, [dispatch, editProduct]);

  useEffect(() => {
    if (!getCollection) {
      dispatch(GET_ITEM());
    } else {
      setItem(getCollection);
    }
  }, [dispatch, getCollection]);

  useEffect(() => {
    if (params) {
      getProductID();
    }
  }, [params]);
  useEffect(() => {
    getUser(nameStorage);
  }, [nameStorage]);
  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={HandleSubmitProduct}>
        <div className="inputProduct">
          <label htmlFor="">Input Nama Barang</label>
          <input
            type="text"
            value={brg}
            placeholder="e.g Barang ku"
            onChange={(e) => setBrg(e.target.value)}
          />
        </div>
        <div className="inputHargaProduct">
          <label htmlFor="">harga</label>
          <input
            type="text"
            value={harga}
            placeholder="$..."
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default EditProducts;
