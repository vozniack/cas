import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Organization} from '../organizations.interface';

export function buildOrganizationForm(formBuilder: FormBuilder): FormGroup {
  return formBuilder.group({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    parentId: new FormControl(null)
  });
}

export function fillOrganizationForm(form: FormGroup, organization: Organization): void {
  form.patchValue({
    name: organization.name,
    description: organization.description,
    code: organization.code
  });
}

export function fillOrganization(formValues: any, organization: Organization): Organization {
  return {
    ...organization,
    name: formValues.name,
    description: formValues.description,
    code: formValues.code,
    parentId: formValues.parentId
  };
}
