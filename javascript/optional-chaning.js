// const adressLine1 = user.adress?.adressLine1;

const users01 = [{
    name: '하니',
    adress: {
      zipcode: '000',
      adressLine1: '경기도 성남시 분당구 판교역로 233-1',
      adressLine2: '1층'
    }
}, {
    name: '죠르디'
}]

// users.map(user => {
//     console.log(user.adress.adressLine1);
// });

// users.map(user => {
//     const adress = user.adress;
//     const adressLine1 = (adress === null || adress === undefined) 
//     ? undefined : adress.adressLine1;
  
//     console.log(adressLine1);
// });

users01.map(users01 => {
    console.log(users01.adress?.adressLine1);
});

let aa;
console.log(aa?.bb); // 출력: undefined
console.log(cc?.bb); // 에러 발생: Uncaught ReferenceError: cc is not defined

const users02 = [{
    name: '하니',
    adress: {
      zipcode: '000',
      adressLine1: '경기도 성남시 분당구 판교역로 233-1',
      adressLine2: '1층',
      getAdressText () {
        return `${this.adressLine1} ${this.adressLine2}`
      }
    }
  }, {
    name: '죠르디'
}]
  
users02.map(users02 => {
    console.log(users02.adress?.getAdressText?.());
  
    // 출력 결과:
    // 경기도 성남시 분당구 판교역로 233-1 1층
    // undefined
});

let adress = users02[0].adress?.['adress' + 'Line1'];

// const user03 = {};
// user03?.name = 'hani'; // 에러: Uncaught SyntaxError: Invalid left-hand side in assignment