let subs: number|  string = '1M' // this is union type which means subs can be of type number or string


let apiRequestStatus: 'success' | 'failure' | 'pending' = 'pending' // this is union type which means apiRequestStatus can be of type 'success' or 'failure' or 'pending'

apiRequestStatus = 'success' // this is valid

apiRequestStatus = 'error' // this not valid because apiRequestStatus can only be 'success' or 'failure' or 'pending' but not any other string value


const orders = ['120', '121', '122'] 

let currentorder: string | undefined

for (let order of orders) {
    if (order === '120') {
        currentorder = order;
        break;
    }
    currentorder = '23'
}
console.log(currentorder)