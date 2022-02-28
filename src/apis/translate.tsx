import globalVars from '../globalVars';
import { GetItemByKey } from "."
import React, {useState, useEffect} from "react"

const T = (
  starling: any
) => {
  const [translation, setTranslation] = useState<any>();
  
  useEffect(() => {
    const fetchData = async () => {  
      const lang = localStorage.getItem('lang');          
      const res = await GetItemByKey({
        key: [starling],
        lang: lang,
      }); 
      setTranslation(res?.[`${starling}`]  || '');
  }
    fetchData();
  }, []);
  return translation || starling;
}

export default T;


// export const storeTranslation = async (key: string) => {
//   const interface_input = {
//     page_num: 1,
//     page_size: 10,
//   }
//   const res1 = await GetStarlingList({...interface_input});
//   const res2 = await GetStarlingList({page_num:1, page_size:res1.total});
//   console.log(res2);
// }

// export const t = (key: string) => {
//   const items = JSON.parse(localStorage.getItem("starling") || '{}');
//   if (!items[`${key}`]) {
//     storeTranslation(key);
//   }
//   else {
//     return items[`${key}`];
//   }
// }