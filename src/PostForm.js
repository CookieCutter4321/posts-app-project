function PostForm(props) { //props.add(name,title,text)
	const onClick = async () => {
		const n = document.getElementById("name").value;
		const title = document.getElementById("title").value;
		const text = document.getElementById("text").value;
		await props.add(n,title,text, unique_id); //wait until its added

		unique_id = Math.random().toString(16).slice(2) //regenerate ID
	}

	let unique_id = Math.random().toString(16).slice(2) //generate unique ID

	return (
		<form id = "submit_form">
			<input id = {"name"} name='name' type='text' placeholder='Name' />
			<input id = {"title"} name='title' type='text' placeholder='Title' />
			<textarea id = {"text"} name='text' cols='40' rows='10' placeholder='Text'></textarea>
			<button type='button' onClick = {onClick}>Submit</button>
		</form>//pass into onClick the name/title. check if valid (has stuff inn it)
	);
}

export default PostForm;
