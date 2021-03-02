import { CommonActions, NavigationContainerRef } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainNavigationModel } from '../Models/Navigation/MainNavigationModel';
import { HomeScreen } from "../Screens/HomeScreen";


class Navigator {
    private _navigatorModel: MainNavigationModel;
    private _navigation: NavigationContainerRef | null;
    private _mainNavigationStack: any;
    constructor() {
        this._navigation = null;
        this._navigatorModel = new MainNavigationModel({id: "1"});
        this._mainNavigationStack = createStackNavigator();
    }

    public get state() {
        throw new Error("Method not implemented.");
    }
    public get navigation() {
        return this._navigation;
    }
    public set navigation(value) {
        this._navigation = value;
    }
    public get navigatorModel() {
        return this._navigatorModel;
    }


    public navigate(stackName: string, params?: { screen: string }): void {
        if (this._navigation === null) {
            return;
        }
        const route = {
            name: params === void 0 ? stackName : params.screen
        };
        this._navigation.dispatch(CommonActions.navigate(route));
    }
    
    public toHomeScreen(){
        this.navigate(HomeScreen.name);
    }
    
}

export { Navigator }