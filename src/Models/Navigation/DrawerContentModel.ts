import { BaseModel, baseModelProps } from '../../Core/BaseModel';

type drawerContentModelProps = baseModelProps & {};

class DrawerContentModel extends BaseModel<drawerContentModelProps>{

    constructor(props: drawerContentModelProps){
        super(props);

    }


}





export { DrawerContentModel };