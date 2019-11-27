const arr = [0,13,14,3]

var primo = (n) => {
    if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    } else {
        for (let i = 2; i < n; n++) {
            if (n % i === 0) return false
        }
    }
    return true;
}

var x = arr.filter(primo)

console.log(x)