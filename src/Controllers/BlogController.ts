import {BaseController} from "./BaseController";
import { WebViewController } from "./WebViewController";



class BlogController extends WebViewController{
    
    constructor() {
        super({id:'BlogControllerId'})
    }
}
export {BlogController}
