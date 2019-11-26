# Data Fetching & Other Side Effects

## Today's Menu
- useState Hook
- Controlled Inputs
- Rules of Hooks
- Dependency array
- useEffect Hook
- One more rule
- Cleanup


## useState Hook

Introduced recently in React, the useState hook allows us to:
- Use state in functional components
- Values are stored in the state between renders (function calls)
- Optionally, it can trigger a re-render when the state changes

It's important to remember that the useState hook takes in a single argument: the initial value for the state and that it returns an array of two elements, the first element being the state and the second element being a function to update that state.

`[value, updateFunction] = useState(initialValue);`

#### Demo

A small demonstration of the useState hook is available in the usetate_demo folder.

## Rules of Hooks

Rule #1
Don't call Hooks inside loops, conditions, or nested functions.

Rule #2
Only call Hooks from the top-level of a function component or a custom Hook.

## Side Effects

- To reduce bugs, we need to _limit the side effects_ in our program

- a secondary effect (an interaction with the outside of the function) when running a function

  - Setting timers or intervals
  - Modifying DOM elements not controlled by React
  - A network request
  - Connection to a socket server
  - Adding and removing event listeners
  - Logging to the console

```js
const addTodo = todo => todos.push(todo);

const getTweets = () => fetch('/tweets/).then(res => res.json())

const reset = (element) => element.value = '';
```

- Side Effects are generally undesirable because they can introduce a lot of bugs

### useEffect

- React encapsulates side effects with `useEffect`

- 3 potential actions

  - add a side effect
  - reinvoking the side effect (or not)
  - clean up the side effect

- Add a Side Effect

  - by default react reinvoke the effect _after each render_ [useEffect Sequence](./use_effect.png)

* The fact that the effect re-execute after each render might cause an _infinite loop_

* We can stop the invokation of the effect with a second parameter: an array of values

* To _execute the effect only once_, we need to use `[]`

```js
useEffect(() => {
  console.log(
    'The effects re-execute after every render => no second parameter'
  );
});

//
useEffect(() => {
  console.log('Because the second parameter is [], the effect runs only once');
}, []);

// The effect depends on an outside value (someValue)
// The effect gets re-executed only if someValue has changed
useEffect(() => {
  console.log('The effect depends on an outside value');
}, [someValue]);
```

- [useEffect - Tweeter Character Count](https://codesandbox.io/s/useeffect-tweeter-character-count-uj3n3)

- [useEffect API Request](https://codesandbox.io/s/useeffect-api-request-xbmwg)


## Rules of Hooks (extra rule!)

Rule #3
The effect method that we pass to useEffect must either return undefined or a function.
The easiest way to avoid issues with this rule is always to declare your effect as a multiline function.

#### Clean Up

- optionally, useEffect can return a cleanup function. The cleanup fonction will execute right before the next effect execution or unmounting of the component. We may need a clean up function for the following among others:

- [removing eventListener](https://codesandbox.io/s/unruffled-austin-ytggf)
- removing a subscription (WebSocket)