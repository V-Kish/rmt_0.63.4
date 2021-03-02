import {baseModelProps} from "../Core/BaseModel";
import { AuthModalModel } from "../Models/Components/AuthModalModel";
import { DrawerContentModel } from "../Models/Navigation/DrawerContentModel";
import { HeaderModel } from "../Models/Navigation/HeaderModel";

export type baseControllerProps = baseModelProps & { name?: string };
class BaseController{
    private _props:baseControllerProps;
    private _mainNav: HeaderModel;
    private _drawerContent: DrawerContentModel;
    private _authModal: AuthModalModel;

    constructor(props:baseControllerProps) {
        this._props = props;

        this._mainNav = new HeaderModel({id:"1"});
        this._drawerContent = new DrawerContentModel({id:"1"});
        this._authModal = new AuthModalModel({id:"1"});
    }
    public get name(){
        return this._props.name;
    }
    public get mainNav(){
        return this._mainNav;
    }
    public get drawerContent(){
        return this._drawerContent;
    }
    public get authModal(){
        return this._authModal;
    }
}
export {BaseController}
