import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
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
			<CommentForm addComments = {addComments} /> 
			<div>
				{comments.map(comment => (
					<Comment name={comment.name} text = {comment.text} id = {comment.id}/>
				))}
			</div>
		</div>
	);
}

export default Comments;
