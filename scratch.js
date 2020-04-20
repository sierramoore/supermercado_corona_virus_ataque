// VIRUS animate
// virus = this.add.sprite(200, 200, 'virus');

// shelfSmall = this.physics.add.staticGroup();
// shelfLarge = this.physics.add.staticGroup();
// shelf.create(50, 300, 'ground').setScale(.8);
// shelf.create(320, 150, 'ground').setScale(1.2);
// shelf.create(600, 500, 'ground');
// shelf.create(750, 150, 'ground').setScale(1.4).refreshBody()

// if(randomNumX >= 100) {
//     shelf.create(randomNumX + 150, randomNumY, 'ground');
// }

//if previous randomNumX is within 200 of current randomNumX then current randomNumX + 200

// generate one of [shelf, shelfSmall, shelfLarge]

// this.add.image(xy[i], xy[i + 1] - 40, 'tp').setScale(.8);
// this.add.image(xy[i], xy[i + 1] + 40, 'tp').setScale(.8);

createShelves = () => {
    // let randomNumX;
    // let randomNumY;
    // let shelves = [];
    // for(let i=0; i < 5; i++) { }
    // randomNumX = Math.floor((Math.random() * config.width) + 50);
    // randomNumY = Math.floor((Math.random() * config.height) + 50);
    // shelf.create(randomNumX, randomNumY, 'shelf');
    // shelves.push(shelf);
    // push each generated shelf into array and compare last item in array x and y values and if is with 100px of current generated randomNumX or y then add 100px to x and y to seperate it
    let randomNumX;
    let randomNumY;

    for(let i=0; i < 5; i++) {
        randomNumX = Math.floor((Math.random() * config.width) + 50);
        randomNumY = Math.floor((Math.random() * config.height) + 50);

        shelf.create(randomNumX, randomNumY, 'shelf');
        this.add.image(randomNumX, randomNumY - 40, 'tp').setScale(1.2);
        this.add.image(randomNumX, randomNumY + 40, 'tp').setScale(1.2);
    }
}
createShelves();



// shelves = this.physics.add.group({
//     key: 'shelf',
//     repeat: 5,
//     setXY: {
//         x: Math.floor((Math.random() * config.width) + 50),
//         y: Math.floor((Math.random() * config.height) + 50),
//         stepX: 100,
//         stepY: 100
//     }
// })
