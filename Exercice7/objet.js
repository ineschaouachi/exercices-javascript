class member {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.toString = function () {
            return "ID: " + this.id + ", Name: " + this.name + ", Grade: " + this.grade;
        };
    }
}

class team {
    constructor() {
        this.members = new Array();
        this.add = function (member) {
            var index = this.members.length;
            this.members[index] = member;
            return index;
        };
        this.toString = function () {
            return this.members.join("\n");
        };
    }
}

var myTeam = new team();

myTeam.add(new member(1, "Ali", "G1"));
myTeam.add(new member(2, "Saleh", "G2"));
myTeam.add(new member(3, "Moufida", "G3"));

alert(myTeam);