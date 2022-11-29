// const array = [2, 4, 6, 8, 10];
// const array2 = array.every((ele) => {ele < 11});
// console.log(array2);

// example of closure
function outer () {
    const abc = "Sadik";
    function inner () {
        console.log(abc);
    }
    inner();
}
outer();