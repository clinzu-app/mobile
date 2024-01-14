// 411.43 designer screen width (pixel 7 pro)
// 867.43 designer screen height (pixel 7 pro)
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');
const scaleFactor = 1;
// const rem = (width / 1440) * scaleFactor;
const rem = 1;
console.log('Device width: ' + width)
export {
    width,
    height,
    rem
};
