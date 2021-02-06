import {baseProps} from "../Core/BaseModel";

export type baseControllerProps = baseProps & {name:string,id?:string};
class BaseController{
    private _props:baseControllerProps
    constructor(props:baseControllerProps) {
        this._props = props;
    }
    public get name(){
        return this._props.name;
    }
}
export {BaseController}
