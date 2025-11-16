import { Component } from '@angular/core';
import { LucideAngularModule , Image, Sheet , MoveRight , FileText , File } from 'lucide-angular';

@Component({
  selector: 'app-conversion',
  imports: [LucideAngularModule],
  templateUrl: './conversion.component.html',
  styleUrl: './conversion.component.scss'
})
export class ConversionComponent {
  readonly ImageIcon = Image;
  readonly SheetIcon = Sheet;
  readonly RightIcon = MoveRight;
  readonly DocsIcon = FileText;
  readonly PDFIcon = File;
}
