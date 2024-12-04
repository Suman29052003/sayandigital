import React from "react";
import photoFrameList from "../../data/ItemList/photoFrameList";
import FrameCard from "../../components/Cards/PreviewCard";

const PhotoFramePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex md:flex-row flex-col gap-4 py-4 items-center justify-center flex-wrap">
      {photoFrameList.map((card) => (
        <FrameCard key={card.id} id={card.id} title={card.title} subTitle={card.subTitle} image={card.image} />
      ))}
    </div>
  );
};

export default PhotoFramePage;
