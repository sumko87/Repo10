function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here -- adding a new album
            artist: "Alphaville",
            title: "Forever young",
            release_year: 1984,
            formats: {
                1: "LP",
                2: "CD",
                3: "SP"
            },
            gold:true
        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;