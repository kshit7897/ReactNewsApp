import React, { useState, useEffect } from "react";
import axios from "axios";
import Like from "./Like";
import Comments from "./Comments";
import Share from "./Share";

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

  const removeArtical = (id) => {
    // alert(urlToImage);
    let newArr = [];
    data.filter((item, index) => {
      if (id !== index) {
        newArr.push(item);
      }
      console.log(newArr);
    });
    setData(newArr);
  };

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
                  <div className="diaplay-img-div">
                    <img className="displayImg" src={item.urlToImage} alt="" />
                    <div className="display-para-div">
                      <p className="display-para">{item.description}</p>
                    </div>
                  </div>
                  <div className="like-hit">
                    <Like />
                    <Share />
                    <Comments />
                    <h3>
                      <i
                        onClick={() => removeArtical(index)}
                        class="fa-solid fa-trash"
                      ></i>
                    </h3>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </>
  );
};

export default Home;

// const handleDelete = (id) => {
//   let newArr = [];
//   searchedNewsData.filter((item, index) => {
//     if (id != index) {
//       newArr.push(item);
//     }
//   });
//   setSearchedNewsData(newArr);
// };
