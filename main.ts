#! /usr/bin/env node

// src/game.ts
import inquirer from 'inquirer';

class Game {
  private rooms: Record<string, string> = {
    'start': 'You are in a dark room. There are two doors: left and right.',
    'left': 'You entered a room with a treasure chest. There is a door behind the chest.',
    'right': 'You entered a room with a sleeping dragon. There is a door on the other side.'
  };

  private currentRoom: string = 'start';

  async start() {
    while (true) {
      console.log(this.rooms[this.currentRoom]);
      const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: this.getChoices()
      });

      if (action === 'Exit') {
        console.log('Thanks for playing!');
        break;
      }

      this.currentRoom = this.moveToRoom(action);
    }
  }

  private getChoices() {
    const choices = ['Exit'];
    if (this.currentRoom === 'start') {
      choices.push('left', 'right');
    } else if (this.currentRoom === 'left') {
      choices.push('start');
    } else if (this.currentRoom === 'right') {
      choices.push('start');
    }
    return choices;
  }

  private moveToRoom(choice: string): string {
    if (this.rooms[choice]) {
      return choice;
    }
    return this.currentRoom;
  }
}

new Game().start();

