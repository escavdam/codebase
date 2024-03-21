const path = require('path');
const fs = require('fs');

class JSONController{
    constructor(name){
        this.folderPath = path.join(__dirname, "../db");
        this.filePath = path.join(this.folderPath, `${name}.json`);
        const exists = fs.existsSync(this.filePath);
        if(!exists){
            this.create(name);
        }
    }
    create(titulo){
        const data = {
            nombre: titulo,
            tareas: []
        }
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 4));
    }
    update(data){
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 4));
    }
    read(){
        return JSON.parse(fs.readFileSync(this.filePath, "utf-8"));
    }
    delete(){
        fs.unlinkSync(this.filePath);
    }
}

class TaskController extends JSONController{
    constructor(name){
        super(name);
    }
    createTask(nombreTarea){
        const obj = this.read();
        const {nombre, tareas} = obj;
        if(!nombre || !tareas) throw new Error("La base de datos no está formateada correctamente");
        const repeatedName = tareas.find(tarea => tarea.nombre === nombreTarea);
        if(repeatedName) throw new Error("Ya existe una tarea con ese nombre");

        const tarea = {
            id: tareas.length+1,
            nombre: nombreTarea,
            estado: "pendiente"
        }
        tareas.push(tarea);

        const nuevaLista = {
            nombre,
            tareas
        }
        this.update(nuevaLista);
    }
    deleteTask(nombreTarea){
        const obj = this.read();
        const {nombre, tareas} = obj;
        if(!nombre || !tareas) throw new Error("La base de datos no está formateada correctamente");
        const index = tareas.findIndex(tarea => tarea.nombre === nombreTarea);
        if(index === -1) throw new Error("No existe una tarea con ese nombre");

        tareas.splice(index, 1);

        const nuevaLista = {
            nombre,
            tareas
        }
        this.update(nuevaLista);
    }
    updateTask(nombreTarea, estado){
        const obj = this.read();
        const {nombre, tareas} = obj;
        if(!nombre || !tareas) throw new Error("La base de datos no está formateada correctamente");
        const index = tareas.findIndex(tarea => tarea.nombre === nombreTarea);
        if(index === -1) throw new Error("No existe una tarea con ese nombre");

        tareas[index].estado = estado;

        const nuevaLista = {
            nombre,
            tareas
        }
        this.update(nuevaLista);
    }
    readTask(nombreTarea){
        const obj = this.read();
        const {nombre, tareas} = obj;
        if(!nombre || !tareas) throw new Error("La base de datos no está formateada correctamente");
        const tarea = tareas.find(tarea => tarea.nombre === nombreTarea);
        if(!tarea) throw new Error("No existe una tarea con ese nombre");
        return tarea;
    }
    readTasks(){
        const obj = this.read();
        const {nombre, tareas} = obj;
        if(!nombre || !tareas) throw new Error("La base de datos no está formateada correctamente");
        return tareas;
    }
}

const t1 = new JSONController("test");
t1.delete();
const tasks = new TaskController("test");
tasks.createTask("A");
tasks.createTask("B");
tasks.deleteTask("A");
console.log(tasks.readTasks());

module.exports = { JSONController, TaskController }