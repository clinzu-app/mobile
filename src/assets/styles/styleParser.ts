import { styleGenerator } from "./styleGenerator";
import { width } from "./dimensions";
import { styles } from "./styleSheet";

export default function parseStyles(className: string) {
    const classNames = className.split(' ');

    const filteredClassNames = classNames
        .map((classToken: any) => getResponsiveClass(classToken))
        .filter(Boolean);

    const classNamesToStyles = filteredClassNames
        .map((classToken: any) => getStyleValue(classToken))
        .filter(Boolean);

    return classNamesToStyles;
}

function getResponsiveClass(className: string) {
    if (className === 'undefined') {
        return null;
    }
    if (className.includes(':')) {
        // console.log('Responsive works: ' + width)
        const [breakPoint, responsiveClass] = className.split(':');
        return width < parseInt(breakPoint) ? responsiveClass : null;
    }
    return className;
}

function getStyleValue(className: string) {
    // console.log(styles[styleGenerator(className).replace(/-/g, '_')])
    return styles[styleGenerator(className)!.replace(/-/g, '_')];
}