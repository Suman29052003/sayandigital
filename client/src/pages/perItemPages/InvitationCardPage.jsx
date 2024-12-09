import React, { useEffect } from 'react'
import invitationCardList from '../../data/ItemList/invitationCardList';
import ProductCard from "../../components/Cards/ProductCard.jsx";

const InvitationCardPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
          {invitationCardList.map((card, index) => (
            <ProductCard
              key={index}
              id={card.id}
              title={card.title}
              subTitle={card.shortTitle}
              price={`From ${card.price} /piece`}
              image={card.image}
            />
          ))}
        </div>
      );

}

export default InvitationCardPage
