import { BaseModel, baseProps } from "./BaseModel";

type baseScreenProps = baseProps & {
    screenName: string;
};

class BaseScreenModel extends BaseModel<baseScreenProps> {
    constructor(props: baseScreenProps) {
        super(props);
    }
}

export { BaseScreenModel }