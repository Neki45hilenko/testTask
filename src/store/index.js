import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore({
  id: "task",
  state: () => ({
    taskText: "",
    taskConditions: "",
    taskImage: "",
    answerCorrect: "",
    answerOptions: [],
  }),
  actions: {
    async fetchTaskData() {
      try {
        const response = await axios.get("/data.json");
        this.taskText = response.data.task_text;
        this.taskConditions = response.data.task_conditions;
        this.taskImage = response.data.task_image;
        this.answerCorrect = response.data.answer_correct;
        this.answerOptions = response.data.answer_options;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
