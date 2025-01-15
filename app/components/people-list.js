import Component from '@glimmer/component';
import { action } from '@ember/object';

// we added the @action decorator to the showPerson method to indicate that it will be called on actions in the template
// showPerson is method of PeopleList component and it will be called from component (at the end from the template)

export default class PeopleListComponent extends Component {
  @action
  showPerson(person) {
    alert(`The person's name is ${person}!`);
  }
}
