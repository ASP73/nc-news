import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "./api";
import CommentCard from "./CommentCard";

const DisplayComment = ({ article_id, isCommentPosted }) => {
	const [allComments, setAllComments] = useState([]);

	const [isError, setIsError] = useState(false);
	useEffect(() => {
		setIsError(false);
		getCommentsByArticleId (article_id)
			.then(({ data }) => {
				let CommentsDisplayed = data.comments;
				setAllComments(CommentsDisplayed);
			})
			.catch(() => {
				setIsError(true);
			});
	}, [article_id, isCommentPosted]);
	if (allComments.length < 1) {
		return (
			<>
				<h2>There are no comments for this article</h2>

			</>
		);
	} else {
		return (
			<div className="comment-container">
				{allComments.map((comment) => {
					return <CommentCard key={comment.comment_id} comment={comment} />;
				})}
			</div>
		);
	}
};

export default DisplayComment;