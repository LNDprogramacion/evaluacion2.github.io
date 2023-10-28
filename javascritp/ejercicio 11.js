function Persona(nombre, edad, género) {
    this.nombre = nombre;
    this.edad = edad;
    this.género = género;
  }
  
  Persona.prototype.obtDetalles = function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}`);
  };
  
  function Estudiante(nombre, edad, género, curso, grupo) {
    Persona.call(this, nombre, edad, género);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    console.log(`${this.nombre} ha sido registrado en el curso ${this.curso} - ${this.grupo}`);
  };
  
  function Profesor(nombre, edad, género, asignatura, nivel) {
    Persona.call(this, nombre, edad, género);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  
  Profesor.prototype.asignar = function() {
    console.log(`${this.nombre} ha sido asignado a impartir ${this.asignatura} en el nivel ${this.nivel}`);
  };
  
  const persona1 = new Persona('Juan', 30, 'Masculino');
  persona1.obtDetalles(); 
  
  const estudiante1 = new Estudiante('Pedro', 20, 'Masculino', 'Programación', 'Grupo A');
  estudiante1.obtDetalles(); 
  estudiante1.registrar(); 
  
  const profesor1 = new Profesor('María', 40, 'Femenino', 'Matemáticas', 'Secundaria');
  profesor1.obtDetalles(); 
  profesor1.asignar(); 
  