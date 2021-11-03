function findMatching (inArray, inName) {
    const matchingDrivers = inArray.filter (function (name) {
    return name.toLowerCase() === inName.toLowerCase()
    })
    return matchingDrivers
}

function fuzzyMatch (inArray, inLetters) {
    const lengthCheck = inLetters.length
    const matchingDrivers = inArray.filter (function (name) {
        return name.substring (0, lengthCheck) === inLetters} )
        return matchingDrivers
}

function matchName (inArray, inName) {
    const matchingDrivers = inArray.filter (function(pers) {
        return pers.name === inName
    })
    return matchingDrivers
}