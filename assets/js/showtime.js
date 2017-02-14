var update;

(update = function() {
    var now = moment().format('X');
    document.getElementById("sv")
        .innerHTML = moment("20170628 10:00", "YYYYMMDD hh:mm")
                     .format('X') - now;
    /*   moment("20170628 08:00", "YYYYMMDD hh:mm").format('X')
     * - moment("20170214 08:00", "YYYYMMDD hh:mm").format('X')
     * === 115776
     * */
    document.getElementById("bar")
        .style.width = (100 - (moment("20170628 10:00", "YYYYMMDD hh:mm")
        .format('X') - now) / 115776).toString() + "%";
    document.getElementById("ma")
        .innerHTML = moment("20170619 08:00", "YYYYMMDD hh:mm")
                     .format('X') - now;
    document.getElementById("aa")
        .innerHTML = moment("20170628 08:00", "YYYYMMDD hh:mm")
                     .format('X') - now;
    document.getElementById("me")
        .innerHTML = moment("20170627 08:00", "YYYYMMDD hh:mm")
                     .format('X') - now;
})();

setInterval(update, 1000);

