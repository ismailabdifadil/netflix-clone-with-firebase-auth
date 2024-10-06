import { useEffect, useState } from 'react';
import BASE_IMAGE_URL from '../../../constants';
import axios from 'axios';
import requests from '../../../request';
import { AiFillInfoCircle, AiFillPlayCircle } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atom/atom';

const Banner = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests.fetchHorrorMovies);
      setTrending(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
    };
    fetchData();
  }, []);

  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] lg:justify-end lg:pb-16 ">
      <div className=" absolute -z-10 top-0 left-0 w-screen">
        <img
          src={`${BASE_IMAGE_URL}${
            trending.backdrop_path || trending.poster_path
          }`}
          alt=""
          className="w-screen h-screen object-cover"
        />
      </div>
      <div className="lg:px-10">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          {trending.title || trending.name || trending.original_name}
        </h1>
        <p className="max-w-xs text-xs md:text-lg md:max-w-lg lg:text-xl lg:max-w-xl ">
          {trending.overview}
        </p>
        <div className="flex items-center space-x-2">
          <button
            className="flex items-center rounded bg-white px-5 py-1 text-black transition hover:text-gray-600 md:px-7 md:py-2 md:text-lg space-x-1"
            onClick={() => {
              setShowModal(!showModal);
              setMovie(trending);
            }}
          >
            <AiFillPlayCircle />
            <span>Play</span>
          </button>
          <button className="flex items-center rounded md:px-7 md:py-2 md:text-lg space-x-1 bg-[#5a7272] hover:bg-[#718a8a]">
            <AiFillInfoCircle />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
