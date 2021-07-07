import {baseModelProps} from "../Core/BaseModel";
import { DrawerContentModel } from "../Models/Navigation/DrawerContentModel";
import { MainNavigationLayoutModel } from "../Models/Navigation/MainNavigationLayoutModel";

export type baseControllerProps = baseModelProps & { name?: string };
class BaseController{
    private _props:baseControllerProps;
    private _mainNav: MainNavigationLayoutModel;
    private _drawerContent: DrawerContentModel;

    constructor(props:baseControllerProps) {
        this._props = props;

        this._mainNav = new MainNavigationLayoutModel({id:"1"});
        this._drawerContent = new DrawerContentModel({id:"1"});
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
}
export {BaseController}
