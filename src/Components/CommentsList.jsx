import DisplayComment from "./DisplayComment";

import { useSearchParams } from "react-router-dom";

const CommentList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="body-container">
			<DisplayComment searchParams={searchParams} />
		</div>
	);
};

export default CommentList;