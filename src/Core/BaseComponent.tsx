import {BaseModel, baseProps} from './BaseModel';
import {Component} from 'react';

type baseComponentProps = {
    key?: string;
    id: string;
    style?: object;
};

type componentPropsWithModel<
  P extends baseComponentProps,
  T extends BaseModel<baseProps>
> = P & {
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

abstract class TypedBaseComponent<P extends baseComponentProps, T extends BaseModel<baseProps>> extends Component<componentPropsWithModel<P, T>, {}, any> {
    constructor(public props: componentPropsWithModel<P, T>) {
        super(props);
        if (this.props.model !== void 0){
            this.props.model.setComponent(this.id, this);
        }
    }

    public get id() {
        return this.props.id;
    }

    public childId<M extends BaseModel<baseProps>>(model: M) {
        return `${this.props.id}_${model.id}`;
    }

    public get model() {
        return this.props.model;
    }

    public get style() {
        return this.props.style;
    }

    public setComponent(
        component: Component<componentPropsWithModel<P, T>, {}, any>,
    ) {
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

    public shouldComponentUpdate(
        nextProps: Readonly<componentPropsWithModel<P, T>>,
    ) {
        if (this.model.id !== nextProps.model.id) {
            return true;
        }
        return this.model.getModified(this.id);
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
