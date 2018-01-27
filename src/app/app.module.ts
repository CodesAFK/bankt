import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
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
import { AdminTransactionsComponent } from './admin/admin-transactions/admin-transactions.component';
import { AdminPendingComponent } from './admin/admin-pending/admin-pending.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyAccountsComponent } from './my-accounts/my-accounts.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'accounts', component: AccountsComponent },
  {path: 'transactions', component: TransactionsComponent },
  {path: 'withdrawals', component: WithdrawalsComponent },
  {path: 'deposits', component: DepositsComponent },
  {path: 'transaction-success', component: TransactionSuccessComponent },
  {path: 'pending-transaction', component: PendingTransactionsComponent },
  {path: 'my/accounts', component: MyAccountsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'admin/accounts', component: AdminAccountsComponent },
  {path: 'admin/deposits', component: AdminDepositsComponent },
  {path: 'admin/withdrawals', component: AdminWithdrawalsComponent },
  {path: 'admin/transaction', component: AdminTransactionsComponent },
  {path: 'admin/pending', component: AdminPendingComponent }
];


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
    AdminWithdrawalsComponent,
    AdminTransactionsComponent,
    AdminPendingComponent,
    LoginComponent,
    MyAccountsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
