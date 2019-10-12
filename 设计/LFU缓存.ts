/*
设计并实现最不经常使用（LFU）缓存的数据结构。它应该支持以下操作：get 和 put。

get(key) - 如果键存在于缓存中，则获取键的值（总是正数），否则返回 -1。
put(key, value) - 如果键不存在，请设置或插入值。当缓存达到其容量时，它应该在插入新项目之前，使最不经常使用的项目无效。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，最近最少使用的键将被去除。

进阶：
你是否可以在 O(1) 时间复杂度内执行两项操作？

示例：

LFUCache cache = new LFUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回 1
cache.put(3, 3);    // 去除 key 2
cache.get(2);       // 返回 -1 (未找到key 2) 
cache.get(3);       // 返回 3
cache.put(4, 4);    // 去除 key 1
cache.get(1);       // 返回 -1 (未找到 key 1)
cache.get(3);       // 返回 3
cache.get(4);       // 返回 4
 */

class LFUCache {
  private kv: IKV = {};
  private countList = new LinkedList<ICountNodeValue>();
  private size = 0;

  constructor(private capacity) {
  }

  public get(key: string | number) {
    if (this.kv[key] === undefined) {
      return -1;
    }
    this.liftKey(key);
    return this.kv[key].keyNode.value.value;
  }

  public put(key: string | number, value: number) {
    if (this.capacity === 0) {
      return;
    }
    // key存在
    if (this.kv[key] !== undefined) {
      this.kv[key].keyNode.value.value = value;
      this.liftKey(key);
      return;
    }

    if (this.size === this.capacity) {
      // 满容量
      this.remove();
    }

    let countOneNode = this.countList.getHead();

    // 检查countOneNode的频率是否为一
    if (!countOneNode || countOneNode.value.count !== 1) {
      // 新增频率为一个countNode
      countOneNode = {
        prev: null,
        next: null,
        value: {
          count: 1,
          keyList: new LinkedList()
        }
      }
      this.countList.addAtHead(countOneNode);
    }

    const keyNode: IKeyNode = {
      prev: null,
      next: null,
      value: {
        key,
        value
      }
    };

    countOneNode.value.keyList.addAtTail(keyNode);

    this.kv[key] = {
      keyNode,
      countNode: countOneNode
    };
    ++this.size;
  }

  private remove() {
    const lowestUsedCountNode = this.countList.getHead();
    if (!lowestUsedCountNode) {
      return;
    }
    let lowestUsedKeyNode = lowestUsedCountNode.value.keyList.getHead();
    if (!lowestUsedKeyNode) {
      return;
    }
    const key = lowestUsedKeyNode.value.key;

    // 1.移除keyNode
    lowestUsedCountNode.value.keyList.removeNode(lowestUsedKeyNode);

    // 2.检查CountNode的keyList是否为空
    if (lowestUsedCountNode.value.keyList.isEmpty()) {
      // 删除该countNode
      this.countList.removeNode(lowestUsedCountNode);
    }
    // 删除kv的key
    delete this.kv[key];
    lowestUsedKeyNode = null;
    --this.size;
  }

  /**
   * 提高使用频率
   * @param key 
   */
  private liftKey(key: string | number) {
    const { keyNode, countNode } = this.kv[key];
    const { count, keyList } = countNode.value;
    // 1. 移除keynode
    keyList.removeNode(keyNode);

    // 2. keynode加入到count+1中去
    const nextCount = count + 1;
    let nextCountNode = this.countList.getNext(countNode);
    if (!nextCountNode || nextCountNode.value.count !== nextCount) {
      // 如果nextCountNode不存在或者不是count+1
      nextCountNode = {
        prev: null,
        next: null,
        value: {
          count: nextCount,
          keyList: new LinkedList()
        }
      }
      this.countList.insertAfter(countNode, nextCountNode);
    }
    nextCountNode.value.keyList.addAtTail(keyNode);

    // 3.改变kv的countNode指针,改为nextCountNode
    this.kv[key].countNode = nextCountNode;

    // 4. 检查countNode的KeyList是否为空
    if (countNode.value.keyList.isEmpty()) {
      // 删除掉该countNode
      this.countList.removeNode(countNode);
    }
  }
}

interface IListNode<T> {
  prev: IListNode<T> | null;
  next: IListNode<T> | null;
  value: T;
}

class LinkedList<T> {
  private head: IListNode<T> = {
    prev: null,
    next: null,
    value: null
  };
  private tail: IListNode<T> = {
    prev: null,
    next: null,
    value: null
  };
  private size = 0;

  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public get(index) {
    if (index >= this.size || index < 0) {
      return;
    }
    if (index === 0) {
      return this.getHead();
    }
    if (index === this.size - 1) {
      return this.getTail();
    }
    let node = this.head.next;
    for (let i = 0; i < index; ++i) {
      node = node.next;
    }
    return node;
  }

  public getHead() {
    if (this.size === 0) {
      return;
    }
    return this.head.next;
  }

  public getTail() {
    if (this.size === 0) {
      return;
    }
    return this.tail.prev;
  }

  public getNext(node: IListNode<T>) {
    const next = node.next;
    if (next === this.tail) {
      return;
    }
    return next;
  }

  public getPrev(node: IListNode<T>) {
    const prev = node.prev;
    if (prev === this.head) {
      return;
    }
    return prev;
  }

  public addAtHead(node: IListNode<T>) {
    const next = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = next;
    next.prev = node;
    ++this.size;
  }

  public addAtTail(node: IListNode<T>) {
    const prev = this.tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
    ++this.size;
  }

  public removeTail() {
    if (this.size === 0) {
      return;
    }
    const curr = this.tail.prev;
    const prev = curr.prev;
    prev.next = this.tail;
    this.tail.prev = prev;
    curr.next = null;
    curr.prev = null;
    --this.size;
  }

  public removeHead() {
    if (this.size === 0) {
      return;
    }
    const curr = this.head.next;
    const next = curr.next;
    this.head.next = next;
    next.prev = this.head;
    curr.next = null;
    curr.prev = null;
    --this.size;
  }

  public removeNode(node: IListNode<T>) {
    if (node === this.head || node === this.tail) {
      return;
    }
    const prev = node.prev;
    const next = node.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    node.next = null;
    node.prev = null;
    --this.size;
  }

  public insertAfter(after: IListNode<T>, node: IListNode<T>) {
    const next = after.next;
    after.next = node;
    next.prev = node;
    node.prev = after;
    node.next = next;
    ++this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }
}

interface IKeyNodeValue {
  key: string | number;
  value: number;
}

type IKeyNode = IListNode<IKeyNodeValue>;

interface ICountNodeValue {
  count: number;
  keyList: LinkedList<IKeyNodeValue>;
};

type ICountNode = IListNode<ICountNodeValue>;

interface IKV {
  [p: string]: {
    keyNode: IKeyNode;
    countNode: ICountNode;
  }
}
