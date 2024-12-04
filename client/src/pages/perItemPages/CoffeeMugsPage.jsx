import React from 'react'
import coffeeMugsList from '../../data/ItemList/coffeeMugsList'
import ProductCard from '../../components/productCard'

const CoffeeMugsPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
    {coffeeMugsList.map((card, index) => (
      <ProductCard key={index} id={card.id} title={card.title} subTitle={card.subTitle} price={card.price} image={card.image_1} />
    ))}
  </div>
  )
}

export default CoffeeMugsPage
