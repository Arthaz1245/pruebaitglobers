import { useGetAllClothesQuery } from "../../features/clothesApi";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const { data, error, isLoading } = useGetAllClothesQuery();

  return <div>shop</div>;
};

export default Shop;
