import { HealthThresholds } from '../enums/enums'
export type Thresholds = [number, number, number, number]

export type HealthIndicator = {
  name: string
  goodHealth: HealthThresholds.HIGH | HealthThresholds.LOW
}
