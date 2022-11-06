import 'reflect-metadata';
import game, { dispatch, start } from './saga-example/game';

const heading = 'redux-saga-like-runtime';
const headingElement = document.createElement('h1');
headingElement.innerText = heading;
document.body.appendChild(headingElement);

const paragraph = 'Or... I did not know I could write Sagas without Redux!';
const paragraphElement = document.createElement('p');
paragraphElement.innerText = paragraph;
document.body.appendChild(paragraphElement);

(window as any).game = game;
(window as any).start = start;
(window as any).dispatch = dispatch;
