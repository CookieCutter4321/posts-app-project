import { useState } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment.js';

function Comments() {
	const [comments, setComments] = useState([
		{
			/*
			title: "Example title1",
			name: "Example name1",
			text: "Example text"
			id: "123456"*/
		}

	]);

	const addComments = (name,title,text,id, post_id) => {
		if (name.trim() && title.trim() && text.trim()) { //check if truthy values
			    setComments([...comments, {
				title: title,
				name: name,
				text: text,
				id: id
			}])
			document.getElementById("post_id").reset();
		} else {
			alert("Please fill in the required fields.")
		}
	}
	return (
		<div>
			<CommentForm addComments = {addComments}/> 
			<div>
				{comments.map(comment => (
					<Comment />
				))}
			</div>
		</div>
	);
}

export default Comments;
