import { width } from "./sizes";
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
    if (className.includes(':')) {
        const [breakPoint, responsiveClass] = className.split(':');
        return width < parseInt(breakPoint) ? responsiveClass : null;
    }
    return className;
}

function getStyleValue(className: string) {
    const styleValue = styles[className.replace(/-/g, '_')];
    if (styleValue === undefined) { console.log(`Parse styles: "${className}" is undefined`) }
    return styleValue;
}
