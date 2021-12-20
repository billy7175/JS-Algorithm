


let array = [
    { name: '1.프로젝트X' },
    { name: '프로젝트X' },
    { name: 'apple project' },
    { name: 'Apple Porject' },
    { name: '2.프로젝트X' },
    { name: 'Face-Book Project' },
    { name: '훈민정음 프로젝트' },
    { name: '자바스크립트 정렬 ' },
    { name: 'fire-base-project ' },
    { name: '자바스크립트 정렬 ' }
]
array.sort(sortByASCII).sort(sortBySameChar)

function sortByASCII(a, b) {
    const sortByASCII = a.name[0].toUpperCase().charCodeAt() < b.name[0].toUpperCase().charCodeAt()
    if (sortByASCII) return -1
    else return 0
}
function sortBySameChar(a, b) {
    const sortBySameChar = b.name[0].charCodeAt() - a.name[0].charCodeAt() === 32
    if (sortBySameChar) return -1
    else return 0
}

console.log(array)