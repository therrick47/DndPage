export class Feat {
  name: string;
  trigger: string;
  isReaction: boolean;
  actionCost: number;
  description: string;
  attributes: string[] = [];
  requirements: string;
  constructor(
    name: string,
    description: string,
    actionCost: number,
    attributes: string[],
    isReaction: boolean,
    trigger: string = '',
    requirements: string = ''
  ) {
    this.name = name;
    this.description = description;
    this.trigger = trigger;
    this.isReaction = isReaction;
    this.actionCost = actionCost;
    this.attributes = attributes;
    this.requirements = requirements;
  }
}
