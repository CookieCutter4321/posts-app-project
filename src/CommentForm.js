function CommentForm(props) {

	const onClick = async () => {
		const n = document.getElementById("name"+unique_form_id).value;
		const text = document.getElementById("text"+unique_form_id).value;
		await props.addComments(n,text, unique_id,unique_form_id); //wait until its added

		unique_id = Math.random().toString(16).slice(2) //regenerate ID
	}

	const unique_form_id = Math.random().toString(16).slice(2) //generate unique ID
	let unique_id = Math.random().toString(16).slice(2) //generate unique ID for comment

	return (
		<form class = "comment_form" id = {unique_form_id}>
			<input id = {"name" + unique_form_id} name='name' type='text' placeholder='Name' />
			<textarea id = {"text" + unique_form_id} name='text' cols='30' rows='10' placeholder='Text'></textarea>
			<button id = {"submit" + unique_form_id} type='button' onClick = {onClick}>Submit</button>
		</form>
	);
}

export default CommentForm;
