// var length = 0;

export default class Work {
    constructor(description) {
        this.description = description;
        this.completed = false;
        this.index = 0;
    }

    addtask = (inputTask) => {
        this.description = inputTask
        if (inputTask) {
            const list = JSON.parse(localStorage.getItem('list')) || [];
            const newtask = new Work(inputTask);
            // newtask.index = length++;
            list.push(newtask);
            list.forEach((item, number)=> {
                item.index = number;
            });
            localStorage.setItem('list', JSON.stringify(list));
        }
    }

    removeTask = (index) => {
        this.index = index;
        const list = JSON.parse(localStorage.getItem('list')) || [];
        list.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(list));
    }

    clearTask = () => {

    }
}