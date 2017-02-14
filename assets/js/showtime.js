var sv_time = moment("20170628 10:00", "YYYYMMDD hh:mm")
var ma_time = moment("20170619 08:00", "YYYYMMDD hh:mm")
var aa_time = moment("20170628 08:00", "YYYYMMDD hh:mm")
var me_time = moment("20170627 08:00", "YYYYMMDD hh:mm")
document.getElementById("ma_bar")
    .style.width = (100 - sv_time.diff(ma_time) / 115776000)
    .toString() + "%";
document.getElementById("aa_bar")
    .style.width = (100 - sv_time.diff(aa_time) / 115776000)
    .toString() + "%";
document.getElementById("me_bar")
    .style.width = (100 - sv_time.diff(me_time) / 115776000)
    .toString() + "%";

var update;

(update = function() {
    var now = moment();

    var sv_dur = moment.duration(sv_time.format('x') - now.format('x'));
    document.getElementById("sv")
        .innerHTML = Math.floor(sv_dur.asDays()) + "d "
                     + ("0" + sv_dur.hours()).slice(-2) + "h "
                     + ("0" + sv_dur.minutes()).slice(-2) + "m "
                     + ("0" + sv_dur.seconds()).slice(-2) + "s";

    var ma_dur = moment.duration(ma_time.format('x') - now.format('x'));
    document.getElementById("ma")
        .innerHTML = Math.floor(ma_dur.asDays()) + "d "
                     + ("0" + ma_dur.hours()).slice(-2) + "h "
                     + ("0" + ma_dur.minutes()).slice(-2) + "m "
                     + ("0" + ma_dur.seconds()).slice(-2) + "s";

    var aa_dur = moment.duration(aa_time.format('x') - now.format('x'));
    document.getElementById("aa")
        .innerHTML = Math.floor(aa_dur.asDays()) + "d "
                     + ("0" + aa_dur.hours()).slice(-2) + "h "
                     + ("0" + aa_dur.minutes()).slice(-2) + "m "
                     + ("0" + aa_dur.seconds()).slice(-2)+ "s";

    var me_dur = moment.duration(me_time.format('x') - now.format('x'));
    document.getElementById("me")
        .innerHTML = Math.floor(me_dur.asDays()) + "d "
                     + ("0" + me_dur.hours()).slice(-2) + "h "
                     + ("0" + me_dur.minutes()).slice(-2) + "m "
                     + ("0" + me_dur.seconds()).slice(-2) + "s";

    /*   moment("20170628 08:00", "YYYYMMDD hh:mm").format('X')
     * - moment("20170214 08:00", "YYYYMMDD hh:mm").format('X')
     * === 115776
     * */
    document.getElementById("sv_bar")
        .style.width = (100 - sv_time.diff(now) / 115776000)
        .toString() + "%";
})();

setInterval(update, 1000);

