import PostForm from './PostForm';
import Post from './Post';

function Posts({posts, addPost}) {

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
