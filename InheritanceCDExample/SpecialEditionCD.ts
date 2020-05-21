import {CD} from './CD';
 
export class SpecialEditionCD extends CD{
    private is3D:boolean;

    public constructor(theID:string, theName:string, theGenre:string, thisIs3D:boolean){
        
        super(theID,theName,theGenre);
        this.is3D=thisIs3D;
    }

    public get getIs3D():boolean{
        return this.is3D;
    }

    public set setIs3D(value:boolean){
        this.is3D=value;
    }

    getDetails():string{
        return super.getDetails()+`, Is3DCD=${this.is3D}`;
    }

}