import React from 'react'
import  corporateGiftsList  from '../../data/ItemList.js/corporateGiftsList'
import ProductCard from '../../components/productCard'

const CorporateGiftsPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
    {corporateGiftsList.map((card, index) => (
      <ProductCard key={index} id={card.id} title={card.title} subTitle={card.subTitle} price={card.price} image={card.image} />
    ))}
  </div>
  )
}

export default CorporateGiftsPage
