export class Activity {

  constructor(
    public start: string,
    public start_human: string,
    public end: string,
    public end_human: string,
    public title: string,
    public location?: string,
    public details?: string,
    public resultUrl?: string
  ) {  }

}
