import { Dimensions } from 'react-native';

export function rem(size: number) {
    let scale = 1;
    let newSize = size * scale * (Dimensions.get('window').width / 412);
    return newSize + 'px';
}

// const { width, height } = Dimensions.get('window');

// export function rem(size: number) {
//     let scale = 1;
//     let newSize = size * scale * (width / 412);

//     return newSize + 'px';
// }

// export { width, height };

