import axios from "axios";

function getItems(searchParams) {
  const categoryQuery = searchParams.get("category_name");
  if (categoryQuery) {
    return axios.get(
      `https://be-project-news.onrender.com/api/items?category_name=${categoryQuery}`
    );
  } else {
    return axios.get("https://be-project-news.onrender.com/api/articles");
  }
}
