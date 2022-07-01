function PostForm() {
	const onClick = () => {
		console.log("Clicked!")
	}
	const unique_id = Math.random().toString(16).slice(2) //generate unique ID

	return (
		<form>
			<input id = {"name_" + unique_id} name='name' type='text' placeholder='Name' />
			<input id = {"title" + unique_id} name='title' type='text' placeholder='Title' />
			<textarea id = {"text" + unique_id} name='text' cols='40' rows='10' placeholder='Text'></textarea>
			<button type='button' onClick = {onClick}>Submit</button>
		</form>//pass into onClick the name/title. check if valid (has stuff inn it)
	);
}

export default PostForm;
