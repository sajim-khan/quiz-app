import React from "react";
import "./QuestionAndAns.css";

const QuestionAndAns = () => {
  return (
    <div className="container mt-5 ">
      <div>
        <h1 className="mb-5 text-center">Question and Answer Section</h1>
        <div className="single">
          <h3>Q-1. What is the difference between props and state?</h3>
          <p>
            <span className="fw-bold">Ans:</span> Props and State are used to
            manage the data of a component. Props is unidirectional because
            props can pass data from parent component to child component only
            .It can not reverse. Props are immutable and read-only, which means
            component cannot modify its props. <br />
            State is internal to a component. State is mutable because it can be
            changed by the component itself. State is useful for managing user
            interactions and component state.
          </p>
        </div>
        <div className="single">
          <h3>Q-2. How does React works?</h3>
          <p>
            <span className="fw-bold">Ans:</span> React internally maintain a
            DOM. When something was change or modify in component then react
            will compare the real DOM with the changes DOM and see via diff
            algorithm where should be changed and if minimum changes is needd
            then react will change the minimum change in the actual dom.
          </p>
        </div>
        <div className="single">
          <h3>Q-3. what does useEffect() do without data load?</h3>
          <p>
            <span className="fw-bold">Ans:</span> useEffect() is used to manage
            side effects in functional components. useEffect will perform in a
            declarative way. useEffect() hook is used without any dependencies.
            That means it will be called on every render of the component, even
            if there is no data to load.
          </p>
        </div>
        <div className="single">
          <h3>Q-4. How does useState works?</h3>
          <p>
            <span className="fw-bold">Ans:</span> The useState hook in React is
            used to manage state in functional components. 
            <br /> At first declare state where useState hook takes an initial
            value for the state variable as an argument and returns an array
            with two elements: the current value of the state variable and a
            function to update that <br />
            Update state:This function takes a new value for the state variable
            as an argument and updates the state. <br />
            Access state: You can access the current value of the state variable
            in your component's JSX by using curly braces {} and the name of the
            variable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionAndAns;
