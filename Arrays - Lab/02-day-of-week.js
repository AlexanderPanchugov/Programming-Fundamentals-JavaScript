function dayOfWeeks(nameDay) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (nameDay < 1 || nameDay > 7) {
        console.log('Invalid day!');
    } else {
        console.log(days[nameDay - 1])
    }

}

dayOfWeeks(11)