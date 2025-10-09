const FurnitureCard = ({ item }) => {
  const discount = Math.round(
    ((item.originalPrice - item.price) / item.originalPrice) * 100
  );

  return (
    <div className="w-full h-full">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full rounded-md object-cover"
        />
        <div className="w-fit h-fit p-2.5 px-4 text-xl rounded-md absolute top-2 right-2 bg-neutral/85">
          <i className="ri-poker-hearts-line"></i>
        </div>
      </div>
      <div className="w-full p-2 px-0 flex flex-col">
        <span className="text-xs lg:text-sm text-zinc-600">
          {item.condition}
        </span>
        <h4
          className="text-base md:text-lg lg:text-xl font-medium line-clamp-1"
          title={item.name}
        >
          {item.name}
        </h4>

        <div className="flex items-center gap-1.5">
          <h4 className="text-sm md:text-base lg:text-lg leading-none">
            ₹{item.price.toLocaleString()}
          </h4>
          <h6 className="text-xs lg:text-sm line-through text-zinc-600">
            ₹{item.originalPrice.toLocaleString()}
          </h6>
          <h6 className="text-xs md:text-sm lg:text-base font-bold text-brand">
            ({discount}% off)
          </h6>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
