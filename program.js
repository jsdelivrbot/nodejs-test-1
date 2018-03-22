var total = 0;

process.argv.forEach(function(item) {
    //we need to exclude first and second items
    //so we could just filter them as NAN
    total += +item ? +item : 0;
});

console.log(total);