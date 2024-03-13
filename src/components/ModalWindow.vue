<template>
  <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-window">
      <div class="modal-content">
        <div class="modal-header">
          <button class="modal-close-btn" @click="closeModal">
            <img src="../assets/close_btn.png" alt="close" />
          </button>
        </div>
        <div class="modal-body">
          <p>Модальное окно</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-window {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.modal-content {
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.modal-close-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.modal-close-btn img {
  width: 20px;
  height: 20px;
}
</style>
