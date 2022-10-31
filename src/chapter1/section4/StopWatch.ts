export default class StopWatch {
  private start: Date

  constructor() {
    this.start = new Date()
  }

  public elapsedTime() {
    const end = new Date()
    return (end.getTime() - this.start.getTime()) / 1000
  }
}
