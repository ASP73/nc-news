import DisplayArticle from "./DisplayArticle";

import { useSearchParams } from "react-router-dom";

const ArticleList = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<div className="body-container">
			{/* <Filter searchParams={searchParams} setSearchParams={setSearchParams} /> */}

			<DisplayArticle searchParams={searchParams} />
		</div>
	);
};

export default ArticleList;
