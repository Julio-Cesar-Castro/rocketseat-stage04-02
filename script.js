let student = [
  {
    nome: 'Julio',
    primeiraNota: 5,
    segundaNota: 5,
  },
  {
    nome: 'Luis',
    primeiraNota: 8,
    segundaNota: 5,
  },
  {
    nome: 'Pedro',
    primeiraNota: 8,
    segundaNota: 8,
  }
]

function media(notaA,notaB){
  return (notaA + notaB) / 2
}

for (const students of student) {
  if (media(students.primeiraNota, students.segundaNota) <= 7) {
    alert(`A média do(a) aluno(a) ${students.nome} é de ${media(students.primeiraNota, students.segundaNota)} \n Não foi dessa vez, ${students.nome}! Tente novamente.`)
  } else{
    alert(`A média do(a) aluno(a) ${students.nome} é de ${media(students.primeiraNota, students.segundaNota)} \n Parabéns, você foi aprovado(a) no curso!`)
  }
}