import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Message } from './message';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	inputSoFar: string = '';
	messages: Message[] = [];

	handleKeyUp(event) {
		this.inputSoFar = event.target.value;
		// om enter, skicka meddelande
		if( event.keyCode === 13 && this.inputSoFar !== '' ) {
			console.log('ENTER?!');
			this.chatService.sendMessage(this.inputSoFar);
			event.target.value = '';
		}
	}
	constructor(private chatService: ChatService) { }

	ngOnInit(): void {
		this.chatService.getMessageObservable().subscribe(
			message => this.messages.push(message)
		)
	}

}
