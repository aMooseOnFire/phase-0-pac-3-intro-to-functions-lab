function shout (string) {
    return string.toUpperCase()
}
function whisper (string) {
    return string.toLowerCase ()
}
function logShout (string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate (string) {
let cantHear = `I can't hear you!`
let yesIndeed = `YES INDEED!`
let loveTo = `I would love to!`
if (string === string.toLowerCase()) {
    return cantHear
}
else if (string === string.toUpperCase()) {
    return yesIndeed
}
else if (string === `Let's have dinner together!`) {
    return loveTo
}
}