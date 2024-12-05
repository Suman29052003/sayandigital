import React, { useEffect } from "react";
import trophyList from "../../data/ItemList/trophyList";
import PreviewCard from "../../components/Cards/PreviewCard";

const TrophyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {trophyList.map((card, index) => (
        <PreviewCard
          key={index}
          id={card.id}
          title={card.title}
          subTitle={card.subTitle}
          //   price={card.price}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default TrophyPage;
