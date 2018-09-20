class Api::ChatRoomsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @user_chat_rooms = @user.chat_rooms

    membership = Membership.where(user_id: params[:user_id])
    if !membership.empty?
      chat_room_ids = membership.map { |membership| membership.chat_room_id }
      memberships_chat_rooms = ChatRoom.where(id: chat_room_ids)
      @chat_rooms = @user_chat_rooms + memberships_chat_rooms
    else
      @chat_room_ids = membership
      @chat_rooms = @user_chat_rooms
    end

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
  end

  private

  def chat_rooms_params
    params.require(:chat_room).permit(:title)
  end
end
