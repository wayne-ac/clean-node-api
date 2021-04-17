import { SurveyModel } from '@/domain/models/survey'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add: (accountModel: AddSurveyModel) => Promise<void>
}
