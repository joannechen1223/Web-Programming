/* eslint-env browser */

/*
JavaScript of todo list
*/
const myNodelist = document.getElementsByTagName('LI');
let i;
let taskNum = 2;
let remainTask = 2;
document.getElementById('remain').innerHTML = remainTask + ' tasks left';

// add a 'x' and 'v' to all todo tasks
for (i = 0; i < myNodelist.length; i += 1) {
  const spanClose = document.createElement('SPAN');
  const txtClose = document.createTextNode('\u00D7');
  spanClose.className = 'close';
  spanClose.appendChild(txtClose);
  myNodelist[i].appendChild(spanClose);
  const spanCheck = document.createElement('SPAN');
  const txtCheck = document.createTextNode('\u2714');
  spanCheck.className = 'check';
  spanCheck.appendChild(txtCheck);
  myNodelist[i].appendChild(spanCheck);
}

// if you press 'x' than the task will be delete on the list
const close = document.getElementsByClassName('close');
for (i = 0; i < close.length; i += 1) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = 'none';
    taskNum -= 1;
    if (div.classList.toggle('checked')) {
      remainTask -= 1;
      document.getElementById('remain').innerHTML = remainTask + ' tasks left';
    }
  };
}

// to check the list
function checkTask(ev) {
  if (ev.target.tagName === 'LI') {
    if (ev.target.classList.toggle('checked')) {
      remainTask -= 1;
      // add the class
    } else {
      remainTask += 1;
    }
    document.getElementById('remain').innerHTML = remainTask + ' tasks left';
  }
}
const list = document.querySelector('ul');
list.addEventListener('click', checkTask, false);

// Set the check all button
const checkAll = document.getElementById('checkAll');
checkAll.onclick = function () {
  if (remainTask === 0) {
    checkAll.classList.add('checked_all');
  }
  if (checkAll.classList.toggle('checked_all')) {
    for (i = 0; i < myNodelist.length; i += 1) {
      myNodelist[i].classList.add('checked');
    }
    remainTask = 0;
    document.getElementById('remain').innerHTML = remainTask + ' tasks left';
  } else {
    for (i = 0; i < myNodelist.length; i += 1) {
      myNodelist[i].classList.remove('checked');
    }
    remainTask = taskNum;
    document.getElementById('remain').innerHTML = remainTask + ' tasks left';
  }
};


// Create a new list item when pressing "Enter"
function newElement(ev) {
  if (ev.key === 'Enter') {
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert('You must write something!');
    } else {
      taskNum += 1;
      remainTask += 1;
      document.getElementById('myUL').appendChild(li);
      document.getElementById('remain').innerHTML = remainTask + ' tasks left';
    }
    document.getElementById('myInput').value = '';
    const spanClose = document.createElement('SPAN');
    const txtClose = document.createTextNode('\u00D7');
    spanClose.className = 'close';
    spanClose.appendChild(txtClose);
    li.appendChild(spanClose);
    const spanCheck = document.createElement('SPAN');
    const txtCheck = document.createTextNode('\u2714');
    spanCheck.className = 'check';
    spanCheck.appendChild(txtCheck);
    li.appendChild(spanCheck);
    for (i = 0; i < close.length; i += 1) {
      close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = 'none';
        taskNum -= 1;
        if (div.classList.toggle('checked')) {
          remainTask -= 1;
          document.getElementById('remain').innerHTML = remainTask + ' tasks left';
        }
      };
    }
  }
}

const inputTask = document.getElementsByTagName('INPUT');
inputTask[0].addEventListener('keydown', newElement, false);
