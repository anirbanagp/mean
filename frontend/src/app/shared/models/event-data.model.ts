export class EventData {
    constructor(
        public eventType: string,
        public eventData: any,
        public eventHandler?: string,
    ){}
}
