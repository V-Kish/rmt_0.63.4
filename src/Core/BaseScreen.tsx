import React from "react";
import { TypedBaseComponent, baseScreenProps, componentPropsWithModel } from "./BaseComponent";
import { BaseScreenModel } from "./BaseScreenModel";
import { View } from "react-native";
import { BaseController, baseControllerProps } from "../Controllers/BaseController";
export const CurrentScreen = React.createContext(null);
abstract class BaseScreen<C extends BaseController> extends TypedBaseComponent<baseScreenProps, BaseScreenModel> {

    private readonly _controller: C;

    /**
     *
     * @returns {string} Sum of a and b
    */
       get screenName() {
        throw new Error('');
        return '';
    }

    /**
     *
     * @param props - props
     * @param controller - controller
    */
    constructor(props: componentPropsWithModel<baseScreenProps, BaseScreenModel>, controllerImpl: new (props:baseControllerProps) => C) {
        super(props);
        this._controller = new controllerImpl({name:this.screenName,id:this.screenName});
    }

    /**
     * ���������� ������
     * @returns {C}
     */
    public get controller() {
        return this._controller;
    }

    public async onFocus() {

    }

    public async onBlur() {
    }

    // public componentDidMount() {
    //
    // }
    //
    // public componentWillUnmount() {
    //
    // }

    public componentDidCatch() {

    }

    public header(): JSX.Element | null {
        return null;
    }

    public get hasHeader() {
        return false;
    }

    public content(): JSX.Element | null {
        return <View />;
    }

    public hasFooter() {
        return true;
    }

    public footer(): JSX.Element | null {
        return <View />;
    }

    public render() {
        return (
            <CurrentScreen.Provider value={this}>
                {this.header()}
                <View style={{flex:1}}>
                    {this.content()}
                </View>
                {this.footer()}
            </CurrentScreen.Provider>
        );
    }
}

export { BaseScreen }
