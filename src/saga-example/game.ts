import { delay, take } from '../saga/effects';

function* update(event?: any) {
	while (true) {
		const player1FireEvent = yield take("FIRE")(event);
		console.log(
			"Player 1 fired a weapon!",
			"Payload",
			player1FireEvent.payload,
		);
		const player2FireEvent = yield take("FIRE")(event);
		console.log(
			"Player 2 fired a weapon!",
			"Payload",
			player2FireEvent.payload,
		);

		const TIMEOUT = 5000;
		yield delay(TIMEOUT)(game);
		console.log(`${TIMEOUT}ms have passed...`);
	}
}

const game = update();

let hasStarted = false;
export const start = () => {
	if (hasStarted) {
		return;
	}

	hasStarted = true;
	game.next();
};

export const dispatch = (event?: any) => {
	if (!hasStarted) {
		return;
	}

	game.next(event);
};

export default game;
