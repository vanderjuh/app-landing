import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LandingResponse } from 'src/app/shared/classes/landing-response.class';

@Injectable()
export class LandingApiService {

  private data: LandingResponse = {
    areasOfActivity: [
      {
        id: 1,
        title: "Psicoterapia",
        subtitle: "Psicoterapia Individual",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      },
      {
        id: 2,
        title: "Terapia Casal",
        subtitle: "Terapia Casal",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      },
      {
        id: 3,
        title: "Terapia Familiar",
        subtitle: "Terapia Familiar",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      },
      {
        id: 4,
        title: "Gerenciamento do Estresse",
        subtitle: "Gerenciamento do Estresse",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      },
      {
        id: 5,
        title: "Tratamento da Ansiedade",
        subtitle: "Tratamento da Ansiedade",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      },
      {
        id: 6,
        title: "Tratamento da Depresssão",
        subtitle: "Tratamento da Depresssão",
        btnLabel: "Agendar",
        items: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque."
        ]
      }
    ],
    services: [
      {
        title: "Atendimento Domiciliar",
        imgSrc: "casa.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        btnLabel: "Agendar"
      },
      {
        title: "Atendimento do Consultório",
        imgSrc: "diva.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        btnLabel: "Agendar"
      },
      {
        title: "Atendimento Online",
        imgSrc: "pc.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        btnLabel: "Agendar"
      }
    ],
    aboutMe: {
      name: "Gionna Souza",
      council: "CRP",
      profileImg: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque. Duis ullamcorper tempor tempus. Phasellus eget commodo est, vitae luctus libero. Vestibulum nibh tellus, condimentum vitae tempor vel, aliquam sit amet justo. Ut lectus est, tincidunt blandit felis iaculis, sagittis eleifend orci. Sed dapibus vehicula imperdiet. Cras libero elit, semper at pharetra gravida, lobortis a tellus. Donec sit amet velit ex. Sed sit amet nibh justo. Quisque lorem orci, dapibus nec erat at, malesuada blandit quam. Donec suscipit ligula quis diam lacinia, ac tempor leo hendrerit.",
      socialMedias: [
        {
          title: "Instagram",
          icon: "instagram",
          url: "#"
        },
        {
          title: "LinkedIn",
          icon: "linkedin",
          url: "#"
        },
        {
          title: "Facebook",
          icon: "facebook",
          url: "#"
        },
        {
          title: "Twitter",
          icon: "twitter",
          url: "#"
        }
      ]
    },
    testimonies: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
        author: "Ana"
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices urna et lorem ornare consectetur eget ut neque.",
        author: "Maria"
      }
    ],
    faq: [
      {
        question: "Como funciona o atendimento online?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "Posso usar convênio",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "Como funciona o sigilo?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "Como inicio o tratamento?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "Quanto tempo duram as sessões?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ]
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<LandingResponse> {
    return of(this.data)
  }
}
