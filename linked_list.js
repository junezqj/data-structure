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
  }

  /**
   * 插入元素到指定下标
   *
   * @param i 下标
   * @param val 元素
   */
  insert(i, val) {
    // TODO
  }

  /**
   * 查找元素, 存在时返回其下标, 否则返回 -1
   *
   * @param val 元素
   * @return 存在时返回其下标, 否则返回 -1
   */
  find(val) {
    // TODO
    return -1
  }

  /**
   * 移除下标对应的节点
   *
   * @param i 下标
   * @return 成功返回 true, 失败返回 false
   */
  remove(i) {
    return false
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


function main() {
  const list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)

  console.log(list.toString()) // [1, 2, 3, 4, 5]


  // a little tips
  {
    const list = new LinkedList()
    let a = new Node(1)
    let b = new Node(2)
    let c = new Node(3)
    let d = new Node(4)
    let e = new Node(5)

    a.next = b
    b.next = c
    c.next = d
    d.next = e

    list.head = a

    console.log(list.toString()) // [1, 2, 3, 4, 5]
  }
}

main()
