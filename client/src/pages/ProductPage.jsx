import ProductInfo from "../components/ProductPage/ProductInfo";
import OrderTagLine from "../components/ProductPage/OrderTagLine";
import WPButton from "../components/ProductPage/WPButton";
import DeliveryBanner from "../components/ProductPage/DeliveryBanner";
import { useEffect } from "react";

const ProductPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ProductInfo />
      <OrderTagLine />
      <WPButton />
      <DeliveryBanner />
    </div>
  );
};

export default ProductPage;
