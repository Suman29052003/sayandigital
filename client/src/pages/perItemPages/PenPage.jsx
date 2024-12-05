import React, { useEffect } from 'react'
import penList from '../../data/ItemList/penList';
import PreviewCard from '../../components/Cards/PreviewCard';

const PenPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      return (
        <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
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
