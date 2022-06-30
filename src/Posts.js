import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

function Posts() {
	const [posts, setPosts] = useState([
		{
			title: "Example title",
			name: "Example name",
			text: "Example text"
		}
	]);

	const addPost = (name, title, text) => {
		if (name.trim().isEmpty() || title.trim().isEmpty() || text.trim().isEmpty()) {
			alert('invalid');
		} else {
			setPosts([...posts, ])
		}
	}

	return (
		<div>
			<PostForm />
			<div>
				{posts.map(post => (
					<Post title = {post.title} name = {post.name} text = {post.text}/>
				))}
			</div>
		</div>
	);
}

export default Posts;
