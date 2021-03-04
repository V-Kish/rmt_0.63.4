import {BaseController, baseControllerProps} from "./BaseController";
import { WebViewModel } from "../Models/Components/WebViewModel";
import { AuthModalModel } from "../Models/Components/AuthModalModel";
import { baseModelProps } from "../Core/BaseModel";
import { appConfig } from '../Common/appConfig';
type webViewControllerProps = baseControllerProps & {

};

class WebViewController extends BaseController{

    private _webview: WebViewModel;
    private _authModal: AuthModalModel;
    private _domainURI: string;
    constructor(props: webViewControllerProps) {
        super(props)
        this._webview = new WebViewModel({id: "1"});
        this._authModal = new AuthModalModel({id:"1", webViewModel: this.webview});
        this._domainURI = this.getDomainURI(appConfig.environment);
    }

    public get webview(){
        return this._webview;
    }

    public get authModal(){
        return this._authModal;
    }

    public get domainURI(){
        return this._domainURI;
    }

    public getDomainURI(value: string){
        if(value === "UAT"){
            return `https://uat2.${appConfig.siteDomain}/`;
        } else {
            return `https://${appConfig.siteDomain}/`;
        }
    }
}
export {WebViewController}
export type {webViewControllerProps};