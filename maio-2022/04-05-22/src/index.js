import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Not using JSX, only JS.
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, { toWhat: 'World' }, null));



// Using JSX 

// class Hello extends React.Component {
//   render() {
//     return <div>Hello {this.props.toWhat}</div>;
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Hello toWhat="World" />);