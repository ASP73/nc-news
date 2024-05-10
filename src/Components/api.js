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

export function patchVote(article_id, newVote) {
  return axios
    .patch(`https://be-project-news.onrender.com/api/articles/${article_id}`, {
      inc_votes: newVote,
    })
    .then(({ data }) => {
      return data;
    });
}

export function postNewComment(article_id, username, newComment) {
  return axios
    .post(
      `https://be-project-news.onrender.com/api/articles/${article_id}/comments`,
      {
        username,
        body: newComment,
      }
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    });
}
