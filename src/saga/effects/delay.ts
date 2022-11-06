/**
 * Creates a timeout that pauses subsequent executions until the
 * timeout completes.
 * @param timeout How long the pause will last.
 * @example
 * function* main() {
 * 	yield delay(5000)(mainGenerator);
 * 	console.log('Five seconds have passed...');
 * }
 *
 * const mainGenerator = main();
 */
export default function delay(timeout: number) {
	/**
	 * @param generator The runtime that will be used to iterate to the next step.
	 */
	return function delayEffect(generator: Generator) {
		setTimeout(() => {
			generator.next();
		}, timeout);
	}
}
