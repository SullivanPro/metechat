// All chats-related publications
import { Meteor } from 'meteor/meteor';
import { Chats } from '../chats.js';

if (Meteor.isServer) {
  Meteor.publish('chats.all', function chatsPublication() {
    return Chats.find();
  });
}