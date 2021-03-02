import {BaseModel, baseModelProps} from './BaseModel';
import {Component} from 'react';
import { BaseScreen } from './BaseScreen';
import { BaseController } from '../Controllers/BaseController';


type baseComponentProps = {
    key?: string;
    id: string;
    style?: object;
    parent?: TypedBaseComponent<baseComponentProps, BaseModel<baseModelProps>>;
    screen?: BaseScreen<BaseController>;
};

type componentPropsWithModel<P extends baseComponentProps, T extends BaseModel<baseModelProps>> = P & {
    /**
     * Модель компонента @T*/
    model: T;
  };
  
type baseScreenProps = baseComponentProps & {
/**
 * ��� ������
 */
    screenName: string;
};
  

abstract class TypedBaseComponent<P extends baseComponentProps, T extends BaseModel<baseModelProps>> extends Component<componentPropsWithModel<P, T>, {}, any> {
    constructor(props: componentPropsWithModel<P, T>) {
        super(props);
        if (this.props.model !== void 0){
            this.props.model.setComponent(this.id, this);
        }
    }
    public get parent() {
        return this.props.parent;
    }

    public get screen() {
        return this.props.screen;
    }

    public get id() {
        return this.props.id;
    }

    public childId<M extends BaseModel<baseModelProps>>(model: M) {
        return `${this.id}_${model.id}`;
    }

    public childProps<M extends BaseModel<baseModelProps>>(model: M) {
        return { id: this.childId(model), key: this.childId(model), model, parent: this, screen: this.props.screen };
    }

    public get model() {
        return this.props.model;
    }

    public get style() {
        return this.props.style;
    }

    public setComponent(component: Component<componentPropsWithModel<P, T>, {}, any>) {
        this.model.setComponent(this.id, component);
    }

    public getModified() {
        this.model.getModified(this.id);
    }

    public setModified(value: boolean) {
        this.model.setModified(this.id, value);
    }

    public getRef() {
        return this.model.getRef(this.id);
    }

    public setRef(ref: any) {
        this.model.setRef(this.id, ref);
    }

    public componentDidMount() {
        if (this.props.model !== void 0){
            this.props.model.setComponent(this.id, this);
        }
    }

    public componentWillUnmount() {
        if (this.props.model !== void 0){
            this.props.model.setComponent(this.id, null);
        }
    }
    public shouldComponentUpdate(nextProps: Readonly<componentPropsWithModel<P, T>>) {
        if(this.model !== void 0){
            if (this.model.id !== nextProps.model.id) {
                return true;
            }
            return this.model.getModified(this.id);
        }
        return false;
    }
    public render(): JSX.Element | null {
        if (this.props.model !== void 0){
            this.model.setModified(this.id, false);
        }
        return null;
    }
}


export {TypedBaseComponent};
export type {baseComponentProps, componentPropsWithModel, baseScreenProps};
