import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './Profile1';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div className="foo">
//                 <h1>hello react!</h1>
//             </div>
//         );
//     }
// }
// 优化后代码
// function App() {
//   return (
//     <div className="foo">
//       <h1>hello react!222</h1>
//     </div>
//   );
// }
const app = document.createElement('div');
document.body.appendChild(app);
const props = {
  name: 'test',
  age: 18
};

ReactDOM.render(<Profile {...props} />, app);
