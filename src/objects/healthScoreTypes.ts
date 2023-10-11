import { HealthThresholds, HealthScoreTypeNames } from '../components/enums/enums'

type HealthIndicator = {
  name: string
  goodHealth: HealthThresholds.HIGH | HealthThresholds.LOW
}

export const HealthScoreTypes: Array<HealthIndicator> = [
  {
    name: HealthScoreTypeNames.ONLINE,
    goodHealth: HealthThresholds.HIGH
  },
  {
    name: HealthScoreTypeNames.FIRST_MONTH_EXIT,
    goodHealth: HealthThresholds.LOW
  },
  {
    name: HealthScoreTypeNames.RETENTION,
    goodHealth: HealthThresholds.HIGH
  },
  {
    name: HealthScoreTypeNames.EXIT,
    goodHealth: HealthThresholds.LOW
  },
  {
    name: HealthScoreTypeNames.ENGAGEMENT,
    goodHealth: HealthThresholds.HIGH
  }
]
