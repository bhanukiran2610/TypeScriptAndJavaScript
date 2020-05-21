
import {CD} from "./CD";
import {SpecialEditionCD} from "./SpecialEditionCD";
import {InternationalCD} from "./InternationalCD";


let cds: CD[] =[];

let myCD=new CD("0001","URI", "Patriotic Movie");
 
cds.push(myCD)
 

//creating a special cd
let spCd=new SpecialEditionCD("0002","Surya S/O Krishnan","Emotional Drama",false);
cds.push(spCd);
 
let intlCd=new InternationalCD("0003","Dream Girl","Comedy ", ["English","Hindi"]);
cds.push(intlCd);
 
for (let index of cds) {
console.log(index.getDetails());
}