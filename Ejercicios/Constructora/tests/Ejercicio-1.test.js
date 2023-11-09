const {Ropa} = require ('../Ejercicio-1')


describe("Verificando funcion constructora", () => {
    it('Ropa es una funcion constructora', () => {
        expect(typeof Ropa).toBe('function');
    });
    
    it('Creando un objeto lo guarda de forma correcta', () => {
        var ropa = new Ropa ('pantalon', 20, 'niña', 'jean');
        expect(ropa).toBe({categoria: 'pantalon', talle: 20, genero: 'niña', material: 'jean'});
    });
});
