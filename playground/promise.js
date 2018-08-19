var aysncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(()=> {

            if (typeof a === 'number' ) {

                resolve(a + b);
            } else {
                reject('input needs to be a number');
            }

        }, 2000);
    });
};



aysncAdd(1,3).then((data)=>{

    //success here
    console.log(data);
}).then((data) => {
    console.log("good chaining here");
}).catch((error) => {
    console.log("error: "+error);
});
/*
var promise = new Promise((resolve, reject) => {

    setTimeout(() => {
       // resolve('it worked');

        reject('did not works!!');

    }, 2000);


});

promise.then((message)=> {

    console.log(message);

}, (error)=>{

    console.log(error);
} );

*/