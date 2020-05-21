export class Department{
    private departmentId:number;
    private departmentName: string;

    constructor(deptId:number,deptName:string){
        this.departmentId=deptId;
        this.departmentName=deptName;

    }
    public get getdeptId():number{
        return this.departmentId;
    }

    public get getdeptName():string{
        return this.departmentName
    }

    public set setdeptId(value:number){
        this.departmentId=value;
    }

    public set setdeptName(value:string){
        this.departmentName=value
    }


}