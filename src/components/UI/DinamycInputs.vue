<template>
  <section class="mx-auto w-full">
    <div
      :class="[
        'flex items-center justify-between bg-gray-50 rounded-lg p-4',
        valueInputs.length > 0 ? 'mb-4' : '',
      ]"
    >
      <span class="text-2xl font-semibold text-gray-800">
        {{ label }}
      </span>
      <button
        class="flex items-center justify-center w-8 h-8 bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors"
        @click="handleClickAddInput"
        type="button"
      >
        <i class="fa-solid fa-plus text-white"></i>
      </button>
    </div>

    <div
      :class="
        name === 'tecnologies'
          ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
          : 'space-y-4'
      "
    >
      <article
        v-for="(input, index) in valueInputs"
        :key="index"
        class="relative group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <button
          type="button"
          class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          @click="handleClickRemoveInput(index)"
        >
          <i class="fa-solid fa-minus text-white text-sm"></i>
        </button>
        <input
          class="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
          type="text"
          :name="`${name}-${index}`"
          :id="`${name}-${index}`"
          :value="input"
          :placeholder="`Add ${name}`"
          @input="(e) => handleClickAddInputValue(e, index)"
        />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: {
    type: Array as () => string[],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "Add input",
  },
});

const emit = defineEmits(["update:modelValue", "onModify"]);

const valueInputs = ref([...props.modelValue]);

watch(
  () => props.modelValue,
  (newVal) => {
    valueInputs.value = [...newVal];
  }
);

const handleClickAddInput = () => {
  valueInputs.value.push("");
  emit("update:modelValue", [...valueInputs.value]);
};

const handleClickAddInputValue = (value: Event, index: number) => {
  const inputElement = value.target as HTMLInputElement;
  if (!inputElement) return;

  valueInputs.value[index] = inputElement.value;
  emit("update:modelValue", valueInputs.value);
  emit("onModify", true);
};

const handleClickRemoveInput = (index: number) => {
  valueInputs.value.splice(index, 1);
  emit("update:modelValue", valueInputs.value);
  emit("onModify", true);
};
</script>
