import Comments from './Comments';

function Post(props) {
	return (
		<div>
			<section class = "post">
			    <h6>Posted by {props.name}</h6>
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</section>
		</div>
	);
}
/* <Comments />*/
export default Post;
