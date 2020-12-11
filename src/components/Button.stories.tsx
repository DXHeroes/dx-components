import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default {
  title: 'DX/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Primary: React.VFC = () => <Button type="primary">Primary Button</Button>;

export const Default: React.VFC = () => <Button>Default Button</Button>;

export const Dashed: React.VFC = () => <Button type="dashed">Dashed Button</Button>;

export const Text: React.VFC = () => <Button type="text">Text Button</Button>;

export const Link: React.VFC = () => <Button type="link">Link Button</Button>;

export const PrimaryDanger: React.VFC = () => <Button type="primary" danger>PrimaryDanger Button</Button>;

export const Danger: React.VFC = () => <Button danger>Danger Button</Button>;

// const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   typpe: "primary",
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
