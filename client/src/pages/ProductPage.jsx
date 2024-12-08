import ProductInfo from "../components/ProductPage/ProductInfo";
import OrderTagLine from "../components/ProductPage/OrderTagLine";
import WPButton from "../components/ProductPage/OrderButton";
import DeliveryBanner from "../components/ProductPage/DeliveryBanner";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductProvider } from "../context/ProductContext.jsx";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1); // State for quantity
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const { title , subTitle, images, price } = location.state || {};

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ProductProvider>
        <ProductInfo
          title={title}
          subTitle={subTitle}
          images={images}
          price={price}
          onQuantityChange={setQuantity} // Pass the setter function to CustomProduct
        />
        <OrderTagLine />
        <WPButton title={title} price={price} quantity={quantity} />
        <DeliveryBanner />
      </ProductProvider>
    </div>
  );
};

export default ProductPage;
