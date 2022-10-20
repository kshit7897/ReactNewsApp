import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const Apiurl =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-10-5&sortBy=publishedAt&apiKey=7689a33b160242fe868be519e87f7035";

  const FetchApiData = async (url) => {
    setLoading(true);
    const res = await axios.get(url);
    // console.log(res.data.articles);
    const news = await res.data.articles;
    setData([...news]);
    console.log("news", news);
    setLoading(false);
  };

  useEffect(() => {
    FetchApiData(Apiurl);
  }, []);

  return (
    <>
      <div className="input">
        <input onChange={(e) => setSearch(e.target.value)} type="text" />
      </div>
      <div className="loadpage">
        {loading ? (
          <h2>Wait A min......</h2>
        ) : (
          data
            .filter((post) => {
              if (search === "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return post;
              }
            })

            .map((item, index) => (
              <div className="container" key={index}>
                <div className="childcon">
                  <div className="dispalyhead">
                    <h3 className="display-htext">{item.title}</h3>
                  </div>
                  <img className="displayImg" src={item.urlToImage} alt="" />
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
};

export default Home;

// <div className="container">
//   {data.map((item, index) => {
//     return (
// <div className="childcon" key={index}>
//   <div className="dispalyhead">
//     <h3 className="display-htext">{item.title}</h3>
//   </div>
//   <img className="displayImg" src={item.urlToImage} alt="" />
// </div>
//     );
//   })}
// </div>
