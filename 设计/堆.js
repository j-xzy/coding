class HeapMax {
  constructor() {
    this.nums = [];
  }

  push(n) {
    const nums = this.nums;
    nums.push(n);
    let father = Math.floor(nums.length / 2) - 1;
    let cur = nums.length - 1;
    while (cur > 0) {
      if (nums[father] > nums[cur]) {
        break;
      }
      [nums[father], nums[cur]] = [nums[cur], nums[father]];
      cur = father;
      father = Math.floor((cur - 1) / 2);
    }
  }

  pop() {
    if (this.nums.length <= 1) {
      return this.nums.pop();
    }
    const n = this.nums[0];
    this.nums[0] = this.nums.pop();
    heapifyMax(this.nums, this.nums.length, 0);
    return n;
  }

  top() {
    return this.nums[0];
  }

  size() {
    return this.nums.length;
  }
}

class HeapMin {
  constructor() {
    this.nums = [];
  }

  push(n) {
    const nums = this.nums;
    nums.push(n);
    let father = Math.floor(nums.length / 2) - 1;
    let cur = nums.length - 1;
    while (father >= 0 && cur >= 0) {
      if (nums[father] <= nums[cur]) {
        break;
      }
      [nums[father], nums[cur]] = [nums[cur], nums[father]];
      cur = father;
      father = Math.floor((cur - 1) / 2);
    }
  }

  pop() {
    if (this.nums.length <= 1) {
      return this.nums.pop();
    }
    const n = this.nums[0];
    this.nums[0] = this.nums.pop();
    heapifyMin(this.nums, this.nums.length, 0);
    return n;
  }

  top() {
    return this.nums[0];
  }

  size() {
    return this.nums.length;
  }
}

function heapifyMax(nums, size, root) {
  let largest = root;
  const left = root * 2 + 1;
  const right = root * 2 + 2;
  if (left < size && nums[left] > nums[largest]) {
    largest = left;
  }
  if (right < size && nums[right] > nums[largest]) {
    largest = right;
  }
  if (largest !== root) {
    [nums[root], nums[largest]] = [nums[largest], nums[root]];
    heapifyMax(nums, size, largest);
  }
}

function heapifyMin(nums, size, root) {
  let min = root;
  const left = root * 2 + 1;
  const right = root * 2 + 2;
  if (left < size && nums[left] < nums[min]) {
    min = left;
  }
  if (right < size && nums[right] < nums[min]) {
    min = right;
  }
  if (min !== root) {
    [nums[root], nums[min]] = [nums[min], nums[root]];
    heapifyMin(nums, size, min);
  }
}

module.exports = {
  HeapMax,
  HeapMin
};
