<template>
  <div class="task-item-wrapper">
    <v-container fluid class="task-item">
      <v-row class="mt-n5">
        <v-col cols="12" class="d-flex justify-end align-center">
          <div class="d-flex flex-column align-start">
            <div>Anton</div>
            <div class="d-flex align-center">
              <span class="mr-2">1000</span>
              <img src="../assets/coin.png" alt="coin" width="24" height="24" />
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center justify-space-between ml-n5 mr-n5">
        <v-col cols="auto" class="pa-0">
          <v-btn icon>
            <img src="../assets/close_btn.png" alt="close" />
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="text-center">
          <div>{{ taskConditions }}</div>
        </v-col>
        <v-col cols="auto" class="pa-0">
          <v-btn icon @click="showModal = true">
            <img src="../assets/bulb.png" alt="bulb" />
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center mt-n5 text-h6">
        <v-col cols="12">
          <div>{{ taskText }}</div>
        </v-col>
      </v-row>
      <v-row class="text-center mt-n5 text-h6">
        <v-col cols="12">
          <img :src="taskImage" alt="task" class="task-img" />
        </v-col>
      </v-row>
    </v-container>
    <AnswersItem />
  </div>
  <ModalWindow
    v-if="showModal"
    :show-modal="showModal"
    @close="showModal = false"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useTaskStore } from "../store/index.js";
import ModalWindow from "./ModalWindow.vue";
import AnswersItem from "./AnswersItem.vue";

const taskText = ref("");
const taskConditions = ref("");
const taskImage = ref("");

const showModal = ref(false);

const answerOptions = ref([]);
const correctAnswer = ref("");

const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.fetchTaskData();
  taskText.value = taskStore.taskText;
  taskConditions.value = taskStore.taskConditions;
  taskImage.value = taskStore.taskImage;
  answerOptions.value = taskStore.answerOptions;
  correctAnswer.value = taskStore.correctAnswer;
});
</script>

<style scoped>
.task-item-wrapper {
  padding: 30px 100px;
  position: relative;
}

.task-item {
  min-height: 100vh;
  background: repeating-linear-gradient(
    90deg,
    #ffe4e1,
    #ffe4e1 40px,
    #ffffff 40px,
    #ffffff 60px
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
}

.v-btn--icon {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  /* background-color: transparent; */
  background-color: rgba(0, 0, 0, 0.05);
  transform: scale(0.8);
}

.v-btn--icon img {
  width: 20px;
  height: 20px;
}

.task-img {
  max-width: 80%;
  max-height: 80%;
}
</style>
