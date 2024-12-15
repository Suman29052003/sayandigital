import React, { useEffect } from 'react'
import invitationCardList from '../../data/ItemList/invitationCardList';
import ProductCard from "@/components/Cards/ProductCard.jsx";

const InvitationCardPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4 ">

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
