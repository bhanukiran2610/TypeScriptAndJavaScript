import {Employee} from "./Employee";
import {Department} from "./Department";

let objEmployee=new Employee("Bhanu",11603086,"bhanukiran@gmail.com",new Department(1,"Electronics"));
console.log("EmployeeID:"+objEmployee.getempId);
console.log("EmployeeName"+objEmployee.getempName);
console.log("EmployeeEmail"+objEmployee.getEmpEmail);
console.log("EmployeeDepartmentId"+objEmployee.getDeptDetail.getdeptId);
console.log("EmployeeDepartmentName"+objEmployee.getDeptDetail.getdeptName);
