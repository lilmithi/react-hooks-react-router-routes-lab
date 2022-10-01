import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((actor,index) => {
          return (
            <div key={index}>
              <h2>Name: {actor.name}</h2>
              Movies:
              <ul>
                {actor.movies.map((movie,index) => {
                  return <li key={index}>{movie}</li>;
                })}
              </ul> 
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Actors;
