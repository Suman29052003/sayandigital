import React from 'react'
import calenderList from '../../data/ItemList/calenderList'
import PreviewCard from '../../components/Cards/PreviewCard'

const CalenderPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
    {calenderList.map((card, index) => (
      <PreviewCard key={index} id={card.id} title={card.title} subTitle={card.subTitle} price={card.price} image={card.image_1} />
    ))}
  </div>
  )
}

export default CalenderPage
