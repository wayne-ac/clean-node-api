import { SurveyAnswerModel } from '../models/survey'

export interface AddSurveyModel {
  question: string
  answers: SurveyAnswerModel[]
  date: Date
}

export interface AddSurvey {
  add: (accountModel: AddSurveyModel) => Promise<void>
}
