import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import BASE_IMAGE_URL from '../../../constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [isScroll, setIsScroll] = useState(false);

  const rowRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setMovies(data.results);
    };
    fetchData();
  }, []);

  const handleScroll = (direction) => {
    setIsScroll(true);
    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  return (
    <div className="lg:px-10 h-40">
      <h2 className="text-lg font-semibold pb-3">{title}</h2>
      <div className="relative group md:ml-2">
        <FaChevronLeft
          onClick={() => handleScroll('left')}
          className={`${
            !isScroll && 'hidden'
          } absolute top-0 bottom-0 m-auto z-40 left-2 hover:scale-125 opacity-0 cursor-pointer size-8 group-hover:opacity-100`}
        />
        <div
          className="flex overflow-x-scroll scrollbar-hide space-x-0.5 md:space-x-2.5 md:p-2 items-center"
          ref={rowRef}
        >
          {movies &&
            movies.map((movie) => (
              <div key={movie.poster_path} className="relative h-28 min-w-[180px] md:h-36 md:min-w-[260px] cursor-pointer md:hover:scale-105">
                <img
                  src={`${BASE_IMAGE_URL}${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt=""
                  className="rounded-sm object-cover h-28 min-w-[180px] md:h-36 md:min-w-[260px"
                />
              </div>
            ))}
        </div>
        <FaChevronRight
          className="absolute top-0 bottom-0 m-auto z-40 right-2 hover:scale-125 opacity-0 cursor-pointer size-8 group-hover:opacity-100"
          onClick={() => handleScroll('right')}
        />
      </div>
    </div>
  );
};

export default Row;
