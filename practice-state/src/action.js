export const selectedText = text => ({
    type: 'TEXT_SELECTED',
    payload : text
});

export const newText = text => ({
    type: 'NEW_SELECTED',
    payload : {
        title : text
    }
});

let lastId=0;
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    title : text,
    id: lastId++
  })
    
 