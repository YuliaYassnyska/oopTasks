class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this._fullName;
    }

    nameIncludes(data) {
        return this.showFullName().includes(data)
    }

    static studentBuilder(fullName, direction) {
        let result = {
            _fullName: fullName,
            _direction: direction
        }
        return result
    }

    get direction() {
        return this._direction
    }

    set direction(value) {
        this._direction = value
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');

console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));
console.log(stud3)
