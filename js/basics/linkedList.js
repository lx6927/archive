// 插入节点：前一个节点指向插入的节点；插入的节点指向后一个节点
// 删除节点：待删除节点的前一个节点指向待删除节点的后一个节点；待删除节点元素指向null
"use strict";

// 单链表
class Node {
	constructor(data) {
		this.data = data || null;
		this.next = null;
	}

	// changeNext = (next) => {
	// 	this.next = next;
	// }
	//
	// getNextNode = () => {
	// 	return this.next;
	// }
}

class LinkedList {
	length = 0;
	head = new Node(null); // 头节点为空
	p = this.head; // 指针，指向最后一个节点

	find = (node) => {
		let current_node = this.head;
		while (current_node.next) {
			current_node = current_node.next;
		}
		for (let i = 0; i < this.length; i++) {
			if (i > 1) current_node = current_node.next;
			if (current_node === node) return node;
		}
	};

	// 插入
	insert = (data, insert_node) => {

		let new_node = new Node(data);
		let p = this.head;
		this.length++;

		if (this.length === 1) {
			this.head.next = new_node;
		} else if (insert_node !== undefined) {
			let _insert_node = this.find(insert_node);
			new_node.next = _insert_node.next;
			_insert_node.next = new_node;
		} else {
			this.p.next = new_node;
		}
		// if (this.length === 1) insert_node = this.head;
		// if (insert_node === undefined) insert_node = this.p;
		// this.p.next = insert_node;
		// this.p = insert_node;
		return new_node;
	};

	remove = () => {

	}
}

let LList = new LinkedList();
let node = LList.insert('test');
// LList.find(node)
let node2 = LList.insert('test111');
// let node3 = LList.insert('test333', node);
console.log(node, node2, LList);
