import requests from '../../request';
import Banner from '../components/Browse/Banner';
import Header from '../components/Browse/Header';
import Row from '../components/Browse/Row';
import MovieModal from '../components/modal/MovieModal';

const Browse = () => {
  return (
    <div className="relative h-screen lg:h-[140vh] bg-gradient-to-b">
      <Header />
      <main className="space-y-16">
        <Banner />
        <Row title="Trending Now" url={requests.fetchTrending} />
        <Row title="Actions Movies" url={requests.fetchActionMovies} />
        <Row title="Top Rated Movies" url={requests.fetchTopRated} />
        <Row title="Horror Movies" url={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" url={requests.fetchRomanceMovies} />
        <Row title="Documentaries Movies" url={requests.fetchDocumantaries} />
        <Row title="Comedy Movies" url={requests.fetchComedyMovies} />
        <MovieModal />
      </main>
    </div>
  );
};

export default Browse;
