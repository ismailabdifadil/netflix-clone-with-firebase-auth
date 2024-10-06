import { useRecoilState } from 'recoil';
import { modalState, movieState } from '../../atom/atom';
import { Modal } from '@mui/material';
import ReactPlayer from 'react-player';
import { FaPause, FaPlay, FaPlus,  } from 'react-icons/fa';
import {
  HiThumbUp,
  HiVolumeOff,
  HiVolumeUp,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [key, setKey] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  console.log(movie);
  const handleClose = () => {
    setShowModal(false);
    setMovie(null);
  };

  useEffect(() => {
    const fetchMovieTrail = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          import.meta.env.VITE_APP_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      setKey(data?.videos.results[0].key);
    };
    fetchMovieTrail();
  }, [movie]);
  return (
    <Modal
      className="fixed !top-7 left-0 right-0 mx-auto w-full max-w-2xl rounded-md z-50"
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
      <div className="relative pt-[56.24%]">
        <ReactPlayer
          width={'100%'}
          height={'100%'}
          style={{ position: 'absolute', top: 0, left: 0 }}
          url={`https://www.youtube.com/watch?v=${key}`}
          playing={isPlaying}
          muted={isMuted}
        />
        <div className="absolute bottom-10 flex justify-between w-full items-center px-10 ">
          <div className="flex gap-x-3 justify-center items-center">
            <button className="bg-white py-1.5 px-5 rounded-sm text-black flex gap-2">
              {isPlaying ? (
                <FaPause
                  className="w-6 h-6"
                  onClick={() => setIsPlaying(false)}
                />
              ) : (
                <FaPlay
                  className="w-6 h-6"
                  onClick={() => setIsPlaying(true)}
                />
              )}
            </button>
            <button className="border-2 border-gray-300  rounded-full h-9 w-9 flex items-center justify-center hover:border-white">
              <FaPlus className="w-5 h-5" />
            </button>
            <button className=" h-11 w-11 flex items-center justify-center">
              <HiThumbUp className="h-8 w-8" />
            </button>
          </div>
          <button onClick={() => setIsMuted(!isMuted)}>
            {isMuted ? (
              <HiVolumeOff className="w-7 h-7" />
            ) : (
              <HiVolumeUp className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      <div className='bg-[#181818] px-4 py-6 rounded-sm flex flex-col space-y-3'>
        <div className='flex space-x-2'>
          <p className='text-green-400'>{(movie?.vote_average * 10).toFixed(2)}% match</p>
          <p>{movie?.release_date}</p>
          <div className='w-4 border border-white px-3 flex items-center justify-center rounded text-sm'>HD</div>
        </div>

        <div className='w-5/6'>
          <p className=' font-light text-sm'>{movie?.overview}</p>
        </div>
        
        <div>
          <p ><span className='text-sm text-gray-400'>Original Language:</span> {movie?.original_language}</p>
        </div>
        <div>
          <p ><span className='text-sm text-gray-400'>Total Votes:</span> {movie?.vote_count}</p>
        </div>

      </div>
      </>
    </Modal>
  );
};

export default MovieModal;
