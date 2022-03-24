
const fs = require("fs");

fs.readFile("./blog1.txt", (err, data) => {
    console.log(data.toString());
})

fs.readFile("./blog1.txt", (err, data) => {
    if (err) {
        return
    }
    data = data.toString()
    data = data.replace("Hallo Welt", "Hallo Supercoder")

    fs.writeFile("./blog1.txt", data, (err) => {
        if (err) { console.log(err); }
    })

})

fs.writeFile("./blog2.txt", "Hallo Wien", (err) => {
    if (err) { return }
})

if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) { return }
    })
} else {
    fs.rmdir("./assets", (err) => {
        if (err) { return }
    })
}

if (!fs.existsSync("./delete.txt")) {
    fs.writeFile("./delete.txt", "", (err) => {
        if (err) {
            console.log(err);
            return
        }
    })
} else {
    fs.unlink("./delete.txt", (err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}

if (!fs.existsSync("./Hello.txt")) {
    fs.writeFile("./Hello.txt", "Hello, dies ist Text", (err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}


if (fs.existsSync("./HelloWorld.txt")) {
    fs.unlink("./HelloWorld.txt", (err) => {
        if (err) {
            console.log(err);
            return
        } else {
            return
        }
    })
}

fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => {
    if (err) {
        console.log(err);
        return
    }
})

