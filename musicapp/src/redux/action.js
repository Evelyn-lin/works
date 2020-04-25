export const type = {
    SEARCH_SONG:'SEARCH_SONG'
}

export function searchSong(value) {
    return {
        type: type.SEARCH_SONG,
        value
    }
}