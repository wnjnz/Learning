interface INode {
    data: number;
    next: INode | null;
  }

  class LinkedList {
    private _head: INode | null;
    private _length = 0;


    public pop() { //remove the last item in the list, return the item you popped

    }

    public remove(index: number) { //goes to the index and removes it
      if (index < 0 || index > this._length) throw new Error("Invalid Index");
      else {
        let currNode = this._head;
        let previousNode = null;
        let currentIndex = 0;

        while(currentIndex < index - 1){
          previousNode = currNode;
          currNode = currNode.next;
          currentIndex++;
        }

        previousNode.next = currNode.next;

        this._length--;
      }
    }

    public insert(value: number, index: number) {
        if (index < 0 || index > this._length) throw new Error("Invalid Index");

        if (index === 0 ){
            this.prepend(value);
        } else if (index === this._length){
            this.append(value);
        } else {
            let currNode = this._head;
            let currentIndex = 0;

            while (currentIndex < index - 1 ){
                currNode = currNode.next;
                currentIndex++;
            }

            const newNode = this.createNode(value);

            newNode.next = currNode.next;
            currNode.next = newNode;

            this._length++;
        }
    }


    public prepend(value: number) {
      const node = this.createNode(value);

      if (!this._head) {
        this._head = node;
      } else {
        node.next = this._head;
        this._head = node;
      }

      this._length++;
    }

    public append(value: number) {
      const newNode = this.createNode(value);
      let currNode = this._head;

      if (this._head == null) {
        this._head = newNode;
      } else {
        while (currNode.next) {
          currNode = currNode.next;
        }
        currNode.next = newNode;
      }
      this._length++;
    }

    public toString() {
      let result: string = "";
      let node: INode | null = this._head;

      while (node) {
        result += `${node.data} -> `;

        node = node.next;
      }

      result += "nil";

      return result;
    }

    public recToString() {
      return this.recToStringHelper(this._head);
    }

    private recToStringHelper(node: INode | null, str: string = "") {
      if (!node) return (str += "nil");

      return this.recToStringHelper(node.next, (str += `${node.data} -> `));
    }

    private createNode(value: number) {
      return {
        data: value,
        next: null
      };
    }
  }

  var list = new LinkedList();

  //list.prepend(5);
  list.append(10);
  list.append(15);
  list.append(30);
  list.append(35);
  list.append(40);

  list.insert(37 , 4);

  list.remove(0);

  console.log(list.toString()); /*?*/