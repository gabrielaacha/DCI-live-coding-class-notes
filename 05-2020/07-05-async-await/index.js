// promise

const userStatus = new Promise (resolve, reject) => {

    let hasKids = false;
    let hasDog= false;
    if (hasDog) {

        resolve({
            status: "User is cool",
            emoji: "v",

        });

    }else if (hasKids) {
        resolve ({status: "User is going crays",
    emoji:"v",});



    } else {
        reject ({status: "User is alone",
        emoji:"v",});


    }
};

userStatus.then((obj) =>{ document.querySelector(".result").innerHTML = `${obj.status} and he/she is ${obj.emoji}`})
.catch((err) => {
    document.querySelector(".result")
})