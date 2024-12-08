import React, { useEffect } from 'react'
import tilesList from '../../data/ItemList/tilesList';
import ProductCard from "@/components/Cards/ProductCard.jsx";

const TilesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
          {tilesList.map((card, index) => (
            <ProductCard
              key={index}
              id={card.id}
              title={card.title}
              subTitle={card.subTitle}
              price={`From ${card.price} /piece`}
              image={card.image}
            />
          ))}
        </div>
      );
}

export default TilesPage
