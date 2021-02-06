import {BaseModel, baseProps} from "./BaseModel";

type appModelProps = baseProps & {appName:string}
class AppModel extends BaseModel<appModelProps>{
    constructor(props:appModelProps) {
        super(props);
    }
}
export {AppModel}
