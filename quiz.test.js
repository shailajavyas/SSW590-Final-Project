const pickCity = require('./routes/quiz');
const getPoints = require('./routes/quiz');
const usersName = require('./routes/quiz');

// function testing

test("Picks City Type", () => {
    let city = pickCity.city(["Barcelona, Spain", "Paris, France", "New York City, USA"]);
    expect(typeof city).toBe("string");
})

// test("Gets Points", () => {
//     let points = getPoints
// })

test("Correct Title", () => {
    let name = "Shailaja";
    let title = usersName.title(name);
    expect(title).toEqual("Shailaja's Recomendations");
})

test("Picks City", () => {
    let city = pickCity.city(["Bangalore, India", "Dallas, USA"]);
    try {
        expect(city).toBe("Bangalore, India")
    }
    catch {
        expect(city).toBe("Dallas, USA")
    }
})