import { BaseModel, baseModelProps } from '../../Core/BaseModel';

type HeaderModelProps = baseModelProps & {};

class HeaderModel extends BaseModel<HeaderModelProps>{

    constructor(props: HeaderModelProps){

        super(props);
        this.openModal = this.openModal.bind(this);
    }



    public openModal(){
        console.log("Modal opened");
    }
}





export { HeaderModel };