import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments({depth}) {
	const [comments, setComments] = useState([]); // MUST be empty or else infinite recursion will occur.

	const addComments = (name,text,id,post_id) => {
		if (name.trim() && text.trim()) { //check if truthy values
			    setComments([...comments, {
				name: name,
				text: text,
				id: id
			}])
			document.getElementById(post_id).reset();
		} else {
			alert("Please fill in the required fields.")
		}
	}

	return (
		<div>
			<CommentForm addComments = {addComments} depth = {depth}/> 
			<div>
				{comments.map(comment => (
					<Comment {...comment} depth = {depth}/>
				))}
			</div>
		</div>
	);
}

Comments.defaultProps = {
	depth: 1,
}

export default Comments;
