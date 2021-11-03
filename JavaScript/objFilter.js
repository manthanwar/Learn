let aaa = [
    {
        tag: 'ram',
        age: 90,
        sex: 'm'
    },
    {
        tag: 'sam',
        age: 60,
        sex: 'm'
    },
    {
        tag: 'dan',
        age: 60,
        sex: 'm'
    },
    {
        tag: 'ami',
        age: 45,
        sex: 'm'
    },
    {
        tag: 'amy',
        age: 45,
        sex: 'f'
    },
    {
        tag: 'ana',
        age: 60,
        sex: 'f'
    },
    {
        tag: 'eva',
        age: 20,
        sex: 'f'
    },
    {
        tag: 'pia',
        age: 44,
        sex: 'f'
    }
]

console.log('aaa = ', aaa);

let newSex = aaa.filter(function (el) {
    return el.sex === 'f';
});

console.log('mm  = ', newSex);

let age = aaa.filter(function (el) {
    return el.sex === 'f' &&
        el.age > 40;
});
console.log('age  = ', age);


let sag = aaa.sort((a, b) => (a.age > b.age) ? 1 : -1)

console.log('sag = ', sag);


let sta = aaa.sort((a, b) => (a.tag > b.tag) ? 1 : -1)

// console.log('sor = ', sta);


let nam = aaa.sort((a, b) => (a.age > b.age) ? 1 : (a.age === b.age) ? ((a.tag > b.tag) ? 1 : -1) : -1);

console.log('nam = ', nam);




const data = [
    { name: 'John', city: 'London', age: 42 },
    { name: 'Mike', city: 'Warsaw', age: 18 },
    { name: 'Jim', city: 'New York', age: 22 },
    { name: 'Celine', city: 'Tokyo', age: 54 },
]

const keys_to_keep = ['name', 'city'];


start();
const redux = array => array.map(o => keys_to_keep.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {}));
  
//   console.log(redux(data));
ended('red = ');


// MAP IS WINNER
start();
const redux1 = list => list.map(o => Object.fromEntries(
    keys_to_keep.map(k => [k, o[k]])
));

// console.log(redux1(data));
ended('map = ');


start();
const result = data.map(e => {
    const obj = {};
    keys_to_keep.forEach(k => obj[k] = e[k])
    return obj;
});

// console.log(result);
ended('for = ');



function objfilter(data,keys_to_keep){
    return data.map(o => Object.fromEntries(
        keys_to_keep.map(k => [k, o[k]])))
}


console.log('fuaan = ', objfilter(data,keys_to_keep))
console.log('fuaan = ', objfilter(data,['name','age']))




var timeStarted, timeStopped;

function start() {
    timeStarted = new Date();
};

function ended(msg) {
    timeStopped = new Date();
    let timeElapsed = timeStopped - timeStarted; //in ms
    // strip the ms
    console.log(msg, timeElapsed + " milliseconds");
    timeElapsed /= 1000;

    // get seconds 
    let seconds = Math.round(msg, timeElapsed);
    // console.log(seconds + " seconds");
}



