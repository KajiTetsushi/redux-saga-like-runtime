export interface TakeEvent<
	Type extends string = string,
	Payload extends any = any
> {
	type?: Type;
	payload?: Payload;
}

/**
 * Creates a loop that stops only when it receives an event type that
 * matches what has been provided.
 * @param takeEventType The event type specified.
 * @returns An event matching the event type specified.
 * @example
 * function* main(event?: any) {
 * 	const event = yield take('NUKE_LAUNCHED')(event);
 * 	const { payload } = event;
 * 	console.log('Player 1 launched a nuclear payload!', payload);
 * }
 */
export default function take<
	Type extends string = string,
	Payload extends any = any
>(
	takeEventType: Type
) {
	/**
	 * @param event The event passed from the main runtime.
	 */
	function* takeSideEffect(event: TakeEvent<Type, Payload> = {}) {
		let takeEvent: TakeEvent;
		
		// Keep running this loop until the event received matches the
		// event type expected.
		while (true) {
			takeEvent = yield Object.freeze({ ...event });

			if (takeEvent == null) {
				continue;
			}

			const { type } = takeEvent;

			if (type !== takeEventType) {
				continue;
			} else {
				return takeEvent;
			}
		}
	}

	return takeSideEffect;
}
