class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    showFullName() {
        let fullName = this._name + ' ' + this._surname
        return fullName
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    showFullName(middleName) {
        let result = this._surname + ' ' + this._name + ' ' + middleName;
        return result;
    }

    showCourse() {
        let currentYear = new Date().getFullYear()
        let course = currentYear - this._year;
        if (course <= 6) {
            return course
        }
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());