import React, { useEffect, useState } from "react";
import "../../styles/my-detail.scss";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
const MyDetail = () => {
  const { id } = useParams("id");

  const [singleMovie, setSingleMovie] = useState(null);

  useEffect(() => {
    fetch(`${apiConfig.baseUrl}movie/${id}?api_key=${apiConfig.apiKey}`)
      .then((res) => res.json())
      .then((res) => setSingleMovie(res));
  }, [id]);

  return (
    <section>
      {singleMovie !== null ? (
        <div className="container">
          <div class="grid grid-cols-2 gap-4">
            <div className="poster-img">
              <img
                className="img-fluid"
                src={apiConfig.originalImage(singleMovie.poster_path)}
                alt=""
              />
            </div>
            <div>
              <h1>{singleMovie.popularity}</h1>
              <h3>{singleMovie.original_title}</h3>
              <p>{singleMovie.overview}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-700 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default MyDetail;
