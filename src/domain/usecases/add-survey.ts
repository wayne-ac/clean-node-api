export interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
  date: Date
}

export interface SurveyAnswer {
  image?: string
  answer: string
}

export interface AddSurvey {
  add: (accountModel: AddSurveyModel) => Promise<void>
}
