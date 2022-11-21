// Code goes here!
class Department {
  private name: string;
  protected employees?: string[];
  private director?: Employee;

  constructor(name: string, employees: string[]) {
    this.name = name;
    this.employees = employees;
  }

  describe(this: Department) {
    console.log("Department Name: " + this.name);
  }
  addEmployee(employee: string) {
    this?.employees?.push(employee);
  }
  printEmployee(this: Department) {
    let counter = 1;
    this?.employees?.forEach((employee) => {
      console.log(`Employee nº ${counter}: ${employee}`);
      counter++;
    });
  }
  addDirector(director: Employee) {
    this.director = director;
  }
  printDirector() {
    this.director
      ? console.log(`Director: ${this.director.name}`)
      : console.log("No director assigned.");
  }
}

class Employee {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const e1 = new Employee("Daniel", 38);

const sellsDepartment = new Department("Sells", []);

class ITDepartment extends Department {
  constructor(private manager: string) {
    super("IT", []);
    this.manager = manager;
  }
  logManager() {
    console.log(this.manager);
  }
  addManager(name: string) {
    this.employees?.push(name);
  }

  get theManager() {
    return this.manager;
  }
  set theManager(value: string) {
    this.manager = value;
  }
}

const it = new ITDepartment("Douglas");
console.log(it);
it.theManager = "Lidia";
console.log(`manager of IT: ${it.theManager}`);

sellsDepartment.describe();
sellsDepartment.addEmployee("Daniel");
sellsDepartment.addEmployee("João");
sellsDepartment.addEmployee("Maria");
sellsDepartment.printEmployee();
sellsDepartment.addDirector({ name: "Marcos", age: 88 });
sellsDepartment.printDirector();
