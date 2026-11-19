export const contactState = $state({
  selectedService: '',
  note: '',
  isOpen: false
});

export function selectContactService(service, note = '') {
  contactState.selectedService = service;
  contactState.note = note;
  contactState.isOpen = true;
}

export function openContactForm() {
  contactState.isOpen = true;
}

export function closeContactForm() {
  contactState.isOpen = false;
}
