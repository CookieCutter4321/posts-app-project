import Posts from './Posts';
import { useState } from 'react';

function App() {
	const [posts, setPosts] = useState([
		{
			title: "Example title1",
			name: "Example name1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat accumsan nibh, nec lacinia lectus sodales sed. Suspendisse fermentum, quam sit amet ornare maximus, mi magna interdum massa, id facilisis nisi ligula tincidunt magna. Nullam at ultrices tellus. Etiam id commodo odio, a commodo orci. Curabitur in accumsan tortor. Praesent ut arcu sit amet mauris suscipit dictum. Mauris egestas metus quis orci semper, sed mollis nunc eleifend."
		},
		{
			title: "Example title2",
			name: "Example name2",
			text: "Morbi condimentum consequat odio, vel vehicula nisi ultrices in. Mauris aliquam, est ac cursus placerat, nibh erat rhoncus ligula, non scelerisque purus mi ut ex. Nam dignissim dapibus dictum. Fusce pharetra nisl id mauris malesuada pharetra. Vivamus vitae tempus enim. In ut venenatis justo. Nulla id justo id est tristique feugiat. Sed iaculis, enim nec porttitor pretium, dolor neque tempus nulla, id scelerisque nunc purus tempus nibh. Curabitur turpis velit, aliquet sed dolor ac, interdum ultrices elit. Nulla consequat, velit at ultricies viverra, lacus est feugiat velit, et ultrices diam arcu sit amet sapien. Curabitur cursus consequat orci, id molestie dolor."
		}
	]);

	const addPost = (name, title, text) => {

		console.log(name, title, text);
		/*
		if (name.trim().isEmpty() || title.trim().isEmpty() || text.trim().isEmpty()) {
			alert('invalid');
		} else {
			setPosts([...posts, {
				title: title,
				name: name,
				text: text
			}])
		}*/
	}
	return (
		<div className='App'>
			<Posts 
			posts = {posts} 
			addPost = {addPost}/>
		</div>
	);
}

export default App;
