import React, { useEffect } from "react";
import standeeList from "../../data/ItemList/standeeList";
import ProductCard from "../../components/Cards/productCard";



const StandeePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {standeeList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`₹ ${card.price}`}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default StandeePage;