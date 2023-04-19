import React from "react";
import Layout from "../layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Movies } from "../Data/MovieData";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
const WatchPage = () => {
  let { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  const [play, setplay] = useState(false);
  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 p-6 gap-2 bg-main rounded border border-gray-800">
          <Link
            to={`/movie/${movie?.name}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray "
          >
            <BiArrowBack />
            {movie?.name}
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default WatchPage;
