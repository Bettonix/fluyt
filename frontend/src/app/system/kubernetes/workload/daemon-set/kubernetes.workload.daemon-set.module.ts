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
import {KubernetesWorkloadDaemonSetListComponent} from "./list/kubernetes.workload.daemon-set.list.component";
import {KubernetesWorkloadDaemonSetDetailComponent} from "./detail/kubernetes.workload.daemon-set.detail.component";
import {KubernetesWorkloadDaemonSetService} from "./kubernetes.workload.daemon-set.service";
import {KubernetesWorkloadPodModule} from "../pod/kubernetes.workload.pod.module";
import {KubernetesEventModule} from "../../events/kubernetes.event.module";

@NgModule({
  declarations: [
    KubernetesWorkloadDaemonSetListComponent,
    KubernetesWorkloadDaemonSetDetailComponent
  ],
  exports: [
    KubernetesWorkloadDaemonSetListComponent,
    KubernetesWorkloadDaemonSetDetailComponent
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
    TableModule,
    KubernetesWorkloadPodModule,
    KubernetesEventModule
  ],
  providers: [
    KubernetesWorkloadDaemonSetService
  ]
})
export class KubernetesWorkloadDaemonSetModule {

}
