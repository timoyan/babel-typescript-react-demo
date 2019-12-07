import { addParameters, configure } from '@storybook/react';

addParameters({
    options: {
        name: 'Functional component with hook',
        isFullscreen: false,
        showPanel: true,
        // more configuration here
    },
});

configure(require.context('../stories', true, /\.stories\.tsx$/, 'sync'), module);
