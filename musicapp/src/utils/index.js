export default {
    getDuration(time) {
        let m = parseInt(time/60);
        m = m < 10 ? '0' + m : m;
        let s = time % 60;
        s = s < 10 ? '0' + s : s;
        return m + ':' + s
    }
}