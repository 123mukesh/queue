let queue = [];
let currentSize = queue.length;

function enqueue(newVal) {
  queue[currentSize] = newVal;
  currentSize++;
}
function display() {
  console.log(queue);
}
function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  }
}

enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
dequeue();
dequeue();
display();
