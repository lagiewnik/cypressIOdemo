let promise = new Promise ((resolve, reject) => {
    let a = 2
    if (a == 2) {
        resolve('Promise Fulfilled')
    }
    else {
        reject('Promise  NOT Fulfilled')
    }
})

promise.then((message) =>
{
    console.log(message + ', promise has passed!')
}).catch((message) => {
    console.log(message + ', promise has failed!')
})