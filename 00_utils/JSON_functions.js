const fs = require('fs');
const path = require('path');


// Función para leer los datos del archivo JSON
function readData(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        return [];
    }
}

// Función para escribir los datos en el archivo JSON
function writeData(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados correctamente.');
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
    }
}

// Función para crear un nuevo registro
function createRecord(filePath, record) {
    const data = readData(filePath);
    data.push(record);
    writeData(filePath, data);
}

// Función para actualizar un registro existente
function updateRecord(filePath, id, updatedRecord) {
    const data = readData(filePath);
    const index = data.findIndex(record => record.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...updatedRecord };
        writeData(data);
        console.log('Registro actualizado correctamente.');
    } else {
        console.error('No se encontró el registro con el ID especificado.');
    }
}

// Función para eliminar un registro existente
function deleteRecord(filePath, id) {
    const data = readData();
    const index = data.findIndex(record => record.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        writeData(data);
        console.log('Registro eliminado correctamente.');
    } else {
        console.error('No se encontró el registro con el ID especificado.');
    }
}

module.exports = {
    readData,
    writeData,
    createRecord,
    updateRecord,
    deleteRecord
};