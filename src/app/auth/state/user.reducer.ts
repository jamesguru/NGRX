import { createReducer, on, createAction, Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { State, UserState } from "./user.interface";



  
const initialState:UserState= {

    name:'John Doe',

    password:'12345'
}


const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getShowUser = createSelector(

    getUserFeatureState,

    state => {state.name, state.password}
)

export const userReducer  = createReducer<UserState>(


    initialState,


    on( createAction('add user'), (state,action:any) => {
 

       return {

        ...state,


        
        name:action.payload.name,

        password:action.payload.password,

        
       } 
    } )


)



// Listening podcast
// Reading article
// Save Bookmarks / You can use pocket
// Watching Tech conferences online
// short courses
// coding a lot | Try to implement ideas | Trial and Error




