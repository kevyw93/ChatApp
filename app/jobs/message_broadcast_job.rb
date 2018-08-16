class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ChatRoomsChannel.broadcast_to(message.chat_room, {
    message: message.body,
    user: message.user.email,
    time: message.timestamp
  })
  end
end
