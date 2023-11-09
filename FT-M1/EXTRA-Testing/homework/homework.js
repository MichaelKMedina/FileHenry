const layout = [
    [
       { type: 'VIP', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'ECONOMIC', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: true },
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: false },
    ],
 ];

function getRowNumber(letra){
//va a permitir a partir de una letra devolver el número de fila asociado.
    return letra.charCodeAt(0) - 65;
};

function checkSeatStatus(str, nro){
    if(typeof str != 'string') throw new TypeError('First parameter is not a string');
    if(typeof nro != 'number') throw new TypeError('Second parameter is not a number');
};

function getSeatStatus(fila, columna){
    if(layout[getRowNumber(fila)][columna].booked === true){
        return true;
    }
    return false;
}

function book(fila, columna){
    if(getSeatStatus(fila, columna) === false) {
        layout[getRowNumber(fila)][columna].booked = true;
        return 'Seat in ' + fila + columna + ' is successfully booked';
    }
    else{
        return 'Seat in ' + fila + columna + ' is already booked';
    }
}







module.exports = {
    checkSeatStatus,
    getRowNumber,
    getSeatStatus,
    book
};