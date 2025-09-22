import React from "react";
import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router";


const NewsCard = ({ newsCard }) => {
  const {
    id,
    total_view,
    author,
    title,
    rating,
    image_url,
    details,
    
  } = newsCard;

  const formattedDate = new Date(author.published_date).toLocaleDateString();
  
  return (
    <div>
      <div className="w-21/22 mx-auto">
        <div className="flex justify-between bg-gray-200 p-3">
          <div className="flex gap-3">
            <div className=" w-1/6">
                <img className="w-full rounded-3xl" src={author.img} alt="" />
            </div>
            <div>
                <p className="text-lg font-bold"> {author.name}</p>
                <p className="text-secondary">{formattedDate}</p>
            </div>
          </div>
          <div className="flex gap-3 text-2xl text-secondary">
            <button>
              <CiBookmark></CiBookmark>
            </button>
            <button>
              <GoShareAndroid></GoShareAndroid>
            </button>
          </div>
        </div>
        <div className="mb-3">
          <h1 className="text-xl font-semibold my-4">{title}</h1>
          <img src={image_url} alt="" />
        </div>
        <div className="text-secondary mb-6">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}.....
              <Link to={`/category-individual-news/${id}`} className="text-blue-400 font-semibold cursor-pointer hover:underline">
                {" "}
                Read more
              </Link>
            </>
          ) : (
            details
          )}
        </div>
        <hr className="mb-5 text-gray-400" />
        <div className="flex justify-between mb-8">
          <div className="flex gap-3">
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 star"
              />
               
              
            </div>
            <div>
                <p className="text-secondary">{rating.number}</p>
            </div>
          </div>  
            
           

          <div className="flex items-center text-xl gap-3 text-secondary">
            <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
