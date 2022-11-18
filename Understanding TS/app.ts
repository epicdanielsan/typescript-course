//Command to watch compilation
//tsc [fileName].ts --watch
//or
//tsc [fileName].ts --w
//tsc --init (compila o projeto inteiro) rodar somente 1 vez === Cria o arquivo tsconfig.json

// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }

// let combineValues: (n1: number, n2: number) => number;

// combineValues = add;
// console.log("aijsdfbahisdb");

// //combineValues = 5

// console.log(combineValues(6, 7));

const Estado: [number, string, string][] = [
  [11, "Rondônia", "RO"],
  [12, "Acre", "AC"],
  [13, "Amazonas", "AM"],
  [15, "Amapá", "AP"],
];
console.log(Estado[0][0]);

// for (let i = 0; i < Estado.length; i++) {
//   console.log(Estado[i]);
// }

console.log(Estado.find((estado) => estado[2] === "RO"));

type localidade = {
  ibgeMunicipio: number;
  municipio: string;
  ibgeEstado: number;
  estado: string;
  sigla: string;
};

const aa = (a: number, b: number) => {
  return a + b;
};
