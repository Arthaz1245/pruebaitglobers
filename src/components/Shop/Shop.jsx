import { useGetAllClothesQuery } from "../../features/clothesApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import "./Shop.scss";
const Shop = () => {
  const { items: clothes, status } = useSelector((state) => state.clothes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetAllClothesQuery();
  const handleAddToCart = (cloth) => {
    dispatch(addToCart(cloth));
    navigate("/cart");
  };
  return (
    <div className="shop-container">
      {status === "success" ? (
        <>
          <h2>New Collection</h2>
          <div className="clothes">
            {data &&
              data?.map((cloth) => (
                <div key={cloth.id} className="cloth">
                  <h3>{cloth.name}</h3>
                  <img src={cloth.image} alt={cloth.name} />
                  <div className="details">
                    <span>{cloth.desc}</span>
                    <span className="price">${cloth.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(cloth)}>
                    Add To Cart
                  </button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Shop;
