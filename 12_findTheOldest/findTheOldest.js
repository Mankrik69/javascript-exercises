const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
        if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();

        if (person.yearOfDeath - person.yearOfBirth >
            oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person;
        }

        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
