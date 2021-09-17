import React from "react";
import Tour from "./Tour";

const Tours = ({ data, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Tour List - React Page</h2>
        <div className="underline"></div>
      </div>
      <div>
        {data.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
