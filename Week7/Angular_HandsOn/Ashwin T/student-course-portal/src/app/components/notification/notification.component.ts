import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

/**
 * NotificationComponent — HOL 6 Task 2, step 67.
 * Provides NotificationService at the COMPONENT level (see `providers`
 * below) instead of relying on the root-level singleton. This gives
 * every <app-notification> instance its OWN isolated NotificationService
 * instance, scoped to this component and its children — useful when
 * state must not leak between multiple instances of the same widget.
 */
@Component({
  selector: 'app-notification',
  standalone: true,
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  constructor(private notificationService: NotificationService) {}

  get messages(): string[] {
    return this.notificationService.getMessages();
  }

  addSampleMessage(): void {
    this.notificationService.addMessage(`Notification at ${new Date().toLocaleTimeString()}`);
  }
}
