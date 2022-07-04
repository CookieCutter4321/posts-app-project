import Posts from './Posts';
import { useState } from 'react';

function App() {
	const [posts, setPosts] = useState([
		{
			title: "Example title1",
			name: "Example name1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat accumsan nibh, nec lacinia lectus sodales sed. Suspendisse fermentum, quam sit amet ornare maximus, mi magna interdum massa, id facilisis nisi ligula tincidunt magna. Nullam at ultrices tellus. Etiam id commodo odio, a commodo orci. Curabitur in accumsan tortor. Praesent ut arcu sit amet mauris suscipit dictum. Mauris egestas metus quis orci semper, sed mollis nunc eleifend.",
			id: "123456"
		}
	]);

	const addPost = async (name, title, text, id) => {

		if (name.trim() && title.trim() && text.trim()) { //check if truthy values
			await setPosts([...posts, {
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
		<div className='App'>
			<h1 id = "title">Example Posts App</h1>
			<Posts 
			posts = {posts} 
			addPost = {addPost}/>
		</div>
	);
}

export default App;
