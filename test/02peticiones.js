
const server = require('../server');
const assert = require('chai').assert;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('02 prueba peticiones usaremos chai-http', () => {
    
    it('Probando el estatus del get a la raiz', (done) => {
        chai.request(server).get('/').end((err, res) => {
            assert.equal(res.status, 200);
            done();
        })
    })
    

    let idTarea = '';
    it('Insertando datos', (done) => {
        chai.request(server)
        .post('/tareas')
        .send({ nombre: 'insertando prueba mocha', hecho:false})
        .end((err, res) => {
            console.log(res.body);
            idTarea = res.body.id;
            assert.equal(res.status, 200);
            done();
        });
    });


    // verificamos
    it('verificando datos', (done) => {
        chai.request(server)
        .get('/tareas')
        .end((err, res) => {
            let tareas = res.body;
            let tarea=tareas.find(t=>t._id==idTarea);
            console.log(tarea);
            assert.equal(tarea._id,idTarea);
            done();
        });
    });


    //eliminar
    it('eliminando datos', (done) => {
        chai.request(server)
        .delete('/tareas/delete/'+idTarea)
        .end((err, res) => {
            
            assert.equal(res.status, 200);
            done();
        });
    });
});