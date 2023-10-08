### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
- Frontend framework build by Javascript making it easier to make reusable components. 

- What is Babel?
- Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the newest features of the language.Javascript compiler.

- What is JSX?
- JSX is like HTML embedded in Javascript. Uses Babel to to transpile JSX into 'legal' Javascript.
- JSX is a JavaScript extension that allows creation of DOM trees using an XML-like syntax. Initially created by facebook for use with React, JSX has been adopted by multiple web frameworks.

- How is a Component created in React?
- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. It is created by exporting the component and defining the function. Each react component goes in a seperate file. Skeleton assumes top object is App in App.js

- What are some difference between state and props?
- Properties are immutable and are for configuring your component, they're reusable. Props are data passed to a component or found via defaults. State is data specific to a component.

- What does "downward data flow" refer to in React?
- React follows downward data flow to make sure  the parent structure doesn't get affected by modifications in its child structure. When a developer makes changes in an object, they only need to modify its states and make proper amendments. This way only a specific component will be updated.

- What is a controlled component?
- Components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. 
  
- What is an uncontrolled component?
Uncontrolled components refer to components that manage their own state internally.

- What is the purpose of the `key` prop when rendering a list of components?
-They help React Identify which items are changed, added or removed. They should be given to repeated elemes to provide a stable identity. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? Pushing inside of the state setter, React will only see a reference to the same array in memory. 

- Describe useEffect.  What use cases is it used for in React components?
- The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. 
  
- What does useRef do?  Does a change to a ref value cause a rerender of a component? The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated.
  
- When would you use a ref? When wouldn't you use one?
  - When you need to store a value that does not trigger a re-render when it is updated.
  - When you need to store a value that is not used in the render method.
  - When you need to store a value that persists for the lifetime of the component.

- What is a custom hook in React? When would you want to write one?
A JavaScript function whose name starts with ”use” and that may call other Hooks. If there code in a component that would make sense to extract, either for reuse elsewhere or to keep the component simpler,it can be pulled out into a function.