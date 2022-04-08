export default function reducer(state = [], action) {
	if (action.type === "ADD_BUG") {
		return [
			...state,
			{
				id: action.payload.id,
				description: action.payload.description,
				resolved: false,
			},
		];
	} else if (action.type === "REMOVE_BUG") {
		return state.filter((bug) => bug.id !== action.payload.id);
	} else {
		return state;
	}
}
