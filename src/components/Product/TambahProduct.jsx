import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DisplayProduct, TambahProduct } from "../../action/ProductAction";
import "./TambahProduct.css";

function TambahProducts() {
  const [brg, setBrg] = useState("");
  const [harga, setHarga] = useState("");
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.LoginReducer);
  const { addProduct } = useSelector((state) => state.ProductReducer);
  const navigate = useNavigate();
  async function HandleSubmitProduct() {
    await dispatch(
      TambahProduct({
        barang: brg,
        harga: parseInt(harga),
        user: userName.name,
        img: `https://random.imagecdn.app/500/150`,
      })
    );
    await dispatch(DisplayProduct());
    navigate("/");
    setBrg("");
    setHarga("");
  }
  useEffect(() => {
    if (!addProduct) {
      dispatch(DisplayProduct());
      console.log(addProduct);
    }
  }, [dispatch, addProduct]);

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

export default TambahProducts;
