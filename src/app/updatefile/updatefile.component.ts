import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';


interface UploadEvent {
    originalEvent: Event | HttpEvent<any>;
    [key: string]: any;
    files: File[];
}

@Component({
  selector: 'app-updatefile',
  templateUrl: './updatefile.component.html',
  styleUrls: ['./updatefile.component.css']
})

export class UpdatefileComponent {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    } 

}
