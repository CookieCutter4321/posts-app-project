import Comments from './Comments';

function Post(props) {
	return (
		<div>
			<section class = "post" id = {props.id}>
			    <h6>Posted by {props.name}</h6>
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</section>
			<Comments />
		</div>
	);
}
export default Post;
