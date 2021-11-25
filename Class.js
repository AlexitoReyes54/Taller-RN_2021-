class Persona{
    constructor(name, arcana) {
        this.name = name;
        this.arcana = arcana;
      }

      invoke(){
          console.log("Personaaaa!!!");
      }
      attack(){
          console.log("bash");
      }
}

let Orpheus = new Persona("Orpheus","Fool");
Orpheus.invoke()
Orpheus.attack()