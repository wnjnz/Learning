var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this._length = 0;
    }
    LinkedList.prototype.pop = function () {
    };
    LinkedList.prototype.remove = function (index) {
        if (index < 0 || index > this._length)
            throw new Error("Invalid Index");
        else {
            var currNode = this._head;
            var previousNode = null;
            var currentIndex = 0;
            while (currentIndex < index - 1) {
                previousNode = currNode;
                currNode = currNode.next;
                currentIndex++;
            }
            previousNode.next = currNode.next;
            this._length--;
        }
    };
    LinkedList.prototype.insert = function (value, index) {
        if (index < 0 || index > this._length)
            throw new Error("Invalid Index");
        if (index === 0) {
            this.prepend(value);
        }
        else if (index === this._length) {
            this.append(value);
        }
        else {
            var currNode = this._head;
            var currentIndex = 0;
            while (currentIndex < index - 1) {
                currNode = currNode.next;
                currentIndex++;
            }
            var newNode = this.createNode(value);
            newNode.next = currNode.next;
            currNode.next = newNode;
            this._length++;
        }
    };
    LinkedList.prototype.prepend = function (value) {
        var node = this.createNode(value);
        if (!this._head) {
            this._head = node;
        }
        else {
            node.next = this._head;
            this._head = node;
        }
        this._length++;
    };
    LinkedList.prototype.append = function (value) {
        var newNode = this.createNode(value);
        var currNode = this._head;
        if (this._head == null) {
            this._head = newNode;
        }
        else {
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = newNode;
        }
        this._length++;
    };
    LinkedList.prototype.toString = function () {
        var result = "";
        var node = this._head;
        while (node) {
            result += node.data + " -> ";
            node = node.next;
        }
        result += "nil";
        return result;
    };
    LinkedList.prototype.recToString = function () {
        return this.recToStringHelper(this._head);
    };
    LinkedList.prototype.recToStringHelper = function (node, str) {
        if (str === void 0) { str = ""; }
        if (!node)
            return (str += "nil");
        return this.recToStringHelper(node.next, (str += node.data + " -> "));
    };
    LinkedList.prototype.createNode = function (value) {
        return {
            data: value,
            next: null
        };
    };
    return LinkedList;
}());
var list = new LinkedList();
//list.prepend(5);
list.append(10);
list.append(15);
list.append(30);
list.append(35);
list.append(40);
list.insert(37, 4);
list.remove(0);
console.log(list.toString()); /*?*/
