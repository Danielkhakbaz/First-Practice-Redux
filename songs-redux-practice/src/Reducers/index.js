import { combineReducers } from "redux";

export const songsReducers = () => {
    return [
        { id: 1, title: "No Scrubs", duration: "4:05" },
        { id: 2, title: "All Star", duration: "3:15" },
        { id: 3, title: "I Want it That Way", duration: "2:45" },
        { id: 4, title: "Ode To Sleep", duration: "3:46" },
    ];
};
export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    }
    return selectedSong;
};
export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer,
});
