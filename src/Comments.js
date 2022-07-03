import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([]);

	const addComments = (name,title,text,id,parent_id) => {
		if (name.trim() && title.trim() && text.trim()) { //check if truthy values
			    setComments([...comments, {
				title: title,
				name: name,
				text: text,
				id: id
			}])
			document.getElementById("submit_form").reset();
		} else {
			alert("Please fill in the required fields.")
		}
	}
	return (
		<div>
			<CommentForm /> 
			<div>
				{comments.map(comment => (
					<Comment />
				))}
			</div>
		</div>
	);
}

export default Comments;
