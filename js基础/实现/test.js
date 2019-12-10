async function test() {
    try {
        await new Promise((resolve, reject) => {
            reject('2')
        }).catch(err => {
            console.log(`catch${err}`)
        })
    } catch(err) {
        console.log(err)
    }
} 

test()