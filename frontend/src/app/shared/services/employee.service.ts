import { Injectable } from "@angular/core";
import { TreeNode } from "primeng/api";
import { Observable, of } from "rxjs";
import { EmployeeDetailsModel } from "src/app/shared/models/employee-details.model.js";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  constructor() {}

  workerEmployees: EmployeeDetailsModel[] = [
    {
      id: 0,
      role: "Meister",
      avatar_url: "/assets/images/avatars/avatar-01.jpg",
      firstname: "Achim",
      lastname: "Held"
    },
    {
      id: 1,
      role: "Monteur",
      avatar_url: "/assets/images/avatars/avatar-02.jpg",
      firstname: "Max",
      lastname: "Held"
    },
    {
      id: 2,
      role: "Kauffrau für Büromanagement Azubi",
      avatar_url: "/assets/images/avatars/avatar-02.jpg",
      firstname: "Janina",
      lastname: "Held"
    },
    {
      id: 3,
      role: "Kauffrau für Büromanagement",
      avatar_url: "/assets/images/avatars/avatar-03.jpg",
      firstname: "Winni",
      lastname: "Held"
    },
    {
      id: 4,
      role: "Kauffrau für Büromanagement Azubi",
      avatar_url: "/assets/images/avatars/avatar-02.jpg",
      firstname: "Julia",
      lastname: "Hamen"
    },
    {
      id: 5,
      role: "Elektrohelfer",
      avatar_url: "/assets/images/avatars/avatar-03.jpg",
      firstname: "Mohammed",
      lastname: "Movahedi"
    },
    {
      id: 6,
      role: "Azubi",
      avatar_url: "/assets/images/avatars/avatar-02.jpg",
      firstname: "Maximiliam",
      lastname: "Staletzki"
    },
    {
      id: 7,
      role: "Azubi",
      avatar_url: "/assets/images/avatars/avatar-04.jpg",
      firstname: "Angelo",
      lastname: "Truisi"
    },
    {
      id: 8,
      role: "Elektrotechniker Azubi",
      avatar_url: "/assets/images/avatars/avatar-01.jpg",
      firstname: "Koan",
      lastname: "Aktabay"
    },
    {
      id: 9,
      role: "Monteur",
      avatar_url: "/assets/images/avatars/avatar-03.jpg",
      firstname: "Paul",
      lastname: "Aust"
    },
    {
      id: 10,
      role: "Monteur",
      avatar_url: "/assets/images/avatars/avatar-02.jpg",
      firstname: "Jannick",
      lastname: "Schmitz"
    },
    {
      id: 11,
      role: "Monteur",
      avatar_url: "/assets/images/avatars/avatar-04.jpg",
      firstname: "Sebastian",
      lastname: "Enfer"
    },
    {
      id: 12,
      role: "Obermonteur",
      avatar_url: "/assets/images/avatars/avatar-01.jpg",
      firstname: "Pascal",
      lastname: "Breuer"
    }
  ];
  officeEmployees: EmployeeDetailsModel[] = [];

  getWorkersEmployees(): Observable<EmployeeDetailsModel[]> {
    return of(this.workerEmployees);
  }

  getOfficeEmployees(): Observable<EmployeeDetailsModel[]> {
    return of(this.officeEmployees);
  }

  getOfficeNode(): Observable<TreeNode> {
    const node: TreeNode = {
      label: "Büro",
      type: "department",
      styleClass: "department-office",
      expanded: true,
      children: [
        {
          label: "Kauffrau",
          type: "person",
          data: {
            name: "Winni Held",
            avatar_url: "/assets/images/avatars/avatar-04.jpg"
          },
          styleClass: "p-person"
        },
        {
          label: "Auszubildene Kauffrau",
          type: "person",
          data: {
            name: "Janina Held",
            avatar_url: "/assets/images/avatars/avatar-02.jpg"
          },
          styleClass: "p-person"
        }
      ]
    };

    return of(node);
  }
}
