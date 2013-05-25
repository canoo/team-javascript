
function UnsortedDoubleLinkedList() {
    this.value = undefined;
    this.prev = undefined;
    this.next = undefined;
}

UnsortedDoubleLinkedList.prototype.size = function () {
    if (this.value === undefined) {
        return 0;
    }
    return 1 + (this.next === undefined ? 0 : this.next.size());
};

UnsortedDoubleLinkedList.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    }
    if (this.next === undefined) {
        return false;
    }
    return this.next.contains(value);
};

UnsortedDoubleLinkedList.prototype.insert = function (value) {

    if (this.value === undefined) {
        this.value = value;
        this.next = new UnsortedDoubleLinkedList();
        this.next.prev = this;
    } else {
        var newElement = new UnsortedDoubleLinkedList();
        newElement.value = this.value;
        newElement.next = this.next;
        newElement.prev = this;
        this.next.prev = newElement;
        this.next = newElement;
        this.value = value;
    }
};

UnsortedDoubleLinkedList.prototype.remove = function (value) {
    if (this.value === value) {
        if (this.prev === undefined) {
            // we are removing head element
            this.value = this.next.value;
            this.next = this.next.next;
        } else {
            this.prev.next = this.next;
            this.next.prev = this.prev;
        }
    } else if (this.next !== undefined) {
        this.next.remove(value);
    }
};
