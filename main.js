/* Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

Doctor's name
Specialty (Oncologist, pediatrician, etc...)
Address of practice */



const createDoctorList = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty,
        address: address
    }
}

/* Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

Pet name
Pet breed
Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels */

const createPetObj = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}
let bowWowKennels = []

bowWowKennels.push(createPetObj("Angus", "Australian Shepard"))
bowWowKennels.push(createPetObj("Queenie", "Irish Setter"))
bowWowKennels.push(createPetObj("Gretchen", "Norwegian Elkhound"))
bowWowKennels.push(createPetObj("Johnny P", "Lab"))

console.log(bowWowKennels)


let jumpStop = []
let chatten = []
let polar = []

const createBluegrassArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}
jumpStop.push(createBluegrassArtist("Bruce Atikins", "Country", 23))
jumpStop.push(createBluegrassArtist("Bartholomew Danielson", "Bluegrass", 23))
jumpStop.push(createBluegrassArtist("Avilee Dallas", "Country", 19))

const createFunkArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}
chatten.push(createFunkArtist("Dre Funkz", "Funk", 25))
chatten.push(createFunkArtist("Dusta Grimes", "Rap", 21))
chatten.push(createFunkArtist("Loyonce Branis", "Rap", 27))
const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}
polar.push(createPopArtist("Jensen Brown", "Pop", 20))
polar.push(createPopArtist("Austin Kinkaid", "Pop", 22))

console.log(polar, chatten, jumpStop)