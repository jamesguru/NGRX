import { createReducer, on, createAction, Action } from "@ngrx/store";



  


export const userReducer  = createReducer(


    { name: 'John Doe', password: '12345671'},


    on( createAction('add user'), (state,action:any) => {



        console.log('Heloooooooooo reducer')

        console.log(action.payload.name)

        

       return {

        ...state,


        
        name:action.payload.name,

        password:action.payload.name,

        
       } 
    } )


)



// Listening podcast
// Reading article
// Save Bookmarks / You can use pocket
// Watching Tech conferences online
// short courses
// coding a lot | Try to implement ideas | Trial and Error




