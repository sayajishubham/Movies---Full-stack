import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

function Allmovies() {
  const [moviesdata, setmoviesdata] = useState([]);
  const SessionUserdata = JSON.parse(sessionStorage.getItem("Userlogin"));
  const role = sessionStorage.getItem("role");
  console.log(role);
  useEffect(() => {
    function fetchmoviesapi() {
      axios
        .get(`http://localhost:8080/movies`, { withCredentials: true })
        .then((res) => {
          console.log(res.data.data);
          setmoviesdata(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchmoviesapi();
  }, []);

  function handledelete(id) {
    axios
      .delete(`http://localhost:8080/movies/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full h-auto  pt-[100px]">
      <div className="w-[95%] m-auto mt-[15px] py-[10px] px-[10px] flex gap-5">
        {/* Left side Table Design */}
        <div className="w-[45%]  rounded-lg shadow-md p-4 overflow-y-auto h-[600px] sticky top-[16%]">
          <Table className="w-full text-center  ">
            <TableCaption>
              {moviesdata.length === 0
                ? "No Movies Found!"
                : "A list of your recent Movies"}
            </TableCaption>
            <TableHeader>
              <TableRow className="text-white">
                <TableHead className="w-[100px] text-white">Poster</TableHead>
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-white">Genre</TableHead>
                <TableHead className="text-right text-white">
                  Release Year
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {moviesdata.length > 0 ? (
                moviesdata.map((movie, index) => (
                  <TableRow key={index} className="text-white">
                    <TableCell className="text-left py-2">
                      <img
                        src={movie.Image}
                        alt="Movie"
                        className="w-[60px] h-[60px] object-cover rounded-md"
                      />
                    </TableCell>
                    <TableCell className="text-left py-2 ">
                      {movie.Title}
                    </TableCell>
                    <TableCell className="text-left py-2">
                      {movie.Genre}
                    </TableCell>
                    <TableCell className="text-right py-2">
                      {movie.ReleaseYear}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan="4"
                    className="text-center py-5 text-red-500 font-semibold"
                  >
                    No Movies Found!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="w-[53%] flex flex-wrap justify-between gap-5">
          {moviesdata.length > 0 ? (
            moviesdata.map((movie, index) => (
              <Card key={index} className="w-[48%] bg-tranparent">
                <CardHeader className="w-full h-[250px]  flex items-center justify-center p-0">
                  <img
                    src={movie.Image}
                    alt="Movie Poster"
                    className="w-[50%] h-[250px]  rounded-t-lg"
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-white">{movie.Title}</p>
                  <p className="text-white">{movie.Genre}</p>
                  <p className=" text-white">{movie.Director}</p>
                  <p className="text-white">{movie.ReleaseYear}</p>
                  <p className="text-white">{movie.Description}</p>
                </CardContent>
                {role === "admin" && (
                  <div className="flex mt-4 gap-3 justify-center">
                    <button className="bg-yellow-400 text-white py-1 px-3 rounded-md hover:bg-yellow-500 transition duration-200">
                      <Link
                        to={`/Updatemovies/${movie._id}`}
                        state={{
                          Title: movie.Title,
                          Genre: movie.Genre,
                          Director: movie.Director,
                          Image: movie.Image,
                          ReleaseYear: movie.ReleaseYear,
                          Description: movie.Description,
                        }}
                      >
                        Edit
                      </Link>
                    </button>
                    <button
                      onClick={() => {
                        handledelete(movie._id);
                      }}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </Card>
            ))
          ) : (
            <p className="text-center text-white w-full text-xl mt-5">
              No Movies Found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Allmovies;
