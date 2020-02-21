const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
    alunosDaEscola.push({nome, notas: [], cursos:[], faltas:0});
    return console.log(`Aluno ${nome} adicionado com sucesso!`);
  
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
}

function listarAlunos(){
    alunosDaEscola.forEach((aluno) => {
        console.log(`Aluno: ${aluno.nome}`);
        console.log('*'.repeat(80));
    });
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
};

function buscarAluno(nome){
    let alunoEncontrado = false;

    let resultado = alunosDaEscola.find((aluno) => {
        if (aluno.nome == nome) {
            alunoEncontrado = true;
            console.log(`Aluno ${nome} encontrado com sucesso.`);
            return aluno;
        }
    });
    
    return alunoEncontrado ? resultado : console.log(`Aluno ${nome} não foi encontrado na lista de alunos matriculados.`);
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
};

function matricularAluno(aluno, curso){
    aluno.cursos.push({nomeDoCurso: curso, dataMatricula: new Date});
    console.log(`Aluno ${aluno.nome} cadastrado com sucesso no curso: ${curso} em ${aluno.cursos[aluno.cursos.length - 1].dataMatricula}.`)

    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */
};

function aplicarFalta(aluno){
    if (aluno.cursos.length != 0) {
        aluno.faltas ++;
        console.log(`Falta adicionada ao aluno ${aluno.nome}.`);
    } else {
        console.log(`Aluno ${aluno.nome} não está matriculado em nenhum curso.`)
    };
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
};

function aplicarNota(aluno){
    if (aluno.cursos.length != 0) {
        rl.question(`Insira a nota do aluno ${aluno.nome}: `, function(nota){
            aluno.notas.push(nota);
            console.log(`Aluno ${aluno.nome} recebeu a nota ${nota} com sucesso.`);
            rl.close();
        })
    } else {
        console.log(`Aluno ${aluno.nome} não está matriculado em nenhum curso.`);
    };
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */
};
  
function aprovarAluno(aluno){
    if (aluno.cursos.length != 0) {
        let media = aluno.notas.reduce((total, nota) => {return total + nota}) / aluno.notas.length;
        console.log(media);
        if  (media >= 7 && aluno.faltas <= 3) {
            console.log(`Aluno ${aluno.nome} foi aprovado!`);
        } else {
            console.log(`Aluno ${aluno.nome} foi reprovado...`);
        };
    } else {
        console.log(`Aluno ${aluno.nome} não está matriculado em nenhum curso.`);
    }
     /* 
     Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
     Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
     */
};