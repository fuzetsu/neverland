addEventListener(
  'DOMContentLoaded',
  () => {

    const {
      default: MrSmee,  // alias as you prefer
      html,             // svg too if you need it
      useEffect, useReducer, useRef, useState
    } = neverland;

    const demo = Component => {
      const div = document.body.appendChild(
        document.createElement('div')
      );
      div.appendChild(
        document.createElement('h1')
      ).textContent = Component.name;
      div.appendChild(Component());
    };

    // The most basic Hook: useState
    const Counter = MrSmee(() => {
      const [count, setCount] = useState(0);
      return html`
      <button onclick=${() => setCount(count + 1)}>
        Count: ${count}
      </button>`;
    });

    demo(Counter);


    // The reducer and effect Hook
    const initialState = {count: 0};

    function reducer(state, action) {
      switch (action.type) {
        case 'reset':
          return initialState;
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
      }
    }

    const ReducedCounter = MrSmee(() => {
      const [state, dispatch] = useReducer(reducer, initialState);
      useEffect(() => console.log(state));
      return html`
          Count: ${state.count}
          <button onclick=${() => dispatch({type: 'reset'})}>
            Reset
          </button>
          <button onclick=${() => dispatch({type: 'increment'})}>+</button>
          <button onclick=${() => dispatch({type: 'decrement'})}>-</button>
      `;
    });

    demo(ReducedCounter);


    // The useRef Hook plus hyperHTML goodness via on~dis/connected,
    // making the need to return cleanup functions
    // not better than invoking callbacks when live/offline status changes
    const RefCounter = MrSmee(() => {
      const [count, setCount] = useState(0);
      const {current: increment} = useRef(
        Math.ceil(Math.random() * 5)
      );
      return html`
      <button
        onconnected=${() => console.log(window.log = 'Harrrrrrrr!!')}
        onclick=${() => setCount(count + increment)}
      >
        Count: ${count}
      </button>`;
    });

    demo(RefCounter);

  },
  {once: true}
);