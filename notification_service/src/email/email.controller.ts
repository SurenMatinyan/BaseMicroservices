import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class EmailController {
  @MessagePattern('email.send.message')
  create(@Payload() payload: any) {
    //Send the email
    console.log(payload, 'payload');
  }
}
