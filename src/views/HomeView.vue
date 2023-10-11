<script setup lang="ts">
import HealthScore from '../components/HealthScore.vue'
import Data from '../objects/data'
</script>

<template>
  <main class="healthScoresWrapper">
    <div class="healthScores">
      <HealthScore
        v-for="(element, index) in Data"
        :key="index"
        :title="element.title"
        :value="element.value"
        :thresholds="element.thresholds"
      />
    </div>
  </main>
</template>

<style>
.healthScoresWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.healthScores {
  display: flex;
  flex-direction: column;
}
</style>
