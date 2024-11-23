class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        const newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            return this._searchNode(node.left, key);
        } else if (key > node.key) {
            return this._searchNode(node.right, key);
        } else {
            return node;
        }
    }

    delete(key) {
        this.root = this._deleteNode(this.root, key);
    }

    _deleteNode(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = this._deleteNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this._deleteNode(node.right, key);
            return node;
        } else {
            // Node with only one child or no child
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            // Node with two children: get the inorder successor (smallest in the right subtree)
            node.key = this._minValueNode(node.right).key;
            node.right = this._deleteNode(node.right, node.key);
            return node;
        }
    }

    _minValueNode(node) {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    inorder() {
        this._inorderNode(this.root);
        console.log('');
    }

    _inorderNode(node) {
        if (node !== null) {
            this._inorderNode(node.left);
            process.stdout.write(node.key + ' ');
            this._inorderNode(node.right);
        }
    }
}

// Exemplo de uso:
const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(40);
bst.insert(70);
bst.insert(60);
bst.insert(80);

console.log('Tree : ' + bst.root._minValueNode)

console.log("Inorder traversal of the given tree:");
bst.inorder();

console.log("Delete 20:");
bst.delete(20);
console.log("Inorder traversal of the modified tree:");
bst.inorder();

console.log("Delete 30:");
bst.delete(30);
console.log("Inorder traversal of the modified tree:");
bst.inorder();

console.log("Delete 50:");
bst.delete(50);
console.log("Inorder traversal of the modified tree:");
bst.inorder();

console.log("Search for 60:");
const foundNode = bst.search(60);
if (foundNode) {
    console.log(`Node with key 60 found: ${foundNode.key}`);
} else {
    console.log("Node with key 60 not found");
}
