function superbowlWin(record) {
    let win = record.find( (arr) => arr.result === 'W');
    if( win === undefined) {
        return win;
    }else {
        return win.year;

    }
}
