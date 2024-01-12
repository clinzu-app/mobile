const colorsList: any = {
    'slate': {
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
    },
    'red': {
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
};

const colorStyles: any = {};
Object.keys(colorsList).forEach((color) => {
    Object.keys(colorsList[color]).forEach((shade) => {
        colorStyles[`text_${color}_${shade}`] = {
            color: colorsList[color][shade],
        };
        colorStyles[`bg_${color}_${shade}`] = {
            backgroundColor: colorsList[color][shade],
        };
        colorStyles[`border_${color}_${shade}`] = {
            borderColor: colorsList[color][shade],
        };
        colorStyles[`shadow_${color}_${shade}`] = {
            shadowColor: colorsList[color][shade],
        };
    });
});

export { colorStyles };
