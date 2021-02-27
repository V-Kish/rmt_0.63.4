import { BaseScreen } from "./BaseScreen";
import { BaseController } from "../Controllers/BaseController";
//import { Navigator } from "./Navigator";
import { CurrentUser } from "./CurrentUser";
import { AppModel } from "./AppModel";
import { name as appName } from '../../app.json';
import {BaseScreenModel} from "./BaseScreenModel";
import {baseScreenProps} from "./BaseComponent";

class MainApp implements AppImpl {

    private readonly _model: AppModel;

   // private _navigator: Navigator;
    private readonly _currentUser: CurrentUser;
    private readonly _screens: {
        [key: string]: BaseScreenModel;
    };

    constructor() {
        __app__ = this;

        this._model = new AppModel({ appName, id: appName });

        // this._navigator = new Navigator();
        this._currentUser = new CurrentUser();
        this._screens = {};
    }

    public get model() {
        return this._model;
    }

    public get name() {
        return appName;
    }

    public getScreenModel(name: string) {
        return this._screens[name];
    }

    public setScreenModel<T extends typeof BaseScreen>(screen:  T) {
        let model = this._screens[screen.name];
        if (model ===  void 0){
             model  = new BaseScreenModel({id:screen.name,screenName:screen.name});
             this._screens[screen.name] = model;
        }
    return   model
    }
    public get screens() {
        return this._screens;
    }

    // public get navigator() {
    //     return this._navigator;
    // }

    public get currentUser() {
        return this._currentUser;
    }
}
export const app = new MainApp();
