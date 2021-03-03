import { BaseModel, baseModelProps } from '../../Core/BaseModel';
import { WebViewModel } from './WebViewModel';

type authModalModelProps = baseModelProps & {
    webViewModel: WebViewModel;
};

class AuthModalModel extends BaseModel<authModalModelProps>{
    private _state: boolean;
    constructor(props: authModalModelProps){
        super(props);
        this._state = false;

        this.toggleModal = this.toggleModal.bind(this);
    }

    public toggleModal(){
        this.state = !this.state;
        this.forceUpdate();
    }

    public get state(){
        return this._state;
    }
    public set state(value: boolean){
        this._state = value;
    }
    public get webViewModel(){
        return this.props.webViewModel;
    }
}





export { AuthModalModel };