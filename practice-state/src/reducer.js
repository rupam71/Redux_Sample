import { combineReducers } from "redux";

 const selectedTextReducer = (selectedText="null", action) =>{
    if(action.type==='TEXT_SELECTED') {
        return action.payload;
    }
    if(action.type==='NEW_SELECTED') {
        return action.payload;
   }
    return selectedText;
}




// const textReducer = () => {
//    return [
//         {title: 'Batman' , id: 500},
//         {title: 'Superman', id: 502},
//         {title: 'CatWomen',  id: 503},
//         {title: 'WonderWomen', id: 504}
//     ]
//     }

//     const todos = (state = [], action) => {
//         switch (action.type) {
//           case 'ADD_TODO':
//             return [
//               ...state,
//               {
//                 title: action.title,
//                 id: action.id
//               }
//             ];
          
//           default:
//             return state;
//         }
//       };

      const textReducer = (state = [], action) => {
        switch (action.type) {
          case 'ADD_TODO':
            return [
              ...state,
              {
                title: action.title,
                id: action.id
              }
            ];
          
          default:
            return  [
                {title: 'Batman' , id: 500},
                {title: 'Superman', id: 502},
                {title: 'CatWomen',  id: 503},
                {title: 'WonderWomen', id: 504}
            ];
        }
      };

  

export default combineReducers({
    selectedTextReducer,
    textReducer
  //  todos
});