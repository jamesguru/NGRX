import { createReducer, on, createAction, Action } from "@ngrx/store";

export const userReducer  = createReducer(


    { name: 'John Doe'},


    on( createAction('add user'), state => {



        console.log('Heloooooooooo reducer')

        

       return {

        ...state,


        
        name:'James'

        
       } 
    } )


)



// Listening podcast
// Reading article
// Save Bookmarks / You can use pocket
// Watching Tech conferences online
// short courses
// coding a lot | Try to implement ideas | Trial and Error




