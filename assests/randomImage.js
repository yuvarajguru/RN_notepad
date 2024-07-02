const images = {
    1: require('../assests/images/1.png'),
    2: require('../assests/images/2.png'),
    3: require('../assests/images/3.png'),
    4: require('../assests/images/4.png'),
    5: require('../assests/images/5.png'),
    6: require('../assests/images/6.png'),
    7: require('../assests/images/7.png'),
    8: require('../assests/images/8.png'),
    9: require('../assests/images/9.png'),
    10: require('../assests/images/10.png'),
    11: require('../assests/images/11.png'),
    12: require('../assests/images/12.png'),
}

export default function randomImage(){
    let min = 1;
    let max = 12;
    let random = Math.floor(Math.random()*(max-min + 1)) + min;
    return images[random];
}