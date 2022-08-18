let area_title = document.querySelector('#title-area');
let area_text = document.querySelector("#textarea");
let save_btn = document.querySelector(".btn");
let notes = document.getElementsByClassName('notes')[0];
let container = document.getElementsByClassName('container');
let empty = document.getElementsByClassName('empty')[0];
let delBtn= [];
// let delBtn = document.getElementsByClassName('del');



let title = '';
let text = '';

area_title.addEventListener('keyup', function(e) {
    title = e.target.value;
});

area_text.addEventListener('keyup', function(e) {
    text = e.target.value;
});


save_btn.addEventListener('click', function(e) {
    let temp_div = document.createElement('div');
    temp_div.classList.add('container');
    let temp_title = document.createElement('h1');
    temp_title.classList.add('title');
    temp_title.innerHTML = title;
    let temp_text = document.createElement('p');
    temp_text.classList.add('text');
    temp_text.innerHTML = text;
    let del_btn = document.createElement('button');
    del_btn.classList.add('del');
    del_btn.innerHTML = 'Delete ';
    del_btn.addEventListener('click', () => {
        notes.removeChild(temp_div);
        console.log(notes.childElementCount);
        if(notes.childElementCount == 0) empty.innerHTML = "No notes to show!!!";
    });

    if(title == "" || text == ""){
        alert("Fields should not be empty");
    }
    else{
        empty.innerHTML = '';
        temp_div.appendChild(temp_title);
        temp_div.appendChild(temp_text);
        temp_div.appendChild(del_btn);
        notes.appendChild(temp_div);
        area_title.value = '';
        area_text.value = '';
        title = '';
        text = '';
        delBtn = document.getElementsByClassName('del');
        console.log(notes);
    }
    
});


