// Methods related to chats
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Chats } from './chats.js';

Meteor.methods({
  //Temporary: owner's name to be written
  'chats.insert'(owner, message) {
    check(message, String);

    return Chats.insert({
      owner,
      message,
      createdAt: new Date(),
    });
  },
});
