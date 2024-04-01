import { TopicEnum } from '../enums/topic.e';

interface IBase {
  topic: TopicEnum;
}

interface IEmailMessage {
  from: string;
  to: string;
  content: string;
}

interface ISendEmail extends IBase {
  topic: TopicEnum.SendEmail;
  message: IEmailMessage;
}

export type SendMessage = ISendEmail;
