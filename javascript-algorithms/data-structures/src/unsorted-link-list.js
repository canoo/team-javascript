
function UnsortedLinkedList() {
    this.value = undefined;
    this.rest = undefined;
}

UnsortedLinkedList.prototype.size = function () {
    if (this.value === undefined) {
        return 0;
    }
    return 1 + (this.rest === undefined ? 0 : this.rest.size());
};

UnsortedLinkedList.prototype.contains = function (value) {
    if (this.value === value) {
        return true;
    }
    if (this.rest === undefined) {
        return false;
    }
    return this.rest.contains(value);
};

UnsortedLinkedList.prototype.insert = function (value) {

    function clone(list) {
        var result = new UnsortedLinkedList();
        result.value = list.value;
        result.rest = list.rest;
        return result;
    }
    if (this.value === undefined) {
        this.value = value;
        this.rest = new UnsortedLinkedList();
    } else {
        this.rest = clone(this);
        this.value = value;
    }
};

UnsortedLinkedList.prototype.remove = function (value) {
    if (this.value === value) {
        this.value = this.rest.value;
        this.rest = this.rest.rest;
    } else if (this.rest !== undefined) {
        this.rest.remove(value);
    }
};
