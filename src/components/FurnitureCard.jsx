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
          className="rounded-md object-cover w-full"
        />
        <div className="w-fit h-fit p-2.5 px-4 text-xl rounded-md absolute top-2 right-2 bg-neutral/85">
          <i className="ri-poker-hearts-line"></i>
        </div>
      </div>
      <div className="w-full p-2 px-0 flex flex-col gap-0.5">
        <span className="text-sm text-zinc-600">{item.condition}</span>
        <h4 className="text-lg lg:text-xl font-medium line-clamp-1" title={item.name}>
          {item.name}
        </h4>

        <div className="flex items-center gap-1.5">
          <h4 className="text-base lg:text-lg">₹{item.price.toLocaleString()}</h4>
          <h6 className="text-sm line-through text-zinc-600">
            ₹{item.originalPrice.toLocaleString()}
          </h6>
          <h6 className="text-sm lg:text-base font-bold text-brand">({discount}% off)</h6>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
