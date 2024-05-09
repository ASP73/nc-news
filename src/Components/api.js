import axios from "axios";
// import { response } from "express";

export function getArticles(searchParams) {
  const topicQuery = searchParams.get("topic");
  if (topicQuery) {
    return axios.get(
      `https://be-project-news.onrender.com/api/articles?topic=${topicQuery}`
    );
  } else {
    return axios.get("https://be-project-news.onrender.com/api/articles");
  }
}

export function getArticleById(article_id) {
  return axios.get(
    `https://be-project-news.onrender.com/api/articles/${article_id}`
  );
}

export function getCommentsByArticleId(article_id) {
  return axios.get(
    `https://be-project-news.onrender.com/api/articles/${article_id}/comments`
  );
}
