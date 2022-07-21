import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RingMenu from '../.';
import { MenuItem } from '../dist/interface';
import '../dist/index.css';

const items: MenuItem[] = [
  {
    key: '1',
    title: '1',
    disabled: true,
    children: [{ key: '1-1', title: '1-1' }],
  },
  {
    key: '2',
    title: '2',
    children: [
      {
        key: '2-1',
        title: '2-1',
        children: [{ key: '2-1-1', title: '2-1-1' }],
      },
    ],
  },
  {
    key: '3',
    title: '3',
    children: [
      { key: '3-1', title: '3-1' },
      {
        key: '3-2',
        title: '3-2',
        children: [{ key: '3-1-1', title: '3-1-1' }],
      },
    ],
  },
];

const App = () => {
  return (
    <div
      style={{ height: 600, border: '1px solid', position: 'relative', backgroundColor: '#f1f2f3' }}
    >
      <RingMenu items={items} position={{ x: 200, y: 200 }} onClick={item => console.log(item)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
