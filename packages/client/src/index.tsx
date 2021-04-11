import * as React from "react";
import ReactDOM from "react-dom";

import CatImage from './assets/cat.jpg';
import './index.scss';

const App = () => {
  return (
    <div>
        <div>Welcome to my-webpack-react-starter</div>
        <img src={CatImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));