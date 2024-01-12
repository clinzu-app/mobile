import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');



const sizes: any = {
    "w_screen": {
        "width": width
    },
    "h_screen": {
        "height": height
    },
    "rounded_full": {
        "borderRadius": 999
    },
    "rounded_t_full": {
        "borderTopRadius": 999
    },
    "rounded_b_full": {
        "borderBottomRadius": 999
    },
    "rounded_l_full": {
        "borderLeftRadius": 999
    },
    "rounded_r_full": {
        "borderRightRadius": 999
    },
};

// 411.43 designer screen width (pixel 7 pro)
// 867.43 designer screen height (pixel 7 pro)

const defaultValues: any = {};

const percentageValues: any = {
    // 'xs': '2%',
    // 'sm': '5%',
    // 'md': '8%',
    'lg': '10%',
    // '1/5': '20%',
    // '1/4': '25%',
    // '1/3': '33.33%',
    // '1/2': '50%',
    // '3/4': '75%',
    // '4/5': '80%',
    // 'xl': '90%',
    // '2xl': '95%',
    // 'full': '100%',
};

const remFactor = 1;
const rem = (width / 411.43) * remFactor;

for (let i = 0; i <= 100; i++) {
    // defaultValues[i] = i * rem;
    // defaultValues[`${i}%`] = `${i}%`;
    // defaultValues[`${i}w`] = i * width / 100;
    // defaultValues[`${i}h`] = i * height / 100;
}

const values: any = {
    // 'vw': width,
    // 'vh': height,
    ...defaultValues,
    ...percentageValues,
};

const properties: any = {
    'top': 'top',
    'bottom': 'bottom',
    'left': 'left',
    'right': 'right',
    'w': 'width',
    'h': 'height',
    'min_w': 'minWidth',
    'max_w': 'maxWidth',
    'min_h': 'minHeight',
    'max_h': 'maxHeight',
    'gap': 'gap',
    'gap_x': 'rowGap',
    'gap_y': 'columnGap',
    'p': 'padding',
    'px': 'paddingHorizontal',
    'py': 'paddingVertical',
    'pt': 'paddingTop',
    'pb': 'paddingBottom',
    'pr': 'paddingRight',
    'pl': 'paddingLeft',
    'm': 'margin',
    'mx': 'marginHorizontal',
    'my': 'marginVertical',
    'mt': 'marginTop',
    'mb': 'marginBottom',
    'mr': 'marginRight',
    'ml': 'marginLeft',
    'basis': 'flex-basis',
    'border': 'borderWidth',
    'border-t': 'borderTopWidth',
    'border-l': 'borderLeftWidth',
    'border-r': 'borderRightWidth',
    'border-b': 'borderBottomWidth',
    'rounded': 'borderRadius',
    'rounded_t': 'borderTopRadius',
    'rounded_l': 'borderLeftRadius',
    'rounded_r': 'borderRightRadius',
    'rounded_b': 'borderBottomRadius'
};

Object.keys(properties).forEach((property) => {
    Object.keys(values).forEach((value) => {
        if (generateClass(property, values[value])) {
            sizes[`${property}_${value}`] = {
                [properties[property]]: values[value],
            };
            sizes[`_${property}_${value}`] = {
                [properties[property]]: typeof values[value] === 'number' ? -values[value] : `-${values[value]}`,
            };
        }
    });
});

function generateClass(property: any, value: any) {
    if (property.includes('rounded') && typeof value === 'string') {
        return false;
    }
    return true;
};

export {
    width,
    height,
    sizes
};
