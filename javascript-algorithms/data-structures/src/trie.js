
function Trie(value, isConcrete) {

    this.children = [];
    this.value = value;
    this.isConcrete = !!isConcrete;

}

Trie.prototype.find = function search(value) {
    var head, tail, child;
    if (value === undefined || value === null || value.length === 0) {
        return false;
    }

    head = value.charAt(0);
    tail = value.substring(1);

    child = this.children.filter(function (e) {
        return e.value === value && e.isConcrete;
    })[0];// unwrap from array

    if (value.length === 1) {
        return child;
    } else if (child === undefined) {
        return undefined;
    } else {
        return child.find(tail);
    }
};

Trie.prototype.contains = function search(value) {
    return !!this.find(value);
};

Trie.prototype.insert = function insert(value) {
    var newTrie, tail;
    if (value === undefined) {
        throw new Error("Cannot insert undefined");
    }
    if (value === null) {
        throw new Error("Cannot insert null");
    }
    if (value.length == 1) {
        this.children.push(new Trie(value, true));
    } else {
        newTrie = new Trie(value.charAt(0), false);
        tail = value.substring(1);
        newTrie.insert(tail) ;
        this.children.push(newTrie);
    }
};
Trie.prototype.delete = function search(value) {

};
