import { Component } from 'react';

type baseProps = { id: string };

class WrapComponent {
    private _id: string;
    private _react: Component | null;
    private _ref: any;
    private _modified: boolean;

    constructor(id: string) {
        this._id = id;
        this._react = null;
        this._modified = true;
    }

    public get id() {
        return this._id;
    }

    public get react() {
        return this._react;
    }

    public set react(value) {
        this._react = value;
    }

    public get modified() {
        return this._modified;
    }

    public set modified(value) {
        this._modified = value;
    }

    public get ref() {
        return this._ref;
    }

    public set ref(value) {
        this._ref = value;
    }

    public forceUpdate(callback?: () => void) {
        if (this._react !== null) {
            this._react.forceUpdate(callback);
        } else if (typeof callback === 'function') {
            callback();
        }
    }
}

abstract class BaseModel<P extends baseProps> {
    private _props: P;
    private _components: Map<string, WrapComponent>;

    constructor(props: P) {
        this._props = props;
        this._components = new Map<string, WrapComponent>();
    }

    public get props() {
        return this._props;
    }

    public get id() {
        return this._props.id;
    }

    public getComponent(id: string) {
        return this._components.get(id);
    }

    public setComponent(id: string, react: Component | null) {
        let component = this.getComponent(id);
        if (component === void 0) {
            component = new WrapComponent(id);
            this._components.set(id, component);
        }
        component.react = react;
    }

    public set modified(value: boolean) {
        this._components.forEach((component) => (component.modified = value));
    }

    public getModified(id: string) {
        const component = this.getComponent(id);
        if (component !== void 0) {
            return component.modified;
        }
        return true;
    }

    public setModified(id: string, modified: boolean) {
        const component = this.getComponent(id);
        if (component !== void 0) {
            component.modified = modified;
        }
    }

    public getRef(id: string) {
        const component = this.getComponent(id);
        if (component !== void 0) {
            return component.ref;
        }
        return null;
    }

    public setRef(id: string, ref: any) {
        const component = this.getComponent(id);
        if (component !== void 0) {
            component.ref = ref;
        }
    }

    public forceUpdate(callback?: () => void) {
        this._components.forEach(component => component.forceUpdate(callback));
    }
}

export {BaseModel};
export type {baseProps};
