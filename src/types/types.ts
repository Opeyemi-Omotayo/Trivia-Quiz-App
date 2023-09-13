export type TableProp = {
    [key: string]: number;
    sports: number;
    history: number;
    politics: number;
  };
  

export interface AppContextProp {
    children?: React.ReactNode,
    waiting: boolean,
    loading: boolean,
    questions: any[],
    index: number,
    correct: number,
    error: boolean,
    modal: boolean,
    handleSubmit: (e:React.FormEvent) =>void,
}