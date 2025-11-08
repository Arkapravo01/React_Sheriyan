const circle={
    radius:1,
    draw(){
        console.log('Draw')
    }
}

// const another ={}

// for(let key in circle){
//     another[key]=circle[key]
// }

// console.log(another)

const another = {...circle}
let arr=[1,2,3]
let nArr=[...arr]


console.log(nArr)