class MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    
    if @membership.save!
      redirect_to controller: 'chat_rooms', action: 'show', id: @membership.chat_room_id
    else
      debugger
      flash[:error] = @membership.errors.full_messages
    end
  end

  def destroy

  end

  private

  def membership_params
    params.require(:membership).permit(:user_id,:chat_room_id)
  end

end
