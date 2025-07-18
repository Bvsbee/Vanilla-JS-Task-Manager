// Save and load task data from localStorage for persistence

const task = {
  title: "",
  description: "",
  createdAt: "",
  completedAt: "",
};

localStorage.setItem("task", JSON.stringify(task));
