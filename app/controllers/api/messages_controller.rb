class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      render :show
    else
      render json: ["Cant Create"];
    end
  end

  def show
    @message = Message.find(params[:id])
  end

  private
    def message_params
      params.require(:message).permit(:body, :user_id, :chat_room_id)
    end

end
