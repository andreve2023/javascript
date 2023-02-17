
//Esto es un objeto literal
const natalia = {
    name: "Natalia",
    edad: 20,
    cursosAprobados: [
        "Curso definitivo html y css",
        "Curso practico html y css"
    ],
    aprobarCurso: function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

//Objeto prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

//Es una forma de crear metodos de un Prototipo de objeto u o clase
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

// La forma de crear una instancia de un prototipo
const juanita = new Student("Juanita", 15, ["Curso de javascript, curso java"])

juanita.aprobarCurso("curso de react")