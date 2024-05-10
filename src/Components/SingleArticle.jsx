import { useParams } from "react-router-dom";
import { getArticleById, patchVote, postNewComment } from "./api";
import { useState, useEffect } from "react";
import CommentList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

export default function SingleArticle() {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState({});
    const [showComments, setShowComments] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [username, setUsername] = useState("grumpy19");
    const [commentBody, setCommentBody] = useState("");
    const [isCommentPosted, setIsCommentPosted] = useState(false)
    

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

    const handleVote = (newVote) => {
        setHasVoted(newVote);
        patchVote(article_id, newVote)
          .then(() => {
            setSingleArticle((prevState) => ({
              ...prevState,
              votes: prevState.votes + newVote,
            }));

          })
          .catch((error) => {
            console.error(error);
            setHasVoted(false);
          });
      };
      console.log(username);
      const handleCommentSubmit = (article_id, username, commentBody) => {
        postNewComment(article_id, username, commentBody)
        .then(() => {
            setShowCommentForm(false);
            setIsCommentPosted(true);
        })
        .catch((error) => {
            console.error(error);
        });
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
                <button className="comments-btn" disabled={hasVoted === 1} onClick={() => handleVote(1)}>Vote up</button>
                <button className="comments-btn" disabled={hasVoted === -1} onClick={() => handleVote(-1)}>Vote down</button>
                {showComments && <CommentList isCommentPosted={isCommentPosted} article_id={article_id} />}
                <button className="comments-btn" onClick={() => setShowCommentForm(true)}>Have your say</button>
                {showCommentForm && (<NewCommentForm username = {username} onSubmit={(username, commentBody) => handleCommentSubmit(article_id, username, commentBody)} />)}
			</div>
		</div>
	);
}

