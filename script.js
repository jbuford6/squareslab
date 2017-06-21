var boxCount = 0;

function changeColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.createElement("button");
    btn.className = 'btn';
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
        var makeDiv = document.createElement("div");
        makeDiv.className = 'box';
        makeDiv.id = boxCount;
        boxCount++;

        makeDiv.addEventListener("click", function () {
            makeDiv.style.backgroundColor = changeColor();
        });

        makeDiv.addEventListener("mouseover", function numberShow() {
            makeDiv.innerText = makeDiv.id;
        });

        makeDiv.addEventListener("mouseout", function () {
            makeDiv.innerText = " ";
        });

        makeDiv.addEventListener("dblclick", function () {
            var prevSquare = makeDiv.previousElementSibling
            var nextSquare = makeDiv.nextElementSibling
            if (makeDiv.id % 2 === 0 && nextSquare !== null) {
                nextSquare.remove();
            } else if (makeDiv.id % 2 !== 0 && prevSquare !== btn) {
                prevSquare.remove();
            } else {
                alert('Not an Element');
            }
        });

        document.body.appendChild(makeDiv);
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

