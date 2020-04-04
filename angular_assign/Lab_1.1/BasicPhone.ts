import { Mobile } from './Mobile'
class BasicPhone extends Mobile{
    mobileType:string;
    constructor( mobileId:number, mobileName:string, mobileCost:number, mobileType:string){
        super(mobileId,mobileName,mobileCost);
        this.mobileType=mobileType;
}


printMobileDetail():void{
    super.printMobileDetail();
        console.log("MobileType="+this.mobileType);
}
}
