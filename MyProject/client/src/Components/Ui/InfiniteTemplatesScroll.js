const InfiniteTemplatesScroll = () => {
  const modeles = [
    { id: 1, image: "/assets/images/template1.png" },
    { id: 2, image: "/assets/images/template2.jpg" },
    { id: 3, image: "/assets/images/template3.jpg" },
    { id: 4, image: "/assets/images/template4.jpg" },
    { id: 5, image: "/assets/images/template5.jpg" },
    { id: 6, image: "/assets/images/template6.jpg" },
    { id: 7, image: "/assets/images/template7.jpg" },



  ];

  const duplicatedModeles = [...modeles, ...modeles];

  return (
    <div className="relative w-full overflow-hidden cursor-pointer  ">
      <div className="flex items-center">
        {/* Animated scrolling container */}
        <div className="flex animate-infinite-scroll">
          {duplicatedModeles.map((modele, i) => (
            <div key={i} className="mx- flex-shrink-0 w-96 h-96  ">
              <img
                src={modele.image}
                alt={modele.id}
                className="object-cover w-auto h-full hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTemplatesScroll;
