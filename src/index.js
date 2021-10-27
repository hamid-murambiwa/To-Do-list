import printMe from './print.js';
import './style.css';
import Icon from './enter.png';
import Icon2 from './icons8-available-updates-96.png';
import Icon3 from './options.png';
import Icon4 from './icons8-delete-64.png';

class TDL {
  constructor() {
    this.createTDL();
    this.listOfItems = [];
    this.checks = [];
    this.id = [];
    if (JSON.parse(localStorage.getItem('id') !== null)) {
      this.id = JSON.parse(localStorage.getItem('id'));
    }
    if (JSON.parse(localStorage.getItem('checks') !== null)) {
      this.checks = JSON.parse(localStorage.getItem('checks'));
    }
    if (localStorage.getItem('data-list') !== null) {
      this.listOfItems = JSON.parse(localStorage.getItem('data-list'));
    }
  }

  createTDL() {
    const wrapper = document.createElement('section');
    wrapper.id = 'container';
    const container = document.createElement('div');
    container.id = 'CON';
    const firstCon = document.createElement('div');
    firstCon.id = 'Con';
    const heading = document.createElement('p');
    heading.innerText = "Today's To Do List";
    const resetButton = document.createElement('button');
    resetButton.className = 'RB';
    resetButton.addEventListener('click', () => {
      resetButton.className = 'Rbutton';
      this.id.forEach((id) => {
        if (document.getElementById(id) !== null) {
          document.getElementById(id).parentElement.remove();
          const index = this.listOfItems.findIndex((list) => list.id === id);
          this.listOfItems.splice(index, 1);

          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
        }
      });
      this.id = [];
      localStorage.setItem('id', JSON.stringify(this.id));

      this.checks = [];
      localStorage.clear();
    });
    const resetIcon = document.createElement('img');
    resetIcon.src = Icon2;
    resetIcon.id = 'resetBTN';
    const secondCon = document.createElement('div');
    secondCon.id = 'Con';
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add to your list...';
    input.id = 'add';
    input.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        if (input.value !== this.listOfItems.id) {
          resetButton.className = 'RB';
          this.addTask();
          form.reset();
        }
      }
    });
    const enterBTN = document.createElement('button');
    enterBTN.id = 'enterBTN';
    enterBTN.addEventListener('click', (e) => {
      e.preventDefault();
      resetButton.className = 'RB';
      this.addTask();
      form.reset();
    });
    const enterIcon = document.createElement('img');
    enterIcon.src = Icon;
    enterIcon.id = 'enterIcon';
    const ul = document.createElement('ul');
    ul.id = 'list';
    const thirdCon = document.createElement('div');
    thirdCon.id = 'Con1';
    const clearBTN = document.createElement('button');
    clearBTN.innerText = 'Clear all completed';
    clearBTN.id = 'clearBTN';
    clearBTN.addEventListener('click', () => {
      this.clearAllCompleted();
    });

    enterBTN.appendChild(enterIcon);
    firstCon.appendChild(heading);
    resetButton.appendChild(resetIcon);
    firstCon.appendChild(resetButton);
    form.appendChild(input);
    secondCon.appendChild(form);
    secondCon.appendChild(enterBTN);
    thirdCon.appendChild(clearBTN);
    container.appendChild(firstCon);
    container.appendChild(secondCon);
    container.appendChild(ul);
    container.appendChild(thirdCon);
    wrapper.appendChild(container);
    document.body.appendChild(wrapper);
  }

  addTask() {
    const input = { task: document.getElementById('add').value };

    const ul = document.getElementById('list');
    ul.style.display = 'grid';
    const li = document.createElement('li');
    li.className = 'Task';
    li.draggable = 'true';
    const conBTN = document.createElement('button');
    conBTN.className = 'CB';
    conBTN.draggable = 'true';

    const checkBoxCon = document.createElement('div');
    checkBoxCon.className = 'CBC';
    const checkBox = document.createElement('input');
    checkBox.className = 'cBox';
    checkBox.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    this.checkBox = checkBox.id;
    checkBox.type = 'checkbox';

    this.id.push(checkBox.id);
    localStorage.setItem('id', JSON.stringify(this.id));
    const label = document.createElement('input');
    label.className = 'tasks';
    label.value = input.task;
    label.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        const index = this.listOfItems.findIndex((list) => list.task === input.task);
        this.listOfItems.splice(index, 1);
        const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        checkBox.id = idCode;
        this.listOfItems.push({
          task: label.value,
          completed: checkBox.checked,
          index: this.listOfItems.length,
          id: idCode,
        });

        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
        this.id.splice(index, 1);
        this.id.push(idCode);
        localStorage.setItem('id', JSON.stringify(this.id));
      }
    });
    checkBox.addEventListener('click', () => {
      if (checkBox.checked) {
        label.remove();
        const del = document.createElement('del');
        del.innerText = input.task;
        checkBoxCon.appendChild(del);

        let result = 0;
        this.checks.forEach((check) => {
          if (check === checkBox.id) {
            result++;
          }
        });
        if (result === 0) {
          this.checks.push(checkBox.id);
        }
      } else {
        this.checks.pop();
        checkBoxCon.removeChild(checkBoxCon.childNodes[0]);
        checkBoxCon.appendChild(label);
      }
    });
    const optionsBTN = document.createElement('button');
    optionsBTN.className = 'optionsBTN';

    const optionsIcon = document.createElement('img');
    optionsIcon.className = 'optionsIcon';
    optionsIcon.src = Icon3;

    conBTN.addEventListener('click', () => {
      optionsIcon.src = Icon4;
      conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';

      optionsBTN.addEventListener('click', () => {
        conBTN.parentElement.remove();
        const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);
        this.listOfItems.splice(index, 1);

        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));

        const indexID = this.id.findIndex((id) => id === checkBox.id);
        this.id.splice(indexID, 1);

        localStorage.setItem('id', JSON.stringify(this.id));

        const checksID = this.checks.findIndex((check) => check === checkBox.id);
        this.checks.splice(checksID, 1);
      });
    });

    optionsBTN.appendChild(optionsIcon);
    checkBoxCon.appendChild(label);
    conBTN.appendChild(checkBoxCon);
    conBTN.appendChild(optionsBTN);
    li.appendChild(checkBox);
    li.appendChild(conBTN);

    ul.appendChild(li);

    this.listOfItems.push({
      task: input.task,
      completed: 'false',
      index: this.listOfItems.length,
      id: checkBox.id,
    });

    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        this.checks.push(checkBox.id);
        const index = this.listOfItems.findIndex((item) => item.id === checkBox.id);

        this.listOfItems[index].completed = true;
        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
      } else {
        const index = this.listOfItems.findIndex((item) => item.id === checkBox.id);
        this.listOfItems[index].completed = false;
        localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
      }
    });

    localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
  }

  displayTask() {
    this.listOfItems.forEach((listOfItems, index012) => {
      const ul = document.getElementById('list');
      ul.style.display = 'flex';
      const li = document.createElement('li');
      li.className = 'Task';
      li.setAttribute('data-index', index012);
      const conBTN = document.createElement('button');
      conBTN.className = 'CB';
      conBTN.draggable = 'true';

      const checkBoxCon = document.createElement('div');
      checkBoxCon.className = 'CBC';
      const checkBox = document.createElement('input');
      checkBox.className = 'cBox';
      checkBox.id = listOfItems.id;
      checkBox.type = 'checkbox';
      checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
          this.checks.push(checkBox.id);
          listOfItems.completed = true;
          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
        } else {
          listOfItems.completed = false;
          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
        }
      });
      const label = document.createElement('input');
      label.className = 'tasks';
      label.value = listOfItems.task;
      const taskInCon = listOfItems.task;
      label.addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          const index = this.listOfItems.findIndex((list) => list.task === taskInCon);
          this.listOfItems.splice(index, 1);

          const idCode = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
          checkBox.id = idCode;
          const labelValue = label.value;
          this.listOfItems.unshift({
            task: labelValue,
            id: idCode,
          });

          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));
          this.id.splice(index, 1);
          this.id.push(idCode);
          localStorage.setItem('id', JSON.stringify(this.id));
        }
      });
      const optionsBTN = document.createElement('button');
      optionsBTN.className = 'optionsBTN';
      optionsBTN.addEventListener('click', () => {
      });
      checkBox.addEventListener('change', () => {
        if (checkBox.checked) {
          label.remove();
          const del = document.createElement('del');
          del.innerText = listOfItems.task;
          checkBoxCon.appendChild(del);
          let result = 0;
          this.checks.forEach((check) => {
            if (check === checkBox.id) {
              result++;
            }
          });
        } else {
          this.checks.pop();
          checkBoxCon.removeChild(checkBoxCon.childNodes[0]);
          checkBoxCon.appendChild(label);
        }
      });
      const optionsIcon = document.createElement('img');
      optionsIcon.className = 'optionsIcon';
      optionsIcon.src = Icon3;

      conBTN.addEventListener('click', () => {
        optionsIcon.src = Icon4;
        conBTN.style.backgroundColor = 'rgba(0, 151, 151, 0.631)';
        optionsBTN.addEventListener('click', () => {
          conBTN.parentElement.remove();
          const index = this.listOfItems.findIndex((list) => list.id === checkBox.id);
          this.listOfItems.splice(index, 1);

          localStorage.setItem('data-list', JSON.stringify(this.listOfItems));

          const indexID = this.id.findIndex((id) => id === checkBox.id);
          this.id.splice(indexID, 1);

          localStorage.setItem('id', JSON.stringify(this.id));

          const checksID = this.checks.findIndex((check) => check === checkBox.id);
          this.checks.splice(checksID, 1);
        });
      });

      optionsBTN.appendChild(optionsIcon);
      checkBoxCon.appendChild(label);
      conBTN.appendChild(checkBoxCon);
      conBTN.appendChild(optionsBTN);
      li.appendChild(checkBox);
      li.appendChild(conBTN);
      ul.appendChild(li);
    });
  }

  clearAllCompleted() {
    let id = [];

    for (let i = 0; i < this.listOfItems.length; i++) {
      if (this.listOfItems[i].completed === true) {
        id.push(this.listOfItems[i].id);
        console.log(id[i]);
        document.getElementById(this.listOfItems[i].id).parentElement.remove();
      } else {
        continue;
      }
    }

    for (let i = 0; i < id.length; i++) {
      const index = this.listOfItems.findIndex((obj) => obj.id === id[i]);
      this.listOfItems.splice(index, 1);
      localStorage.setItem('data-list', JSON.stringify(this.listOfItems));

      const indexID = this.id.findIndex((obj) => obj === id[i]);
      this.id.splice(indexID, 1);
      localStorage.setItem('id', JSON.stringify(this.id));
    }
    id = [];
  }
}

const tdl = new TDL();
tdl.displayTask();
// localStorage.clear();