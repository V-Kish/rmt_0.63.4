// typically I'll store the below in something like "typings.d.ts"
// this is because, at least typically, these overrides tend to
// be minimal in nature. You could break them up and Typescript
// will pick them up if you wish.


declare global {

    // This is our definition or type for the function.

    // If defining a object you might do something like
    // interface IConfig { a: number, b: number }
    interface IBaseNavigatorState {
        screen: string | undefined;
        history: string[]
    }
    class BaseNavigatorImpl {
        constructor();

        public get state() : IBaseNavigatorState | undefined;
        public get navigation(): any;
        public set navigation(value: any);

        public navigate(stackName: string): void;
    }
    interface ICurrentUserState {
        token: string | undefined;
    }
    class CurrentUserImpl {
        constructor();

        public get state(): ICurrentUserState;

        public get token(): string | undefined;
        public set token(value: string | undefined);
    }
    class StacksImpl {
        constructor();
        //private _screens: Map<typeof BaseScreenModel, BaseScreenModel>;

        //public get name(): string;

        //public get stack(screenImpl: typeof BaseScreenModel): BaseScreenModel;
    }
    type Debug = (label: string) => (message: any, ...args: any[]) => void;

    type App = {
        navigator: BaseNavigatorImpl;
        currentUser: CurrentUserImpl;
    };

    // Extend the Global interface for the NodeJS namespace.
    namespace NodeJS {

        interface Global {

            // Reference our above type, this allows global.debug to be
            // to be defined in our code.
            //debug: Debug;
            __app__: App;
        }

    }

    // This allows us to simply call debug('some_label')('some debug message')
    // from anywhere in our Node server/application.
    //const debug: Debug;
    const __app__: App;
}
//export { }
