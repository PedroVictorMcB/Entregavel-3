const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Funções
const soma = function(a, b) {
    return a + b;
}

const minus = function(a, b) {
    return a - b;
}

const divide = function(a, b) {
    return a / b;
}

const multiply = function(a, b) {
    return a * b;
}

app.get('/', function(req, res) {
    res.send('Oi, mundo :-)');
  });

//request POST
app.post("/soma", function(req, res) { 
    const body = req.body;
    const result = soma(body.a, body.b);
    
    const num1 = req.body.a; 
    const num2 = req.body.b;   
    res.send(`O resultado da soma de ${body.a} + ${body.b} é ${result}`); 
});

app.post("/subtracao", function(req, res) { 
    const body = req.body;
    const result = minus(body.a, body.b);
    
    const num1 = req.body.a; 
    const num2 = req.body.b;   
    res.send(`O resultado da subtração de ${body.a} - ${body.b} é ${result}`); 
});

app.post("/divisao", function(req, res) { 
    const body = req.body;
    let resultado = divide(body.a, body.b);
    
    const num1 = req.body.a; 
    const num2 = req.body.b;   
    
    if (num2 == 0) {
        res.send("Impossivel efetuar a operacao");
    }
    res.send(`O resultado da divisão de ${body.a} / ${body.b} é ${resultado}`); 
});

app.post("/multiplicacao", function(req, res) { 
    const body = req.body;
    const result = multiply(body.a, body.b);
    
    const num1 = req.body.a; 
    const num2 = req.body.b;   
    res.send(`O resultado da multiplicaçao de ${body.a} x ${body.b} é ${result}`); 
});

const port = 3000;

app.listen(port, function(erro) {
    if (erro) {
        console.log("unable to initialize");
    } else {
        console.log(`Server initialized in http://localhost:${port}/`);
    }
})