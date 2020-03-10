import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Message } from './message';

@Injectable({
	providedIn: 'root'
})
export class ChatService {
	private chatService: BehaviorSubject<Message>;

	constructor() {
		this.chatService = new BehaviorSubject<Message>({
			content: 'Chat start'
		});
	}

	sendMessage(text: string) {
		let msg: Message = {
			content: text
		};
		this.chatService.next(msg);
	}
	getMessageObservable(): Observable<Message> {
		return this.chatService.asObservable();
	}
}




//
