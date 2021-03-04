import {baseModelProps} from "../Core/BaseModel";

import { DrawerContentModel } from "../Models/Navigation/DrawerContentModel";
import { FooterModel } from "../Models/Navigation/FooterModel";
import { HeaderModel } from "../Models/Navigation/HeaderModel";
import { UserModel } from "../Models/User/UserModel";

export type baseControllerProps = baseModelProps & {
    
};
class BaseController{
    private _props:baseControllerProps;
    private _mainNav: HeaderModel;
    private _footerNav: FooterModel;
    private _drawerContent: DrawerContentModel;

    private _user: UserModel;
    

    constructor(props:baseControllerProps) {
        this._props = props;
        this._mainNav = new HeaderModel({id:"1"});
        this._footerNav = new FooterModel({id:"1"});
        this._drawerContent = new DrawerContentModel({id:"1"});
        this._user = new UserModel({id: "1"});

        
    }

    public get mainNav(){
        return this._mainNav;
    }
    public get footerNav(){
        return this._footerNav;
    }
    public get drawerContent(){
        return this._drawerContent;
    }
    public get user(){
        return this._user;
    }

}
export {BaseController}
