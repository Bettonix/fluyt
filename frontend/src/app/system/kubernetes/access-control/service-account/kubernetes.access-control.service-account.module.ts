import {NgModule} from "@angular/core";
import {CommonModule, DatePipe, KeyValuePipe} from "@angular/common";
import {KubernetesComponentsListModule} from "../../components/list/kubernetes.components.list.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {LoaderModule} from "../../../../components/loader/loader.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormContainerModule} from "../../../../components/form/container/form.container.module";
import {
  FormMultipleContainerModule
} from "../../../../components/form/multiple-container/form.multiple-container.module";
import {MatChipsModule} from "@angular/material/chips";
import {PipesReplicaSetReplicasModule} from "../../pipes/replica-set/replicas/pipes.replica-set.replicas.module";
import {TableModule} from "primeng/table";
import {KubernetesAccessControlServiceAccountService} from "./kubernetes.access-control.service-account.service";
import {
  KubernetesAccessControlServiceAccountListComponent
} from "./list/kubernetes.access-control.service-account.list.component";
import {
  KubernetesAccessControlServiceAccountDetailComponent
} from "./detail/kubernetes.access-control.service-account.detail.component";

@NgModule({
  declarations: [
    KubernetesAccessControlServiceAccountListComponent,
    KubernetesAccessControlServiceAccountDetailComponent
  ],
  exports: [
    KubernetesAccessControlServiceAccountListComponent,
    KubernetesAccessControlServiceAccountDetailComponent
  ],
  imports: [
    CommonModule,
    KubernetesComponentsListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LoaderModule,
    MatExpansionModule,
    FormContainerModule,
    FormMultipleContainerModule,
    DatePipe,
    MatChipsModule,
    KeyValuePipe,
    PipesReplicaSetReplicasModule,
    TableModule
  ],
  providers: [
    KubernetesAccessControlServiceAccountService
  ]
})
export class KubernetesAccessControlServiceAccountModule {

}
