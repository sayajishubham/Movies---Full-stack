import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getToken } from "../../utils/user.utils";
import { Button } from "@/components/ui/button";
import { Navigate, NavLink } from "react-router-dom";

export function MovieCard({ movie }) {
  const { role } = getToken();
  if (role === "admin" || role === "user") {
    return (
      <Card className="w-[15%]">
        <CardHeader>
          <img src={movie.Image} />
          <CardTitle>{movie.Title}</CardTitle>
          <CardDescription>{movie.Description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Directed by-{movie.Director}</p>
          <p>released in- {movie.Release_Year}</p>
        </CardContent>
        <CardFooter className="flex gap-10">
          {role === "admin" ? (
            <>
              <NavLink to="/Addmovies">
                <Button variant="outline">edit</Button>
              </NavLink>
              <Button variant="destructive">Delete</Button>
            </>
          ) : (
            ""
          )}
        </CardFooter>
      </Card>
    );
  } else {
    Navigate("/signin");
    return <h1>Signin First</h1>;
  }
}
