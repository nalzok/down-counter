var update;

(update = function() {
    document.getElementById("sv")
        .innerHTML = ((moment("20170628 10:00", "YYYYMMDD hh:mm").format('x')
                      - moment().format('x')) / 1000).toFixed(3);
    document.getElementById("ma")
        .innerHTML = ((moment("20170619 08:00", "YYYYMMDD hh:mm").format('x')
                      - moment().format('x')) / 1000).toFixed(3);
    document.getElementById("aa")
        .innerHTML = ((moment("20170628 08:00", "YYYYMMDD hh:mm").format('x')
                      - moment().format('x')) / 1000).toFixed(3);
    document.getElementById("me")
        .innerHTML = ((moment("20170627 08:00", "YYYYMMDD hh:mm").format('x')
                      - moment().format('x')) / 1000).toFixed(3);
})();

setInterval(update, 1);

