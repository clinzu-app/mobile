import { StyleSheet } from 'react-native';
import { baseStyles } from './baseStyles';
import { sizes } from './sizes';
import { colorStyles } from './colorStyles';

const styles = StyleSheet.create({
    ...baseStyles,
    ...colorStyles,
});

// console.log(styles)
const sizeInBytes = new Blob([JSON.stringify(styles)]).size;
const sizeInMegabytes = sizeInBytes / 1024 / 1024;
console.log(`Size of styles object: ${sizeInMegabytes} MB`);
console.log(styles)
export { styles };
