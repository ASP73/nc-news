import { useParams } from "react-router-dom";
import { getArticleById } from "./api";
import { useState, useEffect } from "react";
import CommentList from "./CommentsList";

export default function SingleArticle() {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
    const [showComments, setShowComments] = useState(false);
	useEffect(() => {
		getArticleById(article_id).then(({ data }) => {
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
                <button className="comments-btn">Vote</button>
                {showComments && <CommentList article_id={article_id} />}
			</div>
		</div>
	);
}

