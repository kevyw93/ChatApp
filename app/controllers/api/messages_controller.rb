class MessagesController < ApplicationController
  def create
    message = Message.new(message_params)
    message.user = current_user
    if message.save

    else
      redirect_to chat_rooms_path
    end
  end

  private
    def message_params
      params.require(:message).permit(:body, :chat_room_id)
    end

end
