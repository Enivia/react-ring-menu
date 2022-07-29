# react ring menu

简体中文 | [English](./README-en_US.md)

React 环形菜单组件

## 安装

```
yarn add react-ring-menu
```

## 使用

参考 [`./example`](./example/index.tsx) 目录

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

| 属性         | 说明                     | 类型                                                  | 默认值         |
| ------------ | ------------------------ | ----------------------------------------------------- | -------------- |
| items        | 菜单项                   | `MenuItem[]`                                          |                |
| position     | 绝对定位位置             | `Point`                                               | `{x: 0, y: 0}` |
| width        | 菜单宽度                 | `number`                                              | 50             |
| hollowRadius | 菜单内空心圆半径         | `number`                                              | 20             |
| onClick      | 点击 `MenuItem` 时的回调 | `(menu: MenuItem, e: MouseEvent<SVGElement>) => void` |                |

### MenuItem

| 属性     | 说明             | 类型               |
| -------- | ---------------- | ------------------ |
| key      | 菜单项的唯一标识 | `string \| number` |
| title    | 菜单项标题       | `string`           |
| disabled | 是否禁用菜单项   | `boolean`          |
| children | 子菜单           | `MenuItem[]`       |
