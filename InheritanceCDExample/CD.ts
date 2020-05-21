export class CD{
    private cdId: string;
    private cdName:string;
    private cdGenre: string;

    public constructor(theCdId:string, theCdName:string, theCdGenre:string){
        this.cdId=theCdId;
        this.cdName=theCdName;
        this.cdGenre=theCdGenre;
    }

    public get getCdId():string{
        return this.cdId;
    }

    public get getCdName():string{
        return this.cdName;
    }

    public get getCdGenre():string{
        return this.cdGenre;
    }
    public set setCdId(value:string){
        this.cdId=value;
    }
    public set setCdName(value:string){
        this.cdName=value;
    }
    public set setCdGenre(value:string){
        this.cdGenre=value;
    }

    getDetails():string{
        return `CDId=${this.cdId},CDName=${this.cdName},CDGenre=${this.cdGenre}`
    }

  
}