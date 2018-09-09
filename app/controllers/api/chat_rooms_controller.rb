class Api::ChatRoomsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @chat_rooms = @user.chat_rooms
    render json: @chat_rooms
  end

  def new
    @chat_room = ChatRoom.new
  end

  def create
    @chat_room = current_user.chat_rooms.build(chat_rooms_params)
    if @chat_room.save
      flash[:success] = 'Chat room added!'
      redirect_to chat_rooms_path
    else
      render 'new'
    end
  end

  def show
    @chat_room = ChatRoom.includes(:messages).find_by(id: params[:id])
    render :show
    # @message = Message.new
  end

  private

  def chat_rooms_params
    params.require(:chat_room).permit(:title)
  end
end
