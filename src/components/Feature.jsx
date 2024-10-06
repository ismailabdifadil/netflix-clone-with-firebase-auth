const Feature = ({ id, title, description, alt, image, video, direction }) => {
  return (
    <div
      className={`my-24 relative flex-row sm:flex mx-auto max-w-screen-lg items-center justify-center ${
        id % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
      } space-y-4`}
    >
      <div className="flex-1 space-y-4 tracking-wider ">
        <h1 className="max-w-lg font-bold text-4xl text-center sm:text-5xl">
          {title}
        </h1>
        <h2 className="text-center tracking-normal text-2xl">{description}</h2>
      </div>

      <div className="flex-1 relative">
        <img className="z-10" src={`./images/${image}`} alt={alt} />
        <video className=" absolute -z-10 top-1 sm:top-20 sm:left-16 sm:w-96" loop autoPlay="autoplay" src={`./images/${video}`} />
      </div>
    </div>
  );
};

export default Feature;
