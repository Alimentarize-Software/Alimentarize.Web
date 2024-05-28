import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReceiverService } from '../../receiver.service';
import { ToastrService } from 'ngx-toastr';
import { CustomColor } from 'src/app/shared/components/button/button';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent {
  hoverClass = 'hover-active';
  isEditingAbout: boolean = false;
  aboutForm: FormGroup;
  categoriesForm: FormGroup;
  projectsForm: FormGroup;
  categoriesOptions: any;
  userID: number;
  projects: any;

  get projectFormGroups() {
    return Object.values(this.projectsForm.controls) as FormGroup[];
  }

  customColor: CustomColor = {
    color: '#FFF',
    backgroundColor: '#A9320C',
  };

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private receiverService: ReceiverService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.checkTab();
    this.createForms();
    this.getCategoriesFilter();
    this.getAllAbout();
  }

  createForms() {
    const user = localStorage.getItem('user');

    if (user) {
      const parsedUser = JSON.parse(user);

      if (parsedUser && parsedUser.id) {
        this.userID = parsedUser.id;
      } else {
        console.error('O usuário no localStorage não tem um ID válido.');
      }
    }

    this.aboutForm = this.formBuilder.group({
      text: [''],
      receiverId: [this.userID]
    });

    this.categoriesForm = this.formBuilder.group({
      receiverId: [this.userID],
      categoryId: [[]]
    });

    this.projectsForm = this.formBuilder.group({});
  }

  getCategoriesFilter() {
    this.receiverService.getAllCategories().subscribe({
      next: (response) => {
        this.categoriesOptions = response;
      },
      error: () => {
        this.toastr.error('Erro ao buscar categorias. Tente novamente.');
      },
    });
  }

  getAllAbout() {
    this.receiverService.getAllAbout(this.userID).subscribe({
      next: (receiverInfo: any) => {
        if (receiverInfo) {
          this.aboutForm.patchValue({
            text: receiverInfo.about.text,
            receiverId: receiverInfo.about.receiverId
          });

          const selectedCategories: number[] = receiverInfo.categories.map((category: { id: string }) => parseInt(category.id));

          this.categoriesForm.patchValue({
            receiverId: receiverInfo.id,
            categoryId: selectedCategories
          });

          this.projects = receiverInfo.aboutProjects;
          this.projects.forEach((project: any, index: number) => {
            const projectFormGroup = this.createProjectFormGroup(project);
            this.projectsForm.addControl(`project_${index}`, projectFormGroup);

            projectFormGroup.valueChanges.subscribe(() => {
              projectFormGroup.markAsDirty();
            });
          });
        }
      },
      error: () => {
        this.toastr.error('Erro ao buscar informações do receptor. Tente novamente.');
      }
    });
  }

  createProjectFormGroup(project: any): FormGroup {
    return this.formBuilder.group({
      id: [project.id],
      title: [project.title],
      text: [project.text],
      instagram: [''],
      whatsapp: [''],
      receiverId: [this.userID]
    });
  }

  addNewProject() {
    const newIndex = Object.keys(this.projectsForm.controls).length;
    const newProjectFormGroup = this.formBuilder.group({
      id: [null],
      title: [''],
      text: [''],
      instagram: [''],
      whatsapp: [''],
      receiverId: [this.userID]
    });

    newProjectFormGroup.valueChanges.subscribe(() => {
      newProjectFormGroup.markAsDirty();
    });

    this.projectsForm.addControl(`project_${newIndex}`, newProjectFormGroup);
  }

  saveProject(index: number) {
    const updatedProjects = this.projectsForm.value;
    
    const project = updatedProjects[`project_${index}`];

    this.receiverService.updateProject(project).subscribe({
      next: () => {
        this.toastr.success('Projeto atualizado com sucesso.');
      },
      error: () => {
        this.toastr.error('Erro ao atualizar projeto. Tente novamente.');
      },
    });
  }

  removeProject(index: number) {
    const controlName = `project_${index}`;
    this.projectsForm.removeControl(controlName);
  }

  toggleCategory(categoryId: number) {
    const categoryIdControl = this.categoriesForm.get('categoryId') as FormControl;
    const currentValue = categoryIdControl.value as number[];

    if (currentValue.includes(categoryId)) {
      const index = currentValue.indexOf(categoryId);
      currentValue.splice(index, 1);
    } else {
      currentValue.push(categoryId);
    }

    categoryIdControl.setValue(currentValue);
  }

  updateAbout() {
    this.aboutForm.get('receiverId')?.setValue(this.userID);

    this.receiverService.updateReceiverAbout(this.aboutForm.value).subscribe({
      next: () => {
        this.toastr.success('Sobre atualizado com sucesso.');
      },
      error: () => {
        this.toastr.error('Erro ao atualizar sobre. Tente novamente.');
      },
    });
  }

  updateCategories() {
    this.categoriesForm.get('receiverId')?.setValue(this.userID);

    this.receiverService.updateReceiverCategories(this.categoriesForm.value).subscribe({
      next: () => {
        this.toastr.success('Categorias atualizadas com sucesso.');
      },
      error: () => {
        this.toastr.error('Erro ao atualizar categorias. Tente novamente.');
      },
    });
  }

  saveAll() {
    this.updateAbout();
    this.updateCategories();
    this.handleEditClick();
  }

  checkTab() {
    const firstTab = this.el.nativeElement.querySelector('.tabs .tab');
    if (firstTab) {
      this.renderer.addClass(firstTab, this.hoverClass);
    }
  }

  public handleTabClick(event: MouseEvent): void {
    const clickedTab = event.currentTarget as HTMLElement;

    const tabs = document.querySelectorAll('.tabs .tab');

    tabs.forEach(tab => {
      this.renderer.removeClass(tab, this.hoverClass);
    });

    this.renderer.addClass(clickedTab, this.hoverClass);
  }

  public isAboutSelected(): boolean {
    const sobreTab = this.el.nativeElement.querySelector('.tabs .tab:nth-child(1)');
    return sobreTab ? sobreTab.classList.contains(this.hoverClass) : false;
  }

  public handleEditClick(): void {
    this.isEditingAbout = !this.isEditingAbout;

    const textControl = this.aboutForm.get('text');
    if (textControl) {
      if (this.isEditingAbout) {
        textControl.enable();
      } else {
        textControl.disable();
      }
    }
  }
}
