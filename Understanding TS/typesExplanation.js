"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = void 0;
var Job;
(function (Job) {
    Job[Job["JUNIOR"] = 0] = "JUNIOR";
    Job[Job["SENIOR"] = 1] = "SENIOR";
    Job[Job["PLENO"] = 2] = "PLENO";
})(Job || (Job = {}));
const person = {
    name: "Daniel",
    age: 30,
    hobbies: ["a", "b"],
    role: [Job.PLENO, "1"],
    job: Job.JUNIOR,
};
var Controle;
(function (Controle) {
    Controle[Controle["FALSE"] = 0] = "FALSE";
    Controle[Controle["TRUE"] = 1] = "TRUE";
})(Controle = exports.Controle || (exports.Controle = {}));
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
let rr = 0;
rr ? "" : rr === 0 ? "ok" : "erro";
console.log(person);
