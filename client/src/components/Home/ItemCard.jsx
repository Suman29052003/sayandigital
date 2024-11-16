// Component that renders either an image-only card or a full card with title and image
const ItemCard = ({ title, image, width, height, variant = "full" }) => {
  // Convert width to responsive classes if it's a percentage
  const widthClass = width === "100%" ? "w-full" : `w-[${width}px]`;
  
  // Image-only variant rendering
  if (variant === "imageOnly") {
    return (
      <div 
        className={`rounded-lg drop-shadow-xl overflow-hidden flex-shrink-0 ${widthClass}`}
        style={{ height: `${height}px` }}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    )
  }

  // Full card variant with title and image
  return (
    <div 
      className=" rounded-lg drop-shadow-xl overflow-hidden flex-shrink-0 flex flex-col"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Card Header - Title Section */}
      <div className="p-3 border-b rounded-t-lg bg-[#09a5d3]">
        <h3 className="text-white font-semibold text-lg truncate text-center">
          {title}
        </h3>
      </div>
      
      {/* Card Body - Image Container */}
      <div className="flex-1">
        {/* Image wrapper with overflow control */}
        <div className="w-full h-full overflow-hidden">
          {/* Responsive image with hover effect */}
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-center hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default ItemCard; 