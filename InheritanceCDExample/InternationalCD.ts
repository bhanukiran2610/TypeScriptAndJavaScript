import {CD} from "./CD";

export class InternationalCD extends CD{
    private languages:string[];

    public constructor (theID: string, theName: string, theGenre: string, theLanguages:string[]){
        super(theID,theName,theGenre);
        this.languages=theLanguages;
    }

    public get getlanguages():string[]{
        return this.languages;
    }

    public set setlanguages(value:string[]){
        this.languages=value;
    }

    getDetails():string{
        return super.getDetails() +`, languages=${this.languages}`;
    }

}


