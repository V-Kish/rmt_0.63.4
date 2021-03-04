import {BaseController} from "./BaseController";
import { WebViewController } from "./WebViewController";



class HomeController extends WebViewController{
    
    constructor() {
        super({id:'HomeControllerId'})
    }
}
export {HomeController}
