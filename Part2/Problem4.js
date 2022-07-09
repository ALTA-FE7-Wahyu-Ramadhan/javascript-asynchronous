const listBrands = [
  {
    brand: "H&M",
    proscessTime: 7000,
  },
  {
    brand: "Zara",
    proscessTime: 4000,
  },
  {
    brand: "Uniqlo",
    proscessTime: 5000,
  },
  {
    brand: "Pedro",
    proscessTime: 9000,
  },
  {
    brand: "The Executive",
    proscessTime: 1000,
  },
  {
    brand: "Adidas",
    proscessTime: 8000,
  },
  {
    brand: "Puma",
    proscessTime: 6000,
  },
  {
    brand: "Converse",
    proscessTime: 6000,
  },
  {
    brand: "Mark & Spencer",
    proscessTime: 9000,
  },
];

function randomizeBrand(typeApparel) {
  const randomBrand = Math.floor(Math.random() * listBrands.length);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I weer ${typeApparel} from ${listBrands[randomBrand].brand}`);
    }, listBrands[randomBrand].proscessTime);
  });
}

let promises = [];

promises.push(randomizeBrand("clothes"));
promises.push(randomizeBrand("pantes"));
promises.push(randomizeBrand("shoes"));
promises.push(randomizeBrand("hat"));

Promise.all(promises)
  .then((value) => {
    console.log(value.join(" & "));
  })
  .finally(() => {
    console.log(`loading end..`);
  });

console.log(`Loading start...`);
