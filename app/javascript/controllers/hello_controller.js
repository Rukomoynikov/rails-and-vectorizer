import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Raul, i want to drink some beer! Ok, bears usually aren't happy when i try to drink them."
  }
}
