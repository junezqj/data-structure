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
      while (h.next) {
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
    let newNode = new Node(val)

    // insert to head
    if (i === 0) {
      newNode.next = this.head
      this.head = newNode
      this.length++
      return
    }

    // insert to tail
    if (i > this.length) {
      i = this.length
    }

    let curr = this.head
    for (let index = 1; index < i; index++) {
      curr = curr.next
    }
    let next = curr.next
    curr.next = newNode
    newNode.next = next

    this.length++
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
    if (this.length - 1 < i) return false
    if (i === 0) {
      this.head = this.head.next
      this.length--
      return true
    }
    let pre = this.head
    for (let index = 2; index <= i; index++) {
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
  list.insert(2, 100)
  assert.strictEqual(list.toString(), '[1, 2, 100, 3, 4, 5]')

  list.insert(1, 100)
  assert.strictEqual(list.toString(), '[1, 100, 2, 100, 3, 4, 5]')

  list.insert(0, 100)
  assert.strictEqual(list.toString(), '[100, 1, 100, 2, 100, 3, 4, 5]')

  list.insert(7, 100)
  assert.strictEqual(list.toString(), '[100, 1, 100, 2, 100, 3, 4, 100, 5]')

  list.insert(9, 100)
  assert.strictEqual(list.toString(), '[100, 1, 100, 2, 100, 3, 4, 100, 5, 100]')

  list.insert(1000, 1000)
  assert.strictEqual(list.toString(), '[100, 1, 100, 2, 100, 3, 4, 100, 5, 100, 1000]')

  assert.strictEqual(list.length, 11)


  // indexOf

  assert.strictEqual(list.indexOf(3), 5)
  assert.strictEqual(list.indexOf(100), 0)
  assert.strictEqual(list.indexOf(1000), 10)


  // remove
  assert.strictEqual(list.remove(11), false)

  assert.strictEqual(list.remove(5), true)
  assert.strictEqual(list.toString(), '[100, 1, 100, 2, 100, 4, 100, 5, 100, 1000]')

  assert.strictEqual(list.remove(0), true)
  assert.strictEqual(list.toString(), '[1, 100, 2, 100, 4, 100, 5, 100, 1000]')

  assert.strictEqual(list.remove(list.length - 1), true)
  assert.strictEqual(list.toString(), '[1, 100, 2, 100, 4, 100, 5, 100]')
}

test()
