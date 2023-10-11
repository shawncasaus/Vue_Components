<script setup lang="ts">
import HealthScore from '../components/HealthScore.vue'
import Data from '../objects/data'
</script>

<template>
  <main class="mainDiv">
    <div class="healthScores">
      <HealthScore
        v-for="element in Data"
        :key="element.title"
        :title="element.title"
        :value="element.value"
        :thresholds="element.thresholds"
      />
    </div>
  </main>
</template>

<style>
.mainDiv {
  position: relative;
  height: 100vh;
  width: 100vw;
  top: 150px;
  margin: auto;
}
.healthScores {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
