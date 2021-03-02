import { BaseScreen } from "./BaseScreen";
import { BaseController } from "../Controllers/BaseController";

class AppImpl {

    constructor() {
        global.__app__={};
        //__app__.navigator = new BaseNavigatorImpl();
        //__app__.currentUser = new CurrentUserImpl();
        __app__.screens = {};
    }

    public getScreen(name: string) {
        return __app__.screens[name];
    }

    public setScreen(name: string, screenInstance: BaseScreen<BaseController>) {
        __app__.screens[name] = screenInstance;
    }

    public get screens() {
        return __app__.screens;
    }

    public get navigator() {
        return __app__.navigator;
    }

    public get currentUser() {
        return __app__.currentUser;
    }
}
export const app = new AppImpl();
