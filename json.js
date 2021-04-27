//console.log("hello world");

const http = require('http');

const host = 'localhost';
const port = 8000;

const requestListener = function(req, res){
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.writeHead(200);
    res.end('{"question" : [{"questionText": "Фамилия певца - Иван ...","answers":[{"text": "Борн", "result": false, "code": "A"},{"text": "Горн", "result": false, "code": "B"},{"text": "Дорн", "result": true, "code": "C"},{"text": "Порн", "result": false, "code": "D"}]},{"questionText": "Воинское звание маршала Рыбалко","answers":[{"text": "Мастер", "result": false, "code": "A"},{"text": "Командир", "result": false, "code": "B"},{"text": "Лейтенант", "result": false, "code": "C"},{"text": "Маршал", "result": true, "code": "D"}]},{"questionText": "Если внутрь кладут творог получается","answers": [{"text": "Горох", "result": false, "code": "A"},{"text": "Пирог", "result": true, "code": "B"},{"text": "Жирок", "result": false, "code": "C"},{"text": "Курок", "result": false, "code": "D"}]},{"questionText": "Если поверху кладут, то ... зовут","answers": [{"text": "Хлопушкою", "result": false, "code": "A"},{"text": "Матрёшкою", "result": false, "code": "B"},{"text": "Ватрушкою", "result": true, "code": "C"},{"text": "Кадушкою", "result": false, "code": "D"}]},{"questionText": "Супруга певца Л.Агутина","answers": [{"text": "Варлей", "result": false, "code": "A"},{"text": "Варум", "result": true, "code": "B"},{"text": "Влади", "result": false, "code": "C"},{"text": "Пугачёва", "result": false, "code": "D"}]}]}')
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
})




