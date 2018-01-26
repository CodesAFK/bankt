import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { DepositsComponent } from './deposits/deposits.component';
import { TransactionSuccessComponent } from './transaction-success/transaction-success.component';
import { PendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import { AdminAccountsComponent } from './admin/admin-accounts/admin-accounts.component';
import { AdminDepositsComponent } from './admin/admin-deposits/admin-deposits.component';
import { AdminWithdrawalsComponent } from './admin/admin-withdrawals/admin-withdrawals.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AccountsComponent,
    TransactionsComponent,
    WithdrawalsComponent,
    DepositsComponent,
    TransactionSuccessComponent,
    PendingTransactionsComponent,
    AdminAccountsComponent,
    AdminDepositsComponent,
    AdminWithdrawalsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
