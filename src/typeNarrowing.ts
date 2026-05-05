function getAnkit(kind: string | number){
    if(typeof kind === 'string'){
        return `Ankit is a ${kind} person...`;
    }
    return `Ankit is ${kind} years old...`;
}

