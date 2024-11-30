import ProductInfo from "../components/ProductPage/ProductInfo";
import OrderTagLine from "../components/ProductPage/OrderTagLine";

const ProductPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ProductInfo />
      <OrderTagLine />
    </div>
  );
};

export default ProductPage;
