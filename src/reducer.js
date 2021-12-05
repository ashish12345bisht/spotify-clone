export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly:null,
    token: null//"BQAlaemhnqBUZ9FKgSDgvxT8Y40mcXAQ9hVfhazTcxPF5YlZrLpVoJQWvTZfNcUVBsHLbeQwj37NOxOcz6sOYG8RtVsmMQEqD8Vaf5lJZ7NYYr1fUEKG5Em4ZW61nhQtAFpK8VtCznbbugpjer3JAAVIumc5FOP5yyFXewM8SDhW6U2f",
}
const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}
export default reducer;