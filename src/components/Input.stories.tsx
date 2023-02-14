import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default { component: Input } as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({})

export const InputError = Template.bind({})
InputError.args = {error: true}

export const Disabled = Template.bind({})
Disabled.args = {disabled: true}

export const HelperText = Template.bind({})
HelperText.args = {helperText: 'Some helper text that it is useful'}

export const SmallSize = Template.bind({})
SmallSize.args = { format: 'sm' }

export const FullWidth = Template.bind({})
FullWidth.args = { fullWidth: true }

export const Multiline = Template.bind({})
Multiline.args = { multiline: true }