import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Roasters London</h1>
        <h2>Discover Coffee Roasters in London. Find coffee that suits your palate or experiment with new flavours.</h2>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
