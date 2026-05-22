const Loading = () => {
  return (
    <div className="pt-20 container mx-auto">
      <h1 className="text-center text-2xl font-bold">
        Loading Facilities...
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 mt-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-60 bg-gray-200 animate-pulse rounded-xl"
          />
        ))}
      </div>
    </div>
  );
};

export default Loading;