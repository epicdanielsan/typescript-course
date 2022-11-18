enum Job {
  JUNIOR,
  SENIOR,
  PLENO,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  job: Job;
} = {
  name: "Daniel",
  age: 30,
  hobbies: ["a", "b"],
  role: [Job.PLENO, "1"],
  job: Job.JUNIOR,
};

export enum Controle {
  FALSE,
  TRUE,
}

// enum Estado{
//   Rondônia = 11,
//   Acre,
//   Amazonas
// }

type Estado = {
  ibge: number;
  nome: string;
  sigla: string;
};

// const estadosArray:Estado[] = [
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"},
//   {ibge: 11, nome: "Rondônia", sigla: "RO"}
// ]

// const arr: Estado[] = [{"Rondônia"}]

let rr: Controle = 0;

rr ? "" : rr === 0 ? "ok" : "erro";

console.log(person);
