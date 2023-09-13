export interface AppContextProp {
    children?: React.ReactNode,
    waiting: boolean,
    loading: boolean,
    questions: any[],
    index: number,
    correct: number,
    error: boolean,
    modal: boolean,
    fetchQuestions: (url: any) => Promise<void>,
}