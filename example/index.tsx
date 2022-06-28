import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RingMenu from '../.';
import { MenuItem } from '../dist/interface';
import '../dist/index.css';

const items: MenuItem[] = [
  { key: '1', title: 'item 1' },
  {
    key: '2',
    title: 'item 2',
    children: [{ key: '2-1', title: 'item 2-1' }],
  },
  {
    key: '3',
    title: 'item 3',
    children: [
      { key: '3-1', title: 'item 3-1' },
      { key: '3-2', title: 'item 3-2' },
    ],
  },
];

const App = () => {
  return (
    <div style={{ height: 600, border: '1px solid', position: 'relative' }}>
      <RingMenu items={items} position={{ x: 200, y: 200 }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
