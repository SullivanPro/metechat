// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Chats } from '../../api/chats/chats.js';

Meteor.startup(() => {
  // if the Chat collection is empty, write welcome message
  if (Chats.find().count() === 0) {
    const data = [
      {
        owner: 'Bot',
        message: 'Bienvenue sur le chat !',
        createdAt: new Date(),
      }
    ];

    data.forEach(chat => Chats.insert(chat));
  }
});
