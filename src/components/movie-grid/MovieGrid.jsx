import React, { useEffect, useState } from "react";
import apiConfig from "../../api/apiConfig";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const MovieGrid = ({ type }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getList = async () => {
      let response = null;
      switch (type) {
        case "movie":
          response = await (
            await fetch(
              `${apiConfig.baseUrl}movie/popular?api_key=${apiConfig.apiKey}`
            )
          ).json();
          break;
        default:
          response = await (
            await fetch(
              `${apiConfig.baseUrl}tv/popular?api_key=${apiConfig.apiKey}`
            )
          ).json();
          break;
      }
      setMovies(response.results);
    };
    getList();
  }, []);

  return (
    <>
      {movies.length > 0 ? (
        <section className="movie-lists">
          <div className="container mx-auto">
            <h1 className="text-xl mt-2 mb-2 font-bold">
              {type === "movie" ? "Popular Movies" : "Popular Tv Shows"}
            </h1>
            <Swiper
              loop={true}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
              spaceBetween={20}
            >
              {movies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <div className="movie-item">
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        className="img-fluid"
                        src={`${apiConfig.originalImage(movie.poster_path)}`}
                        alt=""
                      />
                      <h6 className="my-3">
                        {type === "movie"
                          ? movie.original_title
                          : movie.original_name}
                      </h6>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default MovieGrid;
