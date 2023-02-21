// 1 --> 2 --> 3 --> 4 --> null
// Asi se muestra la linkedList
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNodo = new Node(value)
        this.tail.next = newNodo
        this.tail = newNodo
        this.length++
    }
    prepend(value){
        const newNode = Node(value);
        newNode.next = this.head
        this.head = newNode
        this.length ++
        return this
    }
    insert(index, value) {
        if (index >= this.length){
            return this.append(value)
        }
        const newNode = new Node(value);
        const firtsPointer = this.getTheIndex(index -1);
        const holdingPointer = firstPointer.next
        firtsPointer.next = newNode
        newNode.next = holdingPointer

        this.length ++
        return this
    }
    getTheIndex(index){
        let cont = 0;
        let currentNode = this.head;

        while (cont !== index){
            currentNode = currentNode.next
            cont++
        }
        return currentNode;
    }
}

const linkedList = new MySinglyLinkedList(1);
linkedList.append(2)
console.log(linkedList)