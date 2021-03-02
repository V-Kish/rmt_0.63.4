import {BaseModel, baseModelProps} from "./BaseModel";

type appModelProps = baseModelProps & { appName: string };

class AppModel extends BaseModel<appModelProps> {
    constructor(props: appModelProps) {
        super(props);
    }
}
export { AppModel }