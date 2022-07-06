// Convert Snakes and Ladders form Promise to Async/Await process
const shallPassed = async () => {
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
    const randomBrand = listBrands[Math.floor(Math.random() * listBrands.length)];
    const randomTime = randomBrand.porcessTime;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${typeApparel} ${randomBrand.brand}`);
      }, randomTime);
    });
  };

  console.log(shallPassed);