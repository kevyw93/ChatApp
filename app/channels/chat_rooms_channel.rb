class ChatRoomsChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    chat_room = ChatRoom.find(params[:chat_room_id])
    stream_for chat_room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def received(data)
  #   ChatRoomsChannel.broadcast_to(@chat_room, )
  # end

  # def send_message(data)
  #   current_user.messages.create!(body: data['message'], chat_room_id: data['chat_room_id'])
  # end



end
