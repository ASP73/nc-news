import DisplayComment from "./DisplayComment";

import { useSearchParams, useParams } from "react-router-dom";

const CommentList = ({article_id, isCommentPosted}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="body-container">
			<DisplayComment isCommentPosted={isCommentPosted} article_id={article_id} />
		</div>
	);
};

export default CommentList;