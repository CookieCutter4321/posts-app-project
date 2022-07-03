import PostForm from './PostForm';
import Post from './Post';

function Posts({posts, addPost}) {

	return (
		<div>
			<PostForm add = {addPost}/>
			<div>
				{posts.map(post => (
					<Post title = {post.title} name = {post.name} text = {post.text} id = {post.id}/>
				))}
			</div>
		</div>
	);
}

export default Posts;
