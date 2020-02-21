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
