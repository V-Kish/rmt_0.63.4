import { BaseModel, baseModelProps } from '../../Core/BaseModel';

type webViewProps = baseModelProps & {};

class WebViewModel extends BaseModel<webViewProps>{

    constructor(props: webViewProps){

        super(props);
        this.reload = this.reload.bind(this);
        this.onMessage = this.onMessage.bind(this);
    }


    public reload(){
        this.forceUpdate();
    }

    public onMessage(json: string){
        const data = JSON.parse(json);

        console.log(data);
    }
    
}





export { WebViewModel };