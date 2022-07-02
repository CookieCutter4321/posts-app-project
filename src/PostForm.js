function PostForm(props) { //props.add(name,title,text)
	const onClick = () => {
		const n = document.getElementById("name_"+unique_id).value;
		const title = document.getElementById("title"+unique_id).value;
		const text = document.getElementById("text"+unique_id).value;
		props.add(n,title,text); //wait until its added
	}

	const unique_id = Math.random().toString(16).slice(2) //generate unique ID

	return (
		<form id = "submit_form">
			<input id = {"name_" + unique_id} name='name' type='text' placeholder='Name' />
			<input id = {"title" + unique_id} name='title' type='text' placeholder='Title' />
			<textarea id = {"text" + unique_id} name='text' cols='40' rows='10' placeholder='Text'></textarea>
			<button type='button' onClick = {onClick}>Submit</button>
		</form>//pass into onClick the name/title. check if valid (has stuff inn it)
	);
}

export default PostForm;
