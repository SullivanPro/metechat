import { Chats } from '/imports/api/chats/chats.js';
import { Meteor } from 'meteor/meteor';
import './chat.html';

Template.chat.onCreated(function () {
  Meteor.subscribe('chats.all');
});

Template.chat.helpers({
  chats() {
    return Chats.find({}, { sort: { createdAt: -1 } });
  },
});

Template.chat.events({
  'submit .chat__form'(event) {
    event.preventDefault();

    const target = event.target;
    console.log(target)
    const owner = target.owner;
    const message = target.message;

    Meteor.call('chats.insert', owner.value, message.value, (error) => {
      if (error) {
        console.log(error);
      } else {
        //Clear text
        message.value = '';
      }
    });
  },
});
