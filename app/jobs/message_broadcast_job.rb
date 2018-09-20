class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ChatRoomsChannel.broadcast_to(message.chat_room, {
    body: message.body,
    created_at: message.created_at,
    user: message.user
  })
  end
end
