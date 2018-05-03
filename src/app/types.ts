export class Activity {

  constructor(
    public start: string,
    public end: string,
    public title: string,
    public location?: string,
    public details?: string,
    public resultUrl?: string
  ) {  }

}
