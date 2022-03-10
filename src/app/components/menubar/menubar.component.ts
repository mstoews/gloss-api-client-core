import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'app/services/auth.service';
import { SnackService } from 'app/services/snack.service';
import { ConfirmationDialog } from 'app/static/confirmation-dialog.form.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuBarService } from '../../services/menu.bar.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
})
export class MenubarComponent implements OnInit {
  @Output() notifyParentRefresh: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentClone: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentAdd: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentDelete: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentBackUp: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentRestore: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentSend: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentJsonDownload: EventEmitter<any> = new EventEmitter();
  @Output() notifyParentJsonUpload: EventEmitter<any> = new EventEmitter();

  @Input() public inTitle: string;
  @Input() public inPartyRef: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public afAuth: AuthService,
    public snackbar: SnackService,
    private menubarService: MenuBarService
  ) {

   }

  public partyReference$: Observable<string>;

  ngOnInit() { }

  formPartyRefChanged(partyRef: string) {
    console.log('From MenuBarcomponent: ', partyRef);
  }

  private newMethod(): any {
    return 'MenuBar.formPartyRefChanged';
  }

  onJsonDownload(){
    this.menubarService.setBar();
  }
  onJsonUpload(){
    this.menubarService.setBar();
  }

  onDelete() {
    console.log('Delete emitter is sent:', this.inPartyRef);
    this.notifyParentDelete.emit();
  }

  onRefresh() {
    console.log('Refresh emitter is sent');
    this.notifyParentRefresh.emit();
  }

  onClickClone() {
    console.log('Clone emitter is sent');
    this.notifyParentClone.emit();
  }

  onSend() {
    console.log('Send emitter is sent');
    this.notifyParentSend.emit();
  }

  onBackUp() {
    console.log('Back Up emitter is sent');
    this.notifyParentBackUp.emit();
  }

  onRestore() {
    console.log('Restore emitter is sent');
    this.notifyParentRestore.emit();
  }

  onClickAdd() {
    console.log('Add emitter is sent');
    this.notifyParentAdd.emit();
  }

  onClickRefresh() {
    this.onRefresh();
  }

  onClickDelete() {
    this.onDelete();
  }

  onClickSend() {
    if (localStorage.getItem('glossenv') === null && localStorage.getItem('jasdecenv') === null && localStorage.getItem('bojenv') === null) {
      this.snackbar.showMessage(
        'Please activate the environments you would like to push/pull the static using Home Component'
      );
    } else {
      const dialogRef = this.dialog.open(ConfirmationDialog, {
        width: '380px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        switch (result.event) {
          case 'Confirm':
            this.onSend();
            break;
          case 'Cancel':
            break;
        }
      });
    }
  }

  onClickBackUp() {
    this.onBackUp();
  }

  onClickRestore() {
    this.onRestore();
  }

  ngOnDestroy() { }
}
