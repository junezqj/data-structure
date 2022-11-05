const assert = require('assert')


/**
 * 链表节点
 */
class Node {
  next
  val

  constructor(val) {
    this.val = val
    this.next = null
  }
}


/**
 * 链表
 */
class LinkedList {
  head
  length

  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 往末尾追加元素
   *
   * @param val 元素
   */
  push(val) {
    // TODO
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
    } else {
      let h = this.head
      while (h.next != null) {
        h = h.next
      }
      h.next = newNode
    }
    this.length++
  }

  /**
   * 插入元素到指定下标
   *
   * @param i 下标
   * @param val 元素
   */
  insert(i, val) {
    // TODO
    if (this.length <= i) {
      this.push(val)
    } else {
      let pre = this.head
      for (let index = 1; index < i - 1; index++) {
        pre = pre.next
      }
      let curr = pre.next
      let newNode = new Node(val)
      pre.next = newNode
      newNode.next = curr
      this.length++
    }
  }

  /**
   * 查找元素, 存在时返回其下标, 否则返回 -1
   *
   * @param val 元素
   * @return 存在时返回其下标, 否则返回 -1
   */
  indexOf(val) {
    // TODO
    if (this.length === 0) return -1
    let curr = this.head
    for (let i = 0; i < this.length; i++) {
      if (curr.val === val) {
        return i
      }
      curr = curr.next
    }
    return -1
  }

  /**
   * 移除下标对应的节点
   *
   * @param i 下标
   * @return 成功返回 true, 失败返回 false
   */
  remove(i) {
    if (this.length < i) return false
    if (i === 0 && this.head) {
      this.head = this.head.next
      this.length--
      return true
    }
    let pre = this.head
    for (let index = 1; index < i; index++) {
      pre = pre.next
    }
    let curr = pre.next
    if (this.length === i) {
      pre.next = null
    } else {
      let next = curr.next
      pre.next = next
    }
    this.length--
    return true
  }

  /**
   * toString()
   */
  toString() {
    let h = this.head
    if (h === null) {
      return '[]'
    }

    let s = '['
    while (h) {
      s += h.val + ', '
      h = h.next
    }
    return s.substring(0, s.length - 2) + ']'
  }
}


function test() {
  const list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)
  assert.strictEqual(list.toString(), '[1, 2, 3, 4, 5]')


  // insert

  list.insert(1, 8)
  assert.strictEqual(list.toString(), '[1, 8, 2, 3, 4, 5]')

  list.insert(3, 3)
  assert.strictEqual(list.toString(), '[1, 8, 2, 3, 3, 4, 5]')

  list.insert(8, 1)
  assert.strictEqual(list.toString(), '[1, 8, 2, 3, 3, 4, 5, 1]')


  // indexOf

  assert.strictEqual(list.indexOf(8), 1)
  assert.strictEqual(list.indexOf(9), -1)
  assert.strictEqual(list.indexOf(2), 3)


  // remove

  assert.strictEqual(list.remove(9), false)
  assert.strictEqual(list.remove(8), false)
  assert.strictEqual(list.toString(), '[1, 8, 2, 3, 3, 4, 5, 1]')
}

test()
