function PostForm() {

	return (
		<form>
			<input name='name' type='text' placeholder='Name' />
			<input name='title' type='text' placeholder='Title' />
			<textarea name='text' cols='40' rows='10' placeholder='Text'></textarea>
			<button type='button'>Submit</button>
		</form>//pass into onClick the name/title. check if valid (has stuff inn it)
	);
}

export default PostForm;
