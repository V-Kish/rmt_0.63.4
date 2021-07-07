import { BaseModel, baseModelProps } from "./BaseModel";

type baseScreenProps = baseModelProps & {
    screenName: string;
};

class BaseScreenModel extends BaseModel<baseScreenProps> {
    constructor(props: baseScreenProps) {
        super(props);
    }
}

export { BaseScreenModel }