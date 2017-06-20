var boxCount = 0;
var body = 'body';
var makeDiv = document.createElement("div");



document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement("button");
    btn.className = 'btn';
    document.body.appendChild(btn);
    document.body.appendChild(makeDiv);
    

    btn.addEventListener('click', function () {
        var makeDiv = document.createElement("div");
        makeDiv.className = 'box';
        document.body.appendChild(makeDiv);
        makeDiv.id = boxCount;
        boxCount++;

    makeDiv.addEventListener("mouseenter", function() {
        makeDiv.innerText = makeDiv.id;
        
    });

        
    });
});

// var boxCount = 0;

// var btn = document.createElement("button");
// btn.className = 'btn';
// var makeDiv = document.createElement("div");
// makeDiv.className = 'box';
// makeDiv.id = boxCount;
// btn.appendChild(makeDiv);
// // var howManyBoxes

// document.body.appendChild(btn);


// btn.addEventListener('click', function() {

// });


    // button.addEventListener("click", function makeBox () {
    //     for
    //         var makeDiv = document.createElement('div');

