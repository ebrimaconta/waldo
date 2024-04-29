# fed-tech-test

## Description

It's important for us that successful candidate can start work with minimal onboarding. For this reason, the technical test will be based on our existing codebase. In this repository is a sub-section of our frontend application, with some minor edits to facilitate the test. This is a working implementation and can be run straightaway:

1. Clone the repository to your local machine
2. Navigate to the root directory
3. Install the dependencies with `npm i`
4. Run the application with `npm run dev`

What you should see is small section of a PDP. This has been built with the elements you'll find in the `./src/layouts` and `./src/components` directories. There is some pre-written interactivity for the quantity buttons, which uses the contexts provided by Redux Toolkit, located in the `./contexts` and `./state`, but this has been left unfinished intentionally. The server is a mock Axios implementation.

The task for this test is to style this section inline with this [Figma](https://www.figma.com/file/9KMh7XAIvgYuYfodam1jFy/Technical-Test?type=design&node-id=2%3A253&mode=design&t=xtFxGYtJLurJfV6G-1) *(please let us know if you have any trouble accessing the Figma)*, and to add the product to the cart when the quantity buttons are pressed, using the basket effect in the `./hooks` directory.

The styling has been implemented with a the [styled-system](https://www.npmjs.com/package/styled-system) library, so it may be worth familiarising yourself with this before you start.

Please commit your work to a new a branch of this repository. When you're happy, push it up and raise a pull request how you normally would.

## Acceptance criteria

- [ ] Style the elements inline with the Figma
- [ ] Add product to cart when user interacts with quantity buttons
- [ ] Work submitted via pull request

Any question, please reach out to me via email: david@hiwaldo.com
