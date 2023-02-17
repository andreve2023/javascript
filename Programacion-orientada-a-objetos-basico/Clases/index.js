class Student2 {
    // constructor(name, age, cursosAprobados) {
    //     this.name = name;
    //     this.age = age;
    //     this.cursosAprobados = cursosAprobados
    // }
    constructor({name, age, cursosAprobados= []}) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}
const miguel = new Student2({
    name:"Miguel",
    age:18,
});
// const miguel = new Student2("Miguel", 18, ["Curso javascript", "Curso de java"]);

miguel.aprobarCurso("Html y css")