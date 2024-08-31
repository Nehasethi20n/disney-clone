/* eslint-disable react/jsx-key */

const productList = [
  {
    id: 1,
    image: "/images/disney.png",
    video: "/videos/disney.mp4",
  },
  {
    id: 2,
    image: "/images/marvel.png",
    video: "/videos/marvel.mp4",
  },
  {
    id: 3,
    image: "/images/nationalG.png",
    video: "/videos/national-geographic.mp4",
  },
  {
    id: 4,
    image: "/images/pixar.png",
    video: "/videos/pixar.mp4",
  },
  {
    id: 5,
    image: "/images/starwar.png",
    video: "/videos/star-wars.mp4",
  },
];

function ProductionHouse() {
  return (
    <div className="flex gap-2 md:gap-6 p-2 px-5 md:px-16">
      {productList.map((item) => (
        <div className="border-2 rounded-lg hover:scale-110 transition-all cursor-pointer duration-300 ease-in relative shadow-xl shadow-gray-800">
        <video src={item.video} autoPlay loop playsInline className="absolute top-0 rounded-md z-0 hover:opacity-50 opacity-0"/>
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
