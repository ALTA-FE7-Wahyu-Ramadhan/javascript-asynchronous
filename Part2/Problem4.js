//outfit of the day
// you have to create a function that chooses an outfit for us.
// All you have to do is get that outfit from listBrands using Math random in range 0 - listBrands length. and have some time length, and have some time length that gets from listBrands process time.

const listBrands = [
    {
      brand: "H&M",
      porcessTime: 7000,
    },
    {
      brand: "Zara",
      porcessTime: 4000,
    },
    {
      brand: "Uniqlo",
      porcessTime: 5000,
    },
    {
      brand: "Pedro",
      porcessTime: 9000,
    },
    {
      brand: "The Executive",
      porcessTime: 10000,
    },
    {
      brand: "Adidas",
      porcessTime: 8000,
    },
    {
      brand: "Nike",
      porcessTime: 7000,
    },
    {
      brand: "Puma",
      porcessTime: 6000,
    },
    {
      brand: "Converse",
      porcessTime: 6000,
    },
    {
      brand: "Mark & Spencer",
      porcessTime: 9000,
    },
  ];
  
  function randomizeBrand(typeApparel) {
    //your code here
    const randomBrand = listBrands[Math.floor(Math.random() * listBrands.length)];
    const randomTime = randomBrand.porcessTime;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${typeApparel} ${randomBrand.brand}`);
      }, randomTime);
    });
  }
  
  let promise = [];
  console.log(promise.push(randomizeBrand("Clothes")));
  console.log(promise.push(randomizeBrand("Pants")));
  console.log(promise.push(randomizeBrand("Shoes")));
  console.log(promise.push(randomizeBrand("Hat")));