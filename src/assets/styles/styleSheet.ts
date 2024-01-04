import { StyleSheet } from 'react-native';
import { layout } from './layout';
import { sizes } from './sizes';
import { colors } from './colors';

const styles = StyleSheet.create({
    ...layout,
    ...sizes,
    ...colors,
});

// console.log(styles)
export { styles };
