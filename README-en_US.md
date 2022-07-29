# react ring menu

[简体中文](./README.md) | English

React ring menu component.

## Installation

```
yarn add react-ring-menu
```

## Usage

Look it in folder [`./example`](./example/index.tsx)

```tsx
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
    children: [{ key: '2-1', title: '2-1' }],
  },
];

const Container = () => {
  return (
    <div style={{ position: 'relative' }}>
      <RingMenu items={items} position={{ x: 200, y: 200 }} />
    </div>
  );
};
```

## API

### Props

| Property     | Description                        | Type                                                  | Default value  |
| ------------ | ---------------------------------- | ----------------------------------------------------- | -------------- |
| items        | menu items                         | `MenuItem[]`                                          |                |
| position     | absolute position                  | `Point`                                               | `{x: 0, y: 0}` |
| width        | ring width                         | `number`                                              | 50             |
| hollowRadius | inner hollow circle radius         | `number`                                              | 20             |
| onClick      | called when a menu item is clicked | `(menu: MenuItem, e: MouseEvent<SVGElement>) => void` |                |

### MenuItem

| Property | Description                      | Type               |
| -------- | -------------------------------- | ------------------ |
| key      | unique key of the menu item      | `string \| number` |
| title    | display title for collapsed item | `string`           |
| disabled | whether menu item is disabled    | `boolean`          |
| children | sub menus                        | `MenuItem[]`       |
