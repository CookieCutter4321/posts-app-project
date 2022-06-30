import Comments from './Comments';

function Post(props) {
	return (
		<div>
			<h4>{props.title}</h4>
			<h3>{props.name}</h3>
			<p>{props.text}</p>
			<Comments />
		</div>
	);
}

export default Post;
