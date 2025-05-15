import apple from "../assets/apple.svg";
import banana from "../assets/banana.svg";
import bird from "../assets/bird.svg";
import bird1 from "../assets/bird1.svg";
import car from "../assets/car.svg";
import car1 from "../assets/car1.svg";
import cow from "../assets/cow.svg";
import dog from "../assets/dog.svg";
import earth from "../assets/earth.svg";
import egg from "../assets/egg.svg";
import elephant from "../assets/elephant.svg";
import fish from "../assets/fish.svg";
import fish1 from "../assets/fish1.svg";
import frog from "../assets/frog.svg";
import helicopter from "../assets/helicopter.svg";
import hen from "../assets/hen.svg";
import house from "../assets/house.svg";
import lion from "../assets/lion.svg";
import monkey from "../assets/monkey.svg";
import moon from "../assets/moon.svg";
import panda from "../assets/panda.svg";
import pen from "../assets/pen.svg";
import pineapple from "../assets/pineapple.svg";
import ship from "../assets/ship.svg";
import ship1 from "../assets/ship1.svg";
import sun from "../assets/sun.svg";
import tiger from "../assets/tiger.svg";
import tree from "../assets/tree.svg";
import watermelon from "../assets/watermelon.svg";
import carrot from "../assets/carrot.svg";
import grapes from "../assets/grapes.svg";
import chili from "../assets/chili.svg";
import aubergine from "../assets/aubergine.svg";
import watermelon1 from "../assets/watermelon1.svg";
import factory from "../assets/factory.svg";
import brain from "../assets/brain.svg";



export const icons = [
    {
        id: 1,
        icon: banana,
        key: 1,
        matched: false,
    },
    {
        id: 2,
        icon: bird,
        key: 2,
        matched: false,
    },
    {
        id: 3,
        icon: bird1,
        key: 3,
        matched: false,
    },
    {
        id: 4,
        icon: car,
        key: 4,
        matched: false,
    },
    {
        id: 5,
        icon: car1,
        key: 5,
        matched: false,
    },
    {
        id: 6,
        icon: cow,
        key: 6,
        matched: false,
    },
    {
        id: 7,
        icon: dog,
        key: 7,
        matched: false,
    },
    {
        id: 8,
        icon: elephant,
        key: 8,
        matched: false,
    },
    {
        id: 9,
        icon: fish,
        key: 9,
        matched: false,
    },
    {
        id: 10,
        icon: fish1,
        key: 10,
        matched: false,
    },
    {
        id: 11,
        icon: helicopter,
        key: 11,
        matched: false,
    },
    {
        id: 12,
        icon: hen,
        key: 12,
        matched: false,
    },
    {
        id: 13,
        icon: lion,
        key: 13,
        matched: false,
    },
    {
        id: 14,
        icon: monkey,
        key: 14,
        matched: false,
    },
    {
        id: 15,
        icon: panda,
        key: 15,
        matched: false,
    },
    {
        id: 16,
        icon: pineapple,
        key: 16,
        matched: false,
    },
    {
        id: 17,
        icon: ship,
        key: 17,
        matched: false,
    },
    {
        id: 18,
        icon: ship1,
        key: 18,
        matched: false,
    },
    {
        id: 19,
        icon: tiger,
        key: 19,
        matched: false,
    },
    {
        id: 20,
        icon: watermelon,
        key: 20,
        matched: false,
    },
    {
        id: 21,
        icon: apple,
        key: 21,
        matched: false,
    },
    {
        id: 22,
        icon: frog,
        key: 22,
        matched: false,
    },
    {
        id: 23,
        icon: earth,
        key: 23,
        matched: false,
    },
    {
        id: 24,
        icon: pen,
        key: 24,
        matched: false,
    },
    {
        id: 25,
        icon: tree,
        key: 25,
        matched: false,
    },
    {
        id: 26,
        icon: moon,
        key: 26,
        matched: false,
    },
    {
        id: 27,
        icon: house,
        key: 27,
        matched: false,
    },
    {
        id: 28,
        icon: sun,
        key: 28,
        matched: false,
    },
    {
        id: 29,
        icon: egg,
        key: 29,
        matched: false,
    },
    {
        id: 30,
        icon: carrot,
        key: 30,
        matched: false,
    },
    {
        id: 31,
        icon: grapes,
        key: 31,
        matched: false,
    },
    {
        id: 32,
        icon: watermelon1,
        key: 32,
        matched: false,
    },
    {
        id: 33,
        icon: aubergine,
        key: 33,
        matched: false,
    },
    {
        id: 34,
        icon: chili,
        key: 34,
        matched: false,
    },
    {
        id: 35,
        icon: factory,
        key: 35,
        matched: false,
    },
    {
        id: 36,
        icon: brain,
        key: 36,
        matched: false,
    },
];


function getRandomFivePairs(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 15);

    const updated = selected.map(data => (
        {
            id: data.id,
            icon: data.icon,
            key: data.key + 0.5,
            matched: data.matched
        }
    ))

    const duplicated = [...selected, ...updated];

    const result = duplicated.sort(() => Math.random() - 0.5);

    return result;
}

export const BoardData = getRandomFivePairs(icons);