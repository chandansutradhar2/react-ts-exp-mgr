export const Child2 = (props: any) => {
	console.log("Child2 rendered");
	return (
		<>
			<h3>Child 2 Component</h3>
			<p>{props.username}</p>
		</>
	);
};
