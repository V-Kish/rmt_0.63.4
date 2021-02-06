class AppImpl  {
    constructor() {
        __app__ = this;
    }
    get name(){
        return '1'
    }
}
export const app = new AppImpl()
