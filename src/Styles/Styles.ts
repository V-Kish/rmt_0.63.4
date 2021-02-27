import { StyleSheet } from 'react-native';
// index
let styleIndex = -1;
//cache styles
const stylesCache: { default: null; dark: null; }[] = [];
// create index for Styles Sheet
export const createStyleIndex = () =>{
const index = ++styleIndex;
 stylesCache[index] = {default: null, dark:null};
 return  index
}

export const STYLES = {
  // drawer styles
  drawer:{
    index: createStyleIndex(),
    container:{
        index: createStyleIndex(),
        general:{
          flex: 1,
          justifyContent: 'space-between',
        },
        default:{
          backgroundColor: '#486d6cff',
        },
        vip:{
            backgroundColor: 'red',
        },
    }
  }
}
export const styledTheme = (style: object) =>{
  console.log('global.userAuth.userStyles styledTheme',"default")
  let cacheItem = stylesCache[style.index]['default'];

  if (cacheItem === null){
    const styles = {}
    Object.keys(style).forEach(key =>{
      if (key !== 'index'){
        // @ts-ignore
          const item =  style[key].general;
        const objStyles = {...item,...style[key]['default']}
        // @ts-ignore
          styles[key] = objStyles;
      }
    })

    // @ts-ignore
      cacheItem = StyleSheet.create(styles)
  }
  return  cacheItem
}

