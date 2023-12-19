var leastInterval = function (tasks, n) {
  const numTasks = Array(26).fill(0)
  for (let task of tasks) {
    task = task.toLowerCase()
    numTasks[task.charCodeAt() - 'a'.charCodeAt()]++
  }
}
