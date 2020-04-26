
export const type = {
    SEARCH_SONG:'SEARCH_SONG',
    PLAY:'PLAY',
    PLAY_Pause:'PLAY_Pause'
}

export function searchSong(value) {
    return {
        type: type.SEARCH_SONG,
        value
    }
}

export function playSong(value) {
    return {
        type: type.PLAY,
        value
    }
}

