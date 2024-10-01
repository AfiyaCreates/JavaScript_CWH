// promise api 6 methods

// different processes are resolving at different time but we want to print their values at same time (together)..we use promise api
        let p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("value 1")
            }, 1000)
        })

        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("value 2")
            }, 2000)
        })

        let p3 = new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve("value 3")
            }, 3000)
        })

        // p1.then((value) => {
        //     console.log(value)
        // })
        // p2.then((value) => {
        //     console.log(value)
        // })
        // p3.then((value) => {
        //     console.log(value)
        // })

        // promise.all
        let promise_all = Promise.all([p1,p2,p3])
        promise_all.then((value)=>{
            console.log(value)   // will print an array- the values of the processes at sme time
        })

        //promise.allsettled...even if one of the process is rejected it prints the rest processes values 
