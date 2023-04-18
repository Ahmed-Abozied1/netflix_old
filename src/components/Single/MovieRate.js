import React from "react";
import Titles from "../Titles";
import { BsBookmarkStar } from "react-icons/bs";
import { Select } from "../UsedInputs";
import { useState } from "react";
import Rating from "../../components/Rating"
const MovieRate = ({ movie }) => {
  const Ratings = [
    {
      title: " Poor",
      value: 0,
    },
    {
      title: " Fair",
      value: 1,
    },
    {
      title: " Good",
      value: 2,
    },
    {
      title: " Very Good",
      value: 3,
    },
    {
      title: " Excellent",
      value: 4,
    },
    {
      title: " Master",
      value: 5,
    },
  ];
  const [rating, setRating] = useState();
  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStar} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-2xl text-text font-medium ">
            Reviews "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            write a review for this movie.
          </p>
          <div className="text-sm w-full">
            <Select
              lable="Select Rating"
              options={Ratings}
              onChange={(e) => setRating(e.target.value)}
              
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
                <Rating value={rating}/>
            </div>
          </div>
          {/* message */}
          
        </div>
      </div>
    </div>
  );
};

export default MovieRate;
