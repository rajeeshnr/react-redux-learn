import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'Smells like teen spirit', duration: '3:60'},
        {title: 'Unforgiven', duration: '4:30'},
        {title: 'I disappear', duration: '5:60'},
        {title: 'Come as you are', duration: '3:20'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});