function findLeapYears(startingYear, endingYear) {
    for (var i = startingYear; i < endingYear; i++) {
        if (i % 100 === 0) {
            if (i % 400 === 0) {
                console.log(‘the year is : ’ + i);
            }
        } else if (i % 4 === 0) {
            console.log(‘the year is : ’ + i);
        }
    }
}

findLeapYears(1888, 2017);