import * as AppState from '../../interfaces/state.interface'


export interface State extends AppState.State{

    user:UserState,
}

export interface UserState{


    name:string,

    password:string,
}

