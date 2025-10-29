# “DOM Keyboard Reaction Trainer Vanilla JS”

An interactive keyboard training game that tests your reaction speed and key recognition skills. This lightweight browser-based game randomly highlights (jiggles) virtual keyboard keys, prompting you to press the correct one on your physical keyboard — as fast and accurately as possible.

## Project Description
This project simulates a full computer keyboard using HTML, CSS, and JavaScript. One key at a time starts "jiggling" (shaking) visually, and the user's task is to press the correct key on their physical keyboard. Each correct press increases the score and changes the target key. The game includes a timer, visual feedback, and a dynamic score display.

## Key Features:
- Realistic virtual keyboard layout
- Jiggle animation on random keys
- Score counter and 30-second timer
- Visual feedback when keys are pressed
- Highlight warning when time is running out

## What I Learned
While building this project, I learned and practiced:
- DOM manipulation using `querySelector`, `dataset`, and dynamic element creation
- Keyboard event handling with `keyup` listener
- Working with `reduce()` to `map DOM elements` efficiently
- Applying animations via `@keyframes` and toggling CSS classes
- Using `setInterval()` for game timers and updates
- Layout techniques with Flexbox and viewport units (`vh`, `vw`, `dvh`)
- UI feedback techniques such as hover states, active styles, and visual highlights
This project helped reinforce how JavaScript can bring interactivity to static HTML layouts and gave me more confidence working with event-driven logic and visual state changes.

## Gameplay Description
- A random key on the virtual keyboard "jiggles".
- You must press the corresponding **real key** on your physical keyboard.
- If correct, your score increases and the next key starts jiggling.
- The game lasts for 30 seconds.
- Your score is shown at the top, with a countdown timer.
- When time is nearly out (10s), the timer changes color as a warning.

## Game Logic Flow
- Initialization: startGame() sets score/timer and starts the main interval.
- Timer: A countdown loop updates every second using setInterval().
- Key Detection: keyup events are captured on the body.
- Validation: Pressed key is compared with current target (currentKeyJiggle).
- Animation Reset: The jiggle class is removed from the previous key and added to a new one.
- Feedback: Pressed keys briefly highlight with a flash animation (.pressed).

## Technologies Used
- **HTML5** – semantic structure of a QWERTY keyboard layout
- **CSS3** – responsive styling, flexbox layout, animations (`@keyframes`, `:hover`)
- **Vanilla JavaScript** – DOM manipulation, event handling, game logic

## How It Works – Under the Hood
1. 🔑 `data-key + dataset`
Each button on the virtual keyboard uses a data-key attribute matching real key values:
`<button class="key" data-key="A">A</button>`
In JavaScript, this allows mapping like:
`keyButton.dataset.key // → "A"`
Used to associate DOM buttons with real keystrokes.

### Why use `toUpperCase()`?
When a keyboard event like `keyup` is triggered, the value of `e.key` reflects the actual character the user typed — and this is usually lowercase (e.g. `'a'`, `'b'`, `'1'`, etc.).
To match the key against the button’s `data-key` (which stores uppercase values like `'A'`, `'B'`, etc.), we normalize the input with `.toUpperCase()`:
```js
const upperKey = inputKey.toUpperCase();

if (upperKey === currentKeyJiggle) {
  ...
}
This ensures case-insensitive comparison and guarantees consistent matching regardless of whether the user has Caps Lock on or not.
This avoids repeated DOM querying and enables fast updates to visual state `(.pressed, .jiggle)`.

## 📁 Project Structure
├── index.html       → Base layout & virtual keyboard
├── styles.css       → Styles, responsive layout, animations
├── app.js           → Core game logic & interactions
└── demo.gif         → Visual demo of gameplay

# Demo

![DOM Keyboard Reaction Trainer Vanilla JS — Demo](demo/demo.gif)



