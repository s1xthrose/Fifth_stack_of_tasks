//Задание 1:
/*
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];


let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];


let answer4 = [
    coords.right - parseInt(getComputedStyle(field).borderRightWidth),
    coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
  ]; */


//Задание 2:

/*
  function positionAt(anchor, position, elem) {

    let anchorCoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
    }

  } */


//Задание 3:
/*
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

.note {
    position: absolute;
    z-index: 1000;
    padding: 5px;
    border: 1px solid black;
    background: white;
    text-align: center;
    font: italic 14px serif;
  } */

//Задание 4:
/*
function positionAt(anchor, position, elem) {

    let anchorCoords = getCoords(anchor);

    switch (position) {
      case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;

      case "right-out":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;

      case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "right-in":
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

      case "bottom-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
    }

  } */