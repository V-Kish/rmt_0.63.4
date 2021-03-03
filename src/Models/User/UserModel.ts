import { BaseModel, baseModelProps } from '../../Core/BaseModel';

type userModelProps = baseModelProps & {};

class UserModel extends BaseModel<userModelProps>{
    private _data?: {};
    private _isLoggedIn: boolean;

    constructor(props: userModelProps){

        super(props);
        this._data = false;
        this._isLoggedIn = false;
    }



    public get data(){
        return this._data;
    }

    public set data(value){
        this._data = value;
    }

    public get isLoggedIn(){
        return this._isLoggedIn;
    }

    public set isLoggedIn(value){
        this._isLoggedIn = value;
    }
    
}





export { UserModel };