//let's have some snack
function jajanBoba(uang, callback) {
    // your code here
    setTimeout(() => {
      console.log("get boba", +uang);
      callback(uang);
    }, 5000);
  }
  function jajanSeblak(uang) {
    // your code here
    setTimeout(() => {
      console.log("get seblak", +uang);
    }, 4000);
  }
  
  jajanBoba(20000, jajanSeblak);
  jajanBoba(10000, jajanSeblak);