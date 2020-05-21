import {Department} from "./Department";
export class Employee{

    private employeeName:string;
    private employeeId:number;
    private employeeEmail:string;
    private department:Department;
    

    constructor(empName:string, empId:number, empEmail:string, empdept:Department){
        this.employeeId=empId;
        this.employeeName=empName;
        this.employeeEmail=empEmail;
        this.department=empdept;
    }

    public get getempName():string{
        return this.employeeName;
    }

   public set setempName(value:string){
       this.employeeName=value;
   } 
   public get getempId():number{
    return this.employeeId;
}

public set setempId(value:number){
   this.employeeId=value;
} 

public get getEmpEmail():string{
    return this.employeeEmail;
}

public set setempEmail(value:string){
    this.employeeEmail=value;
}

public get getDeptDetail():Department{
    return this.department;
}

public set setDeptDetail(value:Department){
    this.department=value;
}




}


