import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="single-tour">
      <img src={tour.image} alt={tour.name} />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">${tour.price}</h4>
        </div>
        <p>
          {isOpen ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(tour.id)}>
          Not Interested
        </button>
      </footer>
    </div>
  );
};

export default Tour;
