import { useState, useEffect } from "react";
import { getArticles } from "./api";
import ArticleCard from "./ArticleCard";

const DisplayArticle = ({ searchParams }) => {
	const [allArticles, setAllArticles] = useState([]);
	const [isError, setIsError] = useState(false);
	useEffect(() => {
		setIsError(false);
		getArticles(searchParams)
			.then(({ data }) => {
				let articlesDisplayed = data.articles;
				setAllArticles(articlesDisplayed);
			})
			.catch(() => {
				setIsError(true);
			});
	}, [searchParams]);
	if (isError) {
		return (
			<>
				<h2>There are no articles under this topic</h2>

			</>
		);
	} else {
		return (
			<div className="article-container">
				{allArticles.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</div>
		);
	}
};

export default DisplayArticle;
