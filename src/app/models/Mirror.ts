export class Mirror{
    id:number
    title:string
    image:string
    desktopImage?:string
    description:string
    type:string
    karmaValue:number
    requires:string[]=[]
    incompatible:string[]=[]
    upgrade?:string
    isBroken?:boolean = false
    selected?:boolean = false
    constructor(id:number,title:string,image:string,description:string,karmaValue:number,type:string){
        this.id=id
        this.title = title
        this.image = image
        this.description = description
        this.karmaValue = karmaValue
        this.type = type
    }
}