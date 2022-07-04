import Comments from './Comments';

function Comment(props) {

	<style> 
	</style>

	return (
		<div>
			<section class = "comment" 
			         id = {props.id}
					 style={{
						 marginLeft: props.depth*5 + "%"
					 }}>
			    <h6>Posted by {props.name}</h6>
				<p>{props.text}</p>
			</section>

			<Comments depth = {props.depth+1}/>
		</div>
	);
}

export default Comment;
