import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Updatemovies() {
  let location = useLocation();
  let { Title, Genre, Director, Image, ReleaseYear, Description } =
    location.state;

  let [UpdateTitle, SetUpdateTitle] = useState(Title);
  let [UpdateGenre, SetUpdateGenre] = useState(Genre);
  let [UpdateDirector, SetUpdateDirector] = useState(Director);
  let [UpdateImage, SetUpdateImage] = useState(Image);
  let [UpdateReleaseYear, SetUpdateReleaseYear] = useState(ReleaseYear);
  let [UpdateDescription, SetUpdateDescription] = useState(Description);

  let { id } = useParams();

  let navigate = useNavigate();
  function handleUpdatemovies(e) {
    e.preventDefault();
    axios
      .patch(
        `http://localhost:80808/movies/${id}`,
        {
          Title: UpdateTitle,
          Genre: UpdateGenre,
          Director: UpdateDirector,
          Image: UpdateImage,
          ReleaseYear: UpdateReleaseYear,
          Description: UpdateDescription,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/Allmovies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen pt-[100px] mt-[15px] flex justify-center items-center">
      <div className="signup-user w-[500px] rounded-md border-[1px] bg-white/20 backdrop-blur-md p-[20px] shadow-2xl">
        <div className="signup-header w-full h-[80px] flex justify-center items-center mb-4">
          <h1 className="text-white text-4xl font-bold">
            <span className="text-red-500">.</span> Movie
          </h1>
        </div>
        <div>
          <h2 className="text-[23px] text-white text-center pb-[2px]">
            Update Movie
          </h2>
          <h4 className="text-[16px] text-center pb-[10px] text-[#c0c8d2]">
            Fill the details below
          </h4>
        </div>
        <div className="w-full">
          <form onSubmit={handleUpdatemovies}>
            <label htmlFor="Title" className="text-[16px] text-white">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Movie Title"
              name="UpdateTitle"
              value={UpdateTitle}
              onChange={(e) => {
                SetUpdateTitle(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]"
              required
            />
            <label htmlFor="Image" className="text-[16px] text-white">
              Image Url <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              name="UpdateImage"
              value={UpdateImage}
              onChange={(e) => {
                SetUpdateImage(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]"
              required
            />
            <label htmlFor="Genre" className="text-[16px] text-white">
              Genre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Action, Comedy, Drama..."
              name="UpdateGenre"
              value={UpdateGenre}
              onChange={(e) => {
                SetUpdateGenre(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]"
              required
            />
            <label htmlFor="Director" className="text-[16px] text-white">
              Director <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Director Name"
              name="UpdateDirector"
              value={UpdateDirector}
              onChange={(e) => {
                SetUpdateDirector(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]"
              required
            />
            <label htmlFor="ReleaseYear" className="text-[16px] text-white">
              Release Year <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              placeholder="2024"
              name="UpdateReleaseYear"
              value={UpdateReleaseYear}
              onChange={(e) => {
                SetUpdateReleaseYear(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] h-[46px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[10px]"
              required
            />
            <label htmlFor="Description" className="text-[16px] text-white">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Short description about the movie..."
              name="UpdateDescription"
              value={UpdateDescription}
              onChange={(e) => {
                SetUpdateDescription(e.target.value);
              }}
              className="w-full mt-1 bg-[#f3f6fd] min-h-[80px] border border-[#DCDDDF] text-[#333] rounded-sm outline-none p-3 mb-[15px]"
              required
            ></textarea>
            <button
              type="submit"
              className="block mx-auto px-[20px] py-[12px] bg-[#1F1C2F] text-white rounded-sm text-[16px] cursor-pointer hover:bg-[#29263e] transition-all"
            >
              Update Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Updatemovies;
