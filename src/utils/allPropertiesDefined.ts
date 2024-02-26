function allPropertiesDefined(obj: any) {
    for (let chave in obj) {
        if (obj[chave] === undefined) {
            return false;
        }
    }
    return true;
}

export { allPropertiesDefined }