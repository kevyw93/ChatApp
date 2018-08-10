class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "messages"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive(payload)
    message = Message.create(chat_room_id: payload["chat_room_id"], body: payload["message"])
    ActionCable.server.broadcast('messages', {message: message.content, chat_room_id: message.chat_room_id})
  end
end
