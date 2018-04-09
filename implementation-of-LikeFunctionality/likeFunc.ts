export class likeFunc{
    constructor(private count : number,private isLike : boolean){
    }
    get countLike(){
        return this.count;
    }
    get buttonStatus(){
        return this.isLike;
    }
    updateCount =()=>{     
        if(this.isLike)
            this.count++;
    }
}