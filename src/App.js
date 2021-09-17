import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    const newTourList = data.filter((tour) => tour.id !== id);
    setData(newTourList);
  };

  if (isLoading) {
    return (
      <main>
        <section>
          <Loading />;
        </section>
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchData}>
            Refresh list
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours data={data} removeTour={removeTour} />
    </main>
  );
}

export default App;
