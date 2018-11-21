// 插入节点：前一个节点指向插入的节点；插入的节点指向后一个节点
// 删除节点：待删除节点的前一个节点指向待删除节点的后一个节点；待删除节点元素指向null
// redis中的一种存储结构用的就是list

// https://images2015.cnblogs.com/blog/724459/201704/724459-20170416135734102-10090857.jpg
class Node {
	constructor(data) {
		this.data = data || null;
		this.next = null;
	}

	changeNext = (next) => {
		this.next = next;
	}

	getNextNode = () => {
		return this.next;
	}
}

class LinkedList {
	length = 0;
	head = new Node("head");
	// this.remove = remove;

	find = (node) => {

	};

	insert = (data, insert_node) => {
		let new_node = new Node(data);
		length++;
		if (length === 1) {
			//head ->new_node
			this.head.next = new_node;
		} else {
			let current_node = this.find(insert_node);


		}
	};


}
