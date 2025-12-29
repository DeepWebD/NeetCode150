function topKFrequncySol1(arr, k) {
    const frequencyMap = new Map();
    for (const num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

   return Array.from(frequencyMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => entry[0]);
}

class MinHeap {
    constructor(compare = (a, b) => a - b) {
        this.data = [];
        this.compare = compare;
    }
    size() { return this.data.length; }
    peek() { return this.data[0]; }
    push(val) {
        this.data.push(val);
        this._siftUp();
    }
    pop() {
        if (!this.data.length) return undefined;
        const top = this.data[0];
        const last = this.data.pop();
        if (this.data.length) {
            this.data[0] = last;
            this._siftDown();
        }
        return top;
    }
    _siftUp() {
        let idx = this.data.length - 1;
        while (idx > 0) {
            const parent = (idx - 1) >> 1;
            if (this.compare(this.data[idx], this.data[parent]) < 0) {
                [this.data[idx], this.data[parent]] = [this.data[parent], this.data[idx]];
                idx = parent;
            } else break;
        }
    }
    _siftDown() {
        let idx = 0;
        const n = this.data.length;
        while (true) {
            let left = idx * 2 + 1, right = left + 1, smallest = idx;
            if (left < n && this.compare(this.data[left], this.data[smallest]) < 0) smallest = left;
            if (right < n && this.compare(this.data[right], this.data[smallest]) < 0) smallest = right;
            if (smallest === idx) break;
            [this.data[idx], this.data[smallest]] = [this.data[smallest], this.data[idx]];
            idx = smallest;
        }
    }
}

function topKFrequncy(arr, k) {
    if (k <= 0) return [];
    const frequencyMap = new Map();
    for (const num of arr) frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);

    // min-heap by frequency
    const heap = new MinHeap((a, b) => a[1] - b[1]);
    for (const entry of frequencyMap.entries()) {
        heap.push(entry); // entry = [num, freq]
        if (heap.size() > k) heap.pop();
    }

    const res = [];
    while (heap.size()) res.push(heap.pop()[0]); // collect numbers
    return res.reverse(); // from most -> least frequent
}

console.log(topKFrequncy([2, 2, 3, 1, 1, 1], 2)); // [1, 2]

console.log(topKFrequncySol1([ 2, 2, 3, 1, 1, 1], 2)); // Output: [1, 2]