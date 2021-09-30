import axios from "axios";
import { useState, useEffect } from "react";
import trendyIcon from "../img/icons/popcorn-svgrepo-com.svg";
import moviesIcon from "../img/icons/clapboard-svgrepo-com.svg";
import tvShowIcon from "../img/icons/film-strip-svgrepo-com.svg";
import Show from "./Show";

const Showing = () => {
  const [popularShow, setPopularShow] = useState([]);
  const [trendingShow, setTrendingShow] = useState([]);
  const [popularTVShow, setPopularTVShow] = useState([]);
  useEffect(() => {
    const getPopularShowData = async () => {
      const popularShowData = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=36a12d1be93d668192fb20c80ebe64ba&language=fr-FR&page=1`
      );
      setPopularShow(popularShowData.data.results);
    };
    const getPopularTVShowData = async () => {
      const popularTVShowData = await axios(
        `https://api.themoviedb.org/3/tv/popular?api_key=36a12d1be93d668192fb20c80ebe64ba&language=fr-FR&page=1`
      );
      setPopularTVShow(popularTVShowData.data.results);
    };
    const getTrendingShowData = async () => {
      const trendingShowData = await axios(
        `https://api.themoviedb.org/3/trending/all/week?api_key=36a12d1be93d668192fb20c80ebe64ba`
      );
      setTrendingShow(trendingShowData.data.results);
    };
    getPopularShowData();
    getTrendingShowData();
    getPopularTVShowData();
  }, []);

  return (
    <div className="page__position">
      <Show
        shows={trendingShow}
        icon={trendyIcon}
        title="Films & Series tendances"
      />
      <Show shows={popularShow} icon={moviesIcon} title="Films populaires" />
      <Show shows={popularTVShow} icon={tvShowIcon} title="Series populaires" />
    </div>
  );
};

export default Showing;
