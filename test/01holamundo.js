process.env.NODE_ENV = 'test';
//const server = require('../server');
const assert = require('chai').assert;



describe('01 prueba hola mundo', () => {
    it('Estoy haciendo la primera prueba', () => {
        assert.equal(true, true);
    })
})