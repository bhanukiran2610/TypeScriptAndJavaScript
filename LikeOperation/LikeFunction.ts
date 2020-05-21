export class LikeFunction{
    private LikesCount:number;
    private isSelected:boolean;

    constructor(theCount:number, isSelectedState:boolean){
        this.LikesCount=theCount;
        this.isSelected=isSelectedState;
    }
    public likeMethod=() => {
        if(this.isSelected==false){
            this.LikesCount++;
            this.isSelected=true;
            console.log(this.LikesCount);
            console.log(this.isSelected);
            console.log("Liked");
            console.log();
        }
        else{
            this.LikesCount--;
            this.isSelected=false;
            console.log(this.LikesCount);
            console.log(this.isSelected);
            console.log("DisLiked");
            console.log();

        }
    }
}