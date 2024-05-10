import { useParams } from "react-router-dom";
import { getArticleById, patchVote } from "./api";
import { useState, useEffect } from "react";
import CommentList from "./CommentsList";

export default function SingleArticle() {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
    const [showComments, setShowComments] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
	useEffect(() => {
		getArticleById(article_id).then(({ data }) => {
            console.log(data)
			setSingleArticle(() => {
				return data.article[0];
			});
		});
	}, [article_id]);
	const { title, article_img_url, body, topic, author, created_at, votes } = singleArticle;

    const formatDate = (datestr) => {
        const date = new Date(datestr);
        return date.toLocaleDateString();
    }

    const clickShowComments = () => {
        setShowComments(true);
    }

    const handleVote = (newVote) => {
        patchVote(article_id, newVote)
          .then(() => {
            setSingleArticle((prevState) => ({
              ...prevState,
              votes: prevState.votes + newVote,
            }));
          })
          .catch((error) => {
            console.error(error);
          });
      };

	return (
		<div className="body-container">
			<img className="article-img" src={article_img_url} alt={`image relating to ${title}`} />
			<div className="article-detail">
				<p>{title}</p>
				<p>{body}</p>
				<p>Topic: {topic}</p>
                <p>Author: {author}</p>
                <p>Date created: {formatDate(created_at)}</p>
                <p>Votes: {votes}</p>

				<button className="comments-btn" onClick={clickShowComments}>Show Comments</button>
                <button className="comments-btn" disabled={} onClick={() => handleVote(1)}>Vote up</button>
                <button className="comments-btn" onClick={() => handleVote(-1)}>Vote down</button>
                {showComments && <CommentList article_id={article_id} />}
			</div>
		</div>
	);
}

