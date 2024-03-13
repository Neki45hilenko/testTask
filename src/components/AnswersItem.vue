<template>
  <div class="answers-item wrap">
    <v-row class="justify-space-evenly flex-wrap">
      <v-col
        cols="3"
        xs="12"
        v-for="(answer, index) in answerOptions"
        :key="index"
      >
        <v-btn
          class="answer-btn"
          :class="{ selected: selectedAnswer === index }"
          @click="selectAnswer(index)"
        >
          {{ answer }}
        </v-btn>
      </v-col>
      <v-col cols="2" xs="12" sm="2">
        <v-btn class="check-btn" @click="checkAnswer"> Check </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTaskStore } from "../store/index.js";

const taskStore = useTaskStore();
const selectedAnswer = ref(null);
const answerOptions = computed(() => taskStore.answerOptions);
const answerCorrect = computed(() => taskStore.answerCorrect);

const selectAnswer = (index) => {
  selectedAnswer.value = index;
};

const checkAnswer = () => {
  if (selectedAnswer.value === null) {
    alert("Пожалуйста, выберите ответ");
    return;
  }
  if (answerOptions.value[selectedAnswer.value] === answerCorrect.value) {
    alert("Поздравляем, это правильный ответ!");
  } else {
    alert("К сожалению, это неправильный ответ :(");
  }
  selectedAnswer.value = null;
};
</script>

<style scoped>
.answers-item {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  background-color: rgba(125, 120, 120, 0.4);
  padding: 20px;
}

.answer-btn {
  width: 100%;
  height: 60px;
  font-size: 24px;
  border-radius: 10px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.5);
  transition: transform 0.2s ease-out;
}

.answer-btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.answer-btn.selected {
  transform: scale(0.95);
  box-shadow: none;
}

.check-btn {
  width: 100%;
  height: 60px;
  font-size: 0.9em;
  border-radius: 10px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.8);
  transition: transform 0.2s ease-out;
  margin-left: 20px;
}

.check-btn:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>
