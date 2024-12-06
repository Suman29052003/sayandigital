import ProductInfo from "../components/ProductPage/ProductInfo";
import OrderTagLine from "../components/ProductPage/OrderTagLine";
import WPButton from "../components/ProductPage/OrderButton";
import DeliveryBanner from "../components/ProductPage/DeliveryBanner";
import { useEffect } from "react";

const ProductPage = ({
  title,
  subTitle,
  images = [], // Default to an empty array
  price,
  des_1,
  des_2,
  des_3,
  des_4,
}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ProductInfo 
        title={title}
        subTitle={subTitle}
        images={images}
        price={price}
        des_1={des_1}
        des_2={des_2}
        des_3={des_3}
        des_4={des_4}
      />
      <OrderTagLine />
      <WPButton />
      <DeliveryBanner />
    </div>
  );
};

export default ProductPage;