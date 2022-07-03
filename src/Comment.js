import Comments from './Comments';

function Comment(props) {
	return (
		<div>
			<section class = "comment" id = {props.id}>
			    <h6>Posted by {props.name}</h6>
				<p>{props.text}</p>
			</section>

			<Comments />
		</div>
	);
}

export default Comment;
