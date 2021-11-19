# Coin Flipper

This exercise is designed to do "reps" with these parent child component pairs. Separating the state with the simple display logic, and keeping the state as lite as possible.

## Complete: Takeaways

### Centralized State in Parent

* `Coinflip` initializes and maintains the game state.

* Elegant use of Ternary Operator logic to smooth out some long if statements (I left old logic in comments to compare)

### Boolean Shortcut Child Display Logic

* Uses a boolean shortcut to decide whether to render the `Coin` or not, and also sends in props which in this case is an object containing what `Coin` needs to display the correct coin-toss result image.

* Updating `alt` of `img` for accessibility.



> This example is another small app but a great practice in planning out the state and the properties ahead of time. I went through a few ideas before I really came together on how I wanted to pass the data downward to the display component.

## Final Thoughts

I have had a blast so far with React. I watched a few more videos about Next.js and have a continued motivation to shoot for the stars in web development.

<img src="https://i.imgur.com/6FnXqy3.png">

# Original Post

## Requirements

Click a button to flip a coin. Every time the button is pressed, the coin flips. App should keep track of how many times heads and tailes have shown.

Needs to have two separate components than App.
