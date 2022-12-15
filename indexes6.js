console.log("this is es6 version of project 2");
show();
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book) {
        console.log("Adding to ui");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book){
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type , displayMessage) {
        let message = document.getElementById('message');
        let boldtext;
        
        if (type =='success'){
            boldtext ='Success';
        }
        else {
            boldtext ='Error!';
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${boldtext}</strong>${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div> `;
      setTimeout(function(){
        message.innerHTML=''
      },5000);
    }
}
//add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit); //calling libraryformsubmit function 

function libraryFormSubmit(e) {
    console.log("congrats you have successfully submitted the form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

  /*  let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();*/

    if (display.validate(book)) {
        display.add(book);
        display.clear(); /* clears the display value */
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger','Sorry you cannot add this book' );
    }


    e.preventDefault();      /*prevents the default behaviour of reloading the page as soon as it is clicked*/
}
