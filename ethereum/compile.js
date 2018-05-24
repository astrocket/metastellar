const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);// fs-extra 의 기능 폴더를 통으로 삭제 지워놓고 컴파일

const metaStellarPath = path.resolve(__dirname, 'contracts', 'MetaStellar.sol');
const source = fs.readFileSync(metaStellarPath, 'utf8');
console.log(source);
// 아래의 결과로 두개의 컨트랙 컴파일 결과가 json 구조로 뿌려진다.
const outputs = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);

console.log(ouputs);

for (let contract in outputs) {
    fs.outputJsonSync(
        path.resolve(buildPath, `${contract.replace(':', '')}.json`),
        outputs[contract]
    )
}

/* node compile.js 명령어로 컴파일 실행 */
