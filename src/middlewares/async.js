export default ({ dispatch }) => next => action => {
	//Does action have promise on payload property.
	if (!action.payload || !action.payload.then) {
		//Forward middleware to next action in chain.
		return next(action);
	}

	action.payload.then(function(response) {
		//Create new action.
		//Overwrite payload.
		//Dispatch action through all middleware.
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
