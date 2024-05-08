import { Link } from "react-router-dom";
const ArticleCard = ({ article }) => {
	const { article_id, title, topic, article_img_url } = article;
	return (
		<Link to={`/articles/${article_id}`} params={article_id}>
			<div className="article-card">
				<img className="article-img" src={article_img_url} alt={`image of ${title}`} />
				<div className="article-info-text">
					<p>{title}</p>
					<p>Topic: {topic}</p>
				</div>
			</div>
		</Link>
	);
};

export default ArticleCard;
