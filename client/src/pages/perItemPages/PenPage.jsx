import React, { useEffect } from 'react'
import penList from '../../data/ItemList/penList';
import PreviewCard from '@/components/Cards/PreviewCard.jsx';

const PenPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4 ">

          {penList.map((card, index) => (
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
}

export default PenPage
