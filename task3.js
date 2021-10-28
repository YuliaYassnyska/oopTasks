class Worker {
    #experience;
    #salary;

    get showExp() {
        return this.#experience
    }

    set setExp(value) {
        this.#experience = value
    }

    get salary() {
        return this.#salary
    }

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.#experience = 1.2;
    }

    showSalary() {
        this.#salary = this.dayRate * this.workingDays
        return this.fullName + ' salary: ' + this.#salary
    }

    showSalaryWithExperience() {
        this.#salary = this.dayRate * this.workingDays * this.#experience;
        return this.fullName + ' salary: ' + this.#salary
    }

}

const worker1 = new Worker("John Johnson", 20, 23);

console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

const worker2 = new Worker("Tom Tomson", 48, 22);
worker2.showSalary()
worker2.showSalaryWithExperience()
worker2.setExp = 1.5;
worker2.showSalaryWithExperience()

const worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalary()
worker3.showSalaryWithExperience()
worker3.setExp = 1.5;
worker3.showSalaryWithExperience()


let workers = [worker1, worker2, worker3]

let temp;

for (let i = 0; i < workers.length - 1; i++) {
    for (let j = i + 1; j < workers.length; j++) {
        if (workers[i].salary > workers[j].salary) {
            temp = workers[i];
            workers[i] = workers[j]
            workers[j] = temp
        }
    }
}

for (let i = 0; i < workers.length; i++) {
    console.log(workers[i].fullName + ': ' + workers[i].salary)
}


