# Gamepoints

## How to run

To run this project locally all you need is to do:

```shell
yarn                // install packages
yarn start          // run project
```

or use `npm` if that's your preferred package manager.

## Available scripts

```shell
yarn lint           // lints the project
yarn pretty         // run prettier on all files
yarn types:check    // check for typescript errors
```

## A few words about the solution

My main focus with this case is to showcase a working solution with a minimalistic design. I have focused on separation of concerns, and creating a project structure that makes sense. Besides setting up a proper structure I wanted to use as few external dependencies as possible. My gut feeling told me when reading the case description that it was possible to create this with very few external dependencies. That is the reason I went with the new `useReducer` hook and `Context` to handle the game state. I felt no need for using `redux` with middleware. Only when considering a more complex game with a lot of state changes there would have been added such dependencies.

I also decided not to add a router to this single page application.

Whereas styling is considered I went with `styled-components`. The reason being having _style-in-js_ makes it easier to handle style changes based on state changes. I also tried to use variables to limit the number of _magic-numbers_ and variables used.

Lastly I went with `typescript` to ensure stronger typing and improved developer experience.

## Some remarks

Due to limited time this project does _not_ include everything I normally would have added.

These are some of the features I have omitted or put less thought into:

- Tests
  - Normally I would have added unit testing with Jest and integration testing with Cypress.
- Production bundling
  - A webpack production config optimized with code splitting and other optimilizations have not been added
- Git hooks
  - I would normally have set up `husky` and `lint-staged` to ensure that all files commited to the repo were free of lint errors and properly styled with `prettier`.
- Responsiveness
  - The solution does not look great on smaller displays
