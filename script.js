//Ejercicio 1.1: Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), 
//que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
       console.log(`${this.nombre} tiene ${this.edad} años y es un ${this.genero}`)
    }
}

let personaMario = new Persona("Mario", 32, "hombre");
personaMario.obtDetalles()

//Ejercicio 1.2: Crea la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método
//registrar(), que muestre por pantalla el resultado

class Estudiante extends Persona{
    constructor (nombre, edad, genero, curso, grupo){
        super (nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`${this.nombre}, que tiene ${this.edad} años y es un ${this.genero}, estudia ${this.curso} con el grupo ${this.grupo}`)
    }
}

let estudianteDos = new Estudiante("Javier", 46, "hombre", "primero de Derecho", 2.1)
estudianteDos.registrar()

//Ejercicio 1.3: Crea la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar()

class Profesor extends Estudiante{
    constructor(nombre, edad, genero, asignatura, curso, grupo, nivel){
        super(nombre, edad, genero, curso, grupo);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`${this.nombre}, que tiene ${this.edad} años y es un ${this.genero}, imparte ${this.asignatura} en ${this.curso} del grupo ${this.grupo}, que es muy ${this.nivel}`)
    }
}

let profesorDerecho = new Profesor("Fernanda", 55, "mujer", "Filosofía del Derecho", "primero de Derecho", 2.1, "difícil")
profesorDerecho.asignar()

//Ejercicio 2

class Warrior {
    constructor(life, power){
        this.life = life;
        this.power = power;
    }
    attack(){
        return this.power;
    }
    defend(damage){
        let vidaRestante = this.life - damage;
        console.log(vidaRestante);
    }
}

let guerrero = new Warrior(50, 50)

class Maya extends Warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkColaCao(){
        console.log(this.power + 10);
    }
}

let emperadorMaya = new Maya(50, 50)

class Azteca extends Maya{
    constructor(life, power){
        super(life, power);
    }
    drinkNesquik(){
        console.log(this.life + 10)
    }
}

let emperadorAzteca = new Azteca(50, 50)


//Azteca bebe Nesquik
emperadorAzteca.drinkNesquik()

//Maya bebe ColaCao
emperadorMaya.drinkColaCao()

//Maya ataca a Azteca. Azteca defiende
emperadorMaya.attack(emperadorAzteca)
emperadorAzteca.defend()

//Azteca ataca a Maya. Maya defiende
emperadorAzteca.attack(emperadorMaya)
emperadorMaya.defend()