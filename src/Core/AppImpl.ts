import { BaseScreen } from "./BaseScreen";
import { BaseController } from "../Controllers/BaseController";
import { Navigator } from "./Navigator";
import { CurrentUser } from "./CurrentUser";
import { AppModel } from "./AppModel";
import { name as appName } from '../../app.json';
import { baseScreenProps, componentPropsWithModel } from "./BaseComponent";
import { BaseScreenModel } from "./BaseScreenModel";
import { TypedNavigator, DefaultNavigatorOptions, DrawerNavigationState, DrawerRouterOptions } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerNavigationConfig, DrawerNavigationEventMap, DrawerNavigationOptions } from "@react-navigation/drawer/lib/typescript/src/types";
import { DrawerContentModel } from "../Models/Navigation/DrawerContentModel";


class MainApp implements AppImpl {

    private _model: AppModel;

    private _navigator: Navigator;
    private _currentUser: CurrentUser;
    // private _stacks: Stacks;

    private _screens: {
        [key: string]: BaseScreen<BaseController>;
    };
    private _screenModels: {
        [key: string]: BaseScreenModel;
    }

    private _drawer: TypedNavigator<Record<string, object | undefined>, DrawerNavigationState<Record<string, object | undefined>>,
    DrawerNavigationOptions, 
    DrawerNavigationEventMap, ({ initialRouteName, children, screenOptions, ...rest }: DefaultNavigatorOptions<DrawerNavigationOptions> & DrawerRouterOptions & DrawerNavigationConfig) => JSX.Element>;
    private _drawerContent: DrawerContentModel;
    constructor() {
        __app__ = this;

        this._model = new AppModel({ appName, id: appName });

        this._navigator = new Navigator();
        this._currentUser = new CurrentUser();
        this._screens = {};
        this._screenModels = {};

        this._drawer = createDrawerNavigator();
        this._drawerContent = new DrawerContentModel({id: "1"});
    }

    public get model() {
        return this._model;
    }

    public get name() {
        return appName;
    }

    public getScreen(name: string) {
        return this._screens[name];
    }

    public setScreen<T extends BaseScreen<BaseController>>(screenInstance: T) {
        this._screens[screenInstance.screenName] = screenInstance;
    }

    public setScreenModel<T extends BaseScreen<BaseController>>(modelImpl: new (props: componentPropsWithModel<baseScreenProps, BaseScreenModel>) => T) {
        let model = this._screenModels[modelImpl.name];
        if (model === void 0) {
            model = new BaseScreenModel({ id: modelImpl.name, screenName: modelImpl.name });
            this._screenModels[modelImpl.name] = model;
        }
        return model;
    }

    public get screens() {
        return this._screens;
    }

    public get navigator() {
        return this._navigator;
    }

    public get currentUser() {
        return this._currentUser;
    }

    public get drawer() {
        return this._drawer;
    }
    public get drawerContent(){
        return this._drawerContent;
    }
}
export const app = new MainApp();
