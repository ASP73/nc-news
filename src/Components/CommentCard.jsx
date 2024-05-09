import { Link } from "react-router-dom";
const CommentCard = ({ comment }) => {
	const { article_id, author, body, } = comment;
	return (
		<Link to={`/articles/${article_id}/comments`} params={article_id}>
			<div className="comment-card">
				<div className="comment">
					<h4>{author}</h4>
					<p>{body}</p>
				</div>
			</div>
		</Link>
	);
};

export default CommentCard;