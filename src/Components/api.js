import axios from "axios";

function getArticles(searchParams) {
  const topicQuery = searchParams.get("topic");
  if (topicQuery) {
    return axios.get(
      `https://be-project-news.onrender.com/api/articles?topic=${topicQuery}`
    );
  } else {
    return axios.get("https://be-project-news.onrender.com/api/articles");
  }
}

export default getArticles;
