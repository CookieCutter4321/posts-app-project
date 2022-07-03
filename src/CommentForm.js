function CommentForm(props) {

	/*
	const onClick = async () => {
		const n = document.getElementById("name").value;
		const title = document.getElementById("title").value;
		const text = document.getElementById("text").value;
		await props.add(n,title,text, unique_id); //wait until its added

		unique_id = Math.random().toString(16).slice(2) //regenerate ID
	}*/

	const unique_form_id = Math.random().toString(16).slice(2) //generate unique ID
	let unique_id = Math.random().toString(16).slice(2) //generate unique ID for comment

	return (
		<form id = {unique_form_id}>
			<input name='name' type='text' placeholder='Name' />
			<textarea name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button type='button'>Submit</button>
		</form>
	);
}

export default CommentForm;
