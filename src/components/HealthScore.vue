<script setup lang="ts">
import { defineProps } from 'vue'
import { HealthColors, HealthThresholds } from './enums/enums'
import { Thresholds, HealthScoreTypeNames } from './types/types'
import { HealthScoreTypes } from '../objects/healthScoreTypes'

const { title, value, thresholds } = defineProps<{
  title: HealthScoreTypeNames
  value: number
  thresholds: Thresholds
}>()

// HELPER FUNCTIONS
const getPercentage = (value: number): string => {
  return `${Math.round(value * 100 * 10) / 10}%`
}

const getThreshold = (): HealthThresholds => {
  if (value >= thresholds[0] && value < thresholds[1]) {
    return HealthThresholds.LOW
  } else if (value >= thresholds[1] && value < thresholds[2]) {
    return HealthThresholds.MEDIUM
  } else if (value >= thresholds[2] && value <= thresholds[3]) {
    return HealthThresholds.HIGH
  } else {
    return HealthThresholds.NED
  }
}

const getPositionThreshold = (threshold: HealthThresholds): string => {
  if (threshold === HealthThresholds.LOW) {
    const startThreshold = thresholds[0]
    const endThreshold = thresholds[1]
    return ((value - startThreshold) / (endThreshold - startThreshold)) * 65
  } else if (threshold === HealthThresholds.MEDIUM) {
    const startThreshold = thresholds[1]
    const endThreshold = thresholds[2]
    return ((value - startThreshold) / (endThreshold - startThreshold)) * 65
  } else if (threshold === HealthThresholds.HIGH) {
    const startThreshold = thresholds[2]
    const endThreshold = thresholds[3]
    return ((value - startThreshold) / (endThreshold - startThreshold)) * 65
  } else {
    return '0%'
  }
}

const getHealthColor = (
  threshold: HealthThresholds
): HealthColors.RED | HealthColors.YELLOW | HealthColors.GREEN => {
  if (threshold === HealthThresholds.MEDIUM) {
    return HealthColors.YELLOW
  }
  for (let i = 0; i < HealthScoreTypes.length; i++) {
    const HealthScore = HealthScoreTypes[i]
    if (HealthScore.name === title) {
      if (HealthScore.goodHealth === HealthThresholds.HIGH) {
        return threshold === HealthThresholds.HIGH ? HealthColors.GREEN : HealthColors.RED
      }
      if (HealthScore.goodHealth === HealthThresholds.LOW) {
        return threshold === HealthThresholds.LOW ? HealthColors.GREEN : HealthColors.RED
      }
    }
  }
}

// VARIABLES
const threshold = getThreshold()
const healthColor = getHealthColor(threshold)
const thresholdStyles = `background-color: ${healthColor};`
const percentageStyles = `background-color: ${healthColor}; left: ${getPositionThreshold(
  threshold
)}%;`
</script>

<template>
  <div class="healthScoreCard">
    <h3>{{ title.toUpperCase() }}</h3>
    <h1>{{ threshold }}</h1>
    <div class="health-bar">
      <div class="threshold" :style="threshold === HealthThresholds.LOW ? thresholdStyles : ''">
        <div class="percentage" :style="percentageStyles" v-if="threshold === HealthThresholds.LOW">
          <p>{{ getPercentage(value) }}</p>
        </div>
      </div>
      <div class="threshold" :style="threshold === HealthThresholds.MEDIUM ? thresholdStyles : ''">
        <div
          class="percentage"
          :style="percentageStyles"
          v-if="threshold === HealthThresholds.MEDIUM"
        >
          <p>{{ getPercentage(value) }}</p>
        </div>
      </div>
      <div class="threshold" :style="threshold === HealthThresholds.HIGH ? thresholdStyles : ''">
        <div
          class="percentage"
          :style="percentageStyles"
          v-if="threshold === HealthThresholds.HIGH"
        >
          <p>{{ getPercentage(value) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.healthScoreCard {
  background-color: #212942;
  height: 180px;
  width: 400px;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin: 15px;
}

.health-bar {
  display: flex;
  align-items: center;
  height: 35%;
  background-color: #28304b;
  border-radius: 5px;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
}

.threshold {
  display: flex;
  align-items: center;
  margin-left: 5px;
  height: 4px;
  background-color: #6272a6;
  text-align: center;
  margin-right: 5px;
  width: 33%;
  border-radius: 5px;
  z-index: 1;
}

.percentage {
  display: flex;
  align-items: center;
  height: 2rem;
  width: 35%;
  border-radius: 5px;
  position: relative;
}

.percentage p {
  text-align: center;
  font-weight: 900;
  color: #000000;
  margin: auto;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  color: #ffffff;
}

h3 {
  font-size: 1.2rem;
  font-weight: 900;
}

.healthScore h1,
.healthScore h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .healthScore h1,
  .healthScore h3 {
    text-align: left;
  }
}
</style>
