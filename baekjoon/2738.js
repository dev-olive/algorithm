const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';

const [info, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

const[row, col] = info.split(' ').map(el => Number(el));

const matrix1 = arr.slice(0, row).map(el => el.split(' ').map(num => Number(num)));
const matrix2 = arr.slice(row).map(el => el.split(' ').map(num => Number(num)));

const resultMatrix = [];
for(let i=0; i<row; i++){
    resultMatrix[i] = [];
    for(let j=0; j<col; j++){
        resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
}

const resultPrint = [];
for(ele of resultMatrix){
    resultPrint.push(ele.join(' '))
}

console.log(resultPrint.join('\n'));