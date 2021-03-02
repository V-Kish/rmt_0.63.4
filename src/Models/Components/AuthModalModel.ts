import { BaseModel, baseModelProps } from '../../Core/BaseModel';

type authModalModelProps = baseModelProps & {};

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
}





export { AuthModalModel };