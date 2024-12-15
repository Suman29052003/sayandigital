import React, { useEffect } from "react";
import coffeeMugsList from "../../data/ItemList/coffeeMugsList";
import ProductCard from "@/components/Cards/ProductCard.jsx";

const CoffeeMugsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   
  }, []);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4 ">

      {coffeeMugsList.map((card, index) => (
        <ProductCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          price={`${card.price}`}
          image={card.image_1}
        />
      ))}
    </div>
  );
};

export default CoffeeMugsPage;