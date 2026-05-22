import FeaturedSlider from "../shared/FeaturedSlider";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured-facilities`);
  const data = await res.json();

  return (
    <div className="my-20 container mx-auto">
      
      <h1 className="text-center text-4xl md:text-5xl font-bold">
        Featured <span className="text-green-800">Facilities</span>
      </h1>

      <p className="text-center mt-3 text-xl text-muted">
        Discover our most popular and highly rated sports facilities
      </p>

      <div className="mt-10">
        <FeaturedSlider data={data} />
      </div>

    </div>
  );
};

export default Featured;