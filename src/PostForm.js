function PostForm(props) { //props.add(name,title,text)
	const onClick = async () => {
		const n = document.getElementById("postName").value;
		const title = document.getElementById("postTitle").value;
		const text = document.getElementById("postText").value;
		await props.add(n,title,text, unique_id); //wait until its added

		unique_id = Math.random().toString(16).slice(2) //regenerate ID
	}

	let unique_id = Math.random().toString(16).slice(2) //generate unique ID

	return (
		<form id = "submit_form">
			<input id = {"postName"} name='name' type='text' placeholder='Name' />
			<input id = {"postTitle"} name='title' type='text' placeholder='Title' />
			<textarea id = {"postText"} name='text' cols='40' rows='10' placeholder='Text'></textarea>
			<button type='button' onClick = {onClick}>Submit</button>
		</form>//pass into onClick the name/title. check if valid (has stuff inn it)
	);
}

export default PostForm;
