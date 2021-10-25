import './style.css';
import Icon from './enter.png';
import Icon2 from './icons8-available-updates-96.png';
import Icon3 from './options.png';
import Icon4 from './icons8-delete-64.png';

class TDL {
  constructor() {
    this.createTDL();
    this.listOfItems = [
      {
        task: 'water the garden',
        completed: false,
        index: 0,
        id: 'rrma',
      },
      {
        task: 'clean the kitchen',
        completed: false,
        index: 1,
        id: 'rrma',
      }
    ];
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
    input.addEventListener('keydown', () => {
      if (event.keyCode === 13) {
        event.preventDefault();
        if (input.value !== this.listOfItems.id) {
          resetButton.className = 'RB';
          this.addTask();
          form.reset();
        }
      }
    });
    const enterBTN = document.createElement('button');
    enterBTN.id = 'enterBTN';
    enterBTN.addEventListener('click', () => {
      event.preventDefault();
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
      checkBox.addEventListener('change', () => {
        if (this.checks) {
          this.checks.push(checkBox.id);
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
      checkBox.addEventListener('click', () => {
        if (checkBox.checked) {
          label.remove();
          const del = document.createElement('del');
          del.innerText = listOfItems.task;
          checkBoxCon.appendChild(del);
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
}

const tdl = new TDL();
tdl.displayTask();
