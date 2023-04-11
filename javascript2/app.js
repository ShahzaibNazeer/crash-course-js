// // 1. Write a function that creates a closure and returns a function that can add
// // a specific number to any number passed to it. For example, if the closure is
// // created with 5, the returned function should add 5 to any number passed
// // to it.

// // function addtion() {
// //      let number1= +prompt('enter first number');
// //     function add(){
// //      let number2= +prompt('enter second number');
// //     return number1 + number2 }
// //     return add;
// // }
// // let outer = addtion();
// // console.log(outer());

// // 2. Write a recursive function that searches an array for a specific value. The
// // function should return true if the value is found, and false if it is not. You
// // can assume that the array is not nested.

// // let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
// // let userInput =prompt('GIVE A MONTH NAME to check correct spelling');
// // console.log(finder(months,userInput));
// // function finder(months,userInput )
// // {
// //     if      (months.length === 0) { return false}
// //     else if (months[0] === userInput) { return true}
// //     else    { return finder(months.slice(1),userInput)}
// // };

// //3 Write a function that adds a new paragraph element to the bottom of an
// // HTML document. The function should take a string argument that will be
// // used as the text content of the new paragraph element.

function addParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    const body = document.querySelector('body');
    body.appendChild(newParagraph);
  }


//   Write a function that adds a new list item to an unordered list in an HTML
//   document. The function should take a string argument that will be used as
//   the text content of the new list item.

// function addListItem(text) {
//     let newItem = document.createElement('li');
//     newItem.textContent = text;
//     let list = document.getElementById('list');
//     list.appendChild(newItem);
//   }

// . Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// function changeColor(element, color) {
//     element.style.backgroundColor = color;
//   }
// //6 Write a function that saves an object to localStorage. The function should
// // take two arguments: the first argument is a string representing the key to
// // use for storing the object, and the second argument is the object to store.

// // let obj = {
// //     name: prompt('enter you name'),
// //     fname: prompt('enter your father name ')
// // }
// // let mainName = 'example';
// // function storing(Main,objname) {
// //     let stringify = JSON.stringify(obj);
// //     localStorage.setItem(Main, stringify);
// //     console.log(objname);
// // }
// // storing(mainName,obj);

// // 7. Write a function that retrieves an object from localStorage. The function
// // should take one argument, which is a string representing the key used to
// // store the object. The function should return the object


// // let obj = {
// //     name: prompt('enter you name'),
// //     fname: prompt('enter your father name ')
// // }
// // let mainName = 'example';
// // function storing(Main,objname) {
// //     let stringify = JSON.stringify(obj);
// //     localStorage.setItem(Main, stringify);
// //     console.log(objname);
// // }
// // storing(mainName,obj);

// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object