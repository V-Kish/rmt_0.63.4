// typically I'll store the below in something like "typings.d.ts"
// this is because, at least typically, these overrides tend to
// be minimal in nature. You could break them up and Typescript
// will pick them up if you wish.

import { BaseScreen } from "../Core/BaseScreen";
import { BaseController } from "../Controllers/BaseController";
import { AppModel } from "../Core/AppModel";
import { NavigationContainerRef } from "@react-navigation/native";
// import { Navigator } from "../Core/Navigator";
import { CurrentUser } from "../Core/CurrentUser";
import {BaseScreenModel} from "../Core/BaseScreenModel";
import {baseScreenProps} from "../Core/BaseComponent";



declare global {

    // This is our definition or type for the function.

    // If defining a object you might do something like
    // interface IConfig { a: number, b: number }

    class StacksImpl {
        constructor();
        //private _screens: Map<typeof BaseScreenModel, BaseScreenModel>;

        //public get name(): string;

        //public get stack(screenImpl: typeof BaseScreenModel): BaseScreenModel;
    }
    type Debug = (label: string) => (message: any, ...args: any[]) => void;

    class AppImpl {
        constructor();
        public get model(): AppModel;
        // public get navigator(): Navigator;
        public get currentUser(): CurrentUser;
        public get screens(): { [key: string]: BaseScreenModel<baseScreenProps> };
        public getScreenModel(name: string): BaseScreenModel<baseScreenProps> | undefined;
        public setScreenModel<T extends typeof BaseScreen>(screenInstance: T): void;
    };

    // Extend the Global interface for the NodeJS namespace.
    namespace NodeJS {

        interface Global {

            // Reference our above type, this allows global.debug to be
            // to be defined in our code.
            //debug: Debug;
            __app__: AppImpl;
        }

    }

    // This allows us to simply call debug('some_label')('some debug message')
    // from anywhere in our Node server/application.
    //const debug: Debug;
    let __app__: AppImpl = {};
}
export { }
