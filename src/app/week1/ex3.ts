const firstItem = <H>(items: H[]): H | null => {
    return items.length > 0 ? items[0] : null;
}

const arrNumberDemo : number[] = [1, 2, 3, 4, 5];
const arrStringDemo : string[] = ['a', 'b', 'c', 'd', 'e'];

console.log(firstItem(arrNumberDemo));
console.log(firstItem(arrStringDemo));
