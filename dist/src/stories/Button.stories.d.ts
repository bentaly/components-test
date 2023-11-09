import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ children, ...props }: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
