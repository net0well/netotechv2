import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Netech - Wellington Neto';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Wellington Neto - Netotech");
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, Backend , Desenvolvedor de Software , Engenheiro de software, software, developer' },
      { name: 'description', content: 'Profissional de desenvolvimento de software com 2 anos de experiência em projetos de grande escala, especializado em integrações críticas entre sistemas corporativos.' },
    ]);
    
    AOS.init();


  }
}
