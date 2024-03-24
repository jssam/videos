// Algorithm DeleteLastNode(list):
//     if list is empty or has only one node
//         return null
    
//     current = list.head
//     previous = null

//     while current.next is not null
//         previous = current
//         current = current.next

//     previous.next = null
//     return list

function deleteLastNode() {
    if (!this.head || !this.head.next) {
        this.head = null;
        return;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
        previous = current;
        current = current.next;
    }

    previous.next = null;
}