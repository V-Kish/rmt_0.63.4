import { StyleSheet } from 'react-native';
import {app} from "../Core/AppImpl";
import {baseComponentProps, TypedBaseComponent} from "../Core/BaseComponent";
import {BaseModel, baseProps} from "../Core/BaseModel";

// index
let styleIndex = -1;
//cache styles
const stylesCache: {components:Map<string, TypedBaseComponent<baseComponentProps, BaseModel<baseProps>>>,default: undefined; dark: undefined; }[] = [];
// create index for Styles Sheet
export const createStyleIndex = () =>{
const index = ++styleIndex;
 stylesCache[index] = {components:new Map<string, TypedBaseComponent<baseComponentProps, BaseModel<baseProps>>>(), default: undefined, dark:undefined};
 return  index
}
type stylePropType = {
    [key:string] : {
        [key:string] : number | { [key: string]: number| { [key:string]: string | number }}
    }
}
export const STYLES:stylePropType = {
    // empty
    empty:{
        index: createStyleIndex(),

    },
    // drawer styles
    drawer: {
        index: createStyleIndex(),
        container:{
            index: createStyleIndex(),
            general:{
                flex: 1,
            },
            default:{
                backgroundColor: 'white',
            },
            dark:{
                backgroundColor: 'black',
            },
        }
    },
    buttons:{
        index: createStyleIndex(),
        container:{
            index: createStyleIndex(),
            general:{
              width:200,
                height:60
            },
            default:{
                backgroundColor: 'green',
            },
            dark:{
                backgroundColor: 'red',
            },
        }
    }
}
////////// EXAMPLE /////////////////
// export type Pick2 < T, K1 extends keyof T, K2 extends keyof T[K1] > = {
//     [P1 in K1]: {
//         [P2 in K2]: (T[P1])[P2]
//     }
// };
//
// export type Pick3<
//     T,
//     K1 extends keyof T,
//     K2 extends keyof T[K1],
//     K3 extends keyof (T[K1])[K2],
//     > = {
//     [P1 in K1]: {
//         [P2 in K2]: {
//             [P3 in K3]: ((T[P1])[P2])[P3]
//         }
//     }
// }
// type SomeShape = {
//   //  username: string;
//     address: {
//         street: {
//             name: string;
//             city: {
//                 name: string;
//                 country: string;
//             }
//         }
//     }
// };
//
// type ObjWithStreetName = Pick3<SomeShape, 'address', 'street', 'name'>;
//
// let a: ObjWithStreetName = /* ... */;
// a.address.street.city; // ERROR! This is a TypeScript error
// a.address.street.city.name; // ERROR! This is a TypeScript error
// a.username; // ERROR! This is a TypeScript error
// a.address.street.name; // Only this is fine
// a.address.street.name

export const styledTheme = <T, K extends keyof T, V extends keyof T [K]>(component:TypedBaseComponent<baseComponentProps, BaseModel<baseProps>>,style:T) =>{
    Object.keys(style).forEach(key =>{
        // @ts-ignore
        let cacheItem = stylesCache[style[key].index][app.currentUser.userTheme];

        if (cacheItem === void 0){
            const styles = {}
            Object.keys(style[key]).forEach(styleKey =>{
                if (key !== 'index'){
                    // @ts-ignore
                    const item =  style[key][styleKey].general;
                    // @ts-ignore
                    const objStyles = {...item,...style[key][styleKey][app.currentUser.userTheme]}
                    // @ts-ignore
                    styles[styleKey] = objStyles;
                }
            })
            // @ts-ignore
            cacheItem = StyleSheet.create(styles)
        }
        stylesCache[style[key].index].components.set(component.id,component)
       // aggregated[key] = cacheItem;
        style[key] = cacheItem;
    })

  return  style
}

export const resetTheme = () =>{
    stylesCache.forEach(item =>{
        item.components.forEach(component =>{
            if (component.model !== void 0){
                component.model.modified = true;
            }
        })
    });
    app.model.forceUpdate();
}
