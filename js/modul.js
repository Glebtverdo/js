function remake(str) {
    str = str.split(" ")
    str = str.filter((x) => x != "")
    return str
}
export function wordsCount(str) {
    return remake(str).length
}

export function* getWords(str) {
    str = remake(str)
    for (let i = 0; i < str.length; i++) {
        yield str[i]
    }

}