import {baseModelProps} from "../Core/BaseModel";
import { AuthModalModel } from "../Models/Components/AuthModalModel";
import { WebViewModel } from "../Models/Components/WebViewModel";
import { DrawerContentModel } from "../Models/Navigation/DrawerContentModel";
import { HeaderModel } from "../Models/Navigation/HeaderModel";
import { UserModel } from "../Models/User/UserModel";

export type baseControllerProps = baseModelProps & { name?: string };
class BaseController{
    private _props:baseControllerProps;
    private _mainNav: HeaderModel;
    private _drawerContent: DrawerContentModel;
    private _authModal: AuthModalModel;
    private _user: UserModel;
    private _webview: WebViewModel;

    constructor(props:baseControllerProps) {
        this._props = props;

        this._mainNav = new HeaderModel({id:"1"});
        this._drawerContent = new DrawerContentModel({id:"1"});
        this._user = new UserModel({id: "1"});
        this._webview = new WebViewModel({id: "1"});
        this._authModal = new AuthModalModel({id:"1", webViewModel: this.webview});
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
    public get user(){
        return this._user;
    }
    public get webview(){
        return this._webview;
    }
}
export {BaseController}
