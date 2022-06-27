import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RingMenu from '../.';
import { MenuItem } from '../dist/interface';

const items: MenuItem[] = [
  { key: '1', title: 'item 1' },
  { key: '2', title: 'item 2' },
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
    <div>
      <RingMenu items={items} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
