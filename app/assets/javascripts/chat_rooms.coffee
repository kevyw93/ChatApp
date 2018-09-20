# # Place all the behaviors and hooks related to the matching controller here.
# # All this logic will automatically be available in application.js.
# # You can use CoffeeScript in this file: http://coffeescript.org/
# jQuery(document).on 'turbolinks:load', ->
#   messages = $('#messages')
#   if $('#messages').length > 0
#     messages_to_bottom = -> messages.scrollTop(messages.prop("scrollHeight"))
#     messages_to_bottom();
#
#
#     url = jQuery(document)[0].URL.split("/");
#     urlLength = url.length - 1;
#     channelId = parseInt(url[urlLength]);
#
#     App.global_chat = App.cable.subscriptions.create {
#         channel: "ChatRoomsChannel"
#         chat_room_id: channelId
#       },
#       connected: ->
#         # Called when the subscription is ready for use on the server
#
#       disconnected: ->
#         # Called when the subscription has been terminated by the server
#
#       received: (data) ->
#         userName = data["user"]
#         time = data["time"]
#         body = data["message"]
#         newMessage = '<div class="card">
#           <div class="card-block">
#             <div class="row">
#               <div class="col-md-1">'.concat(userName).concat(
#               '</div>
#               <div class="col-md-11">
#                 <p class="card-text">
#                   <span class="text-muted">').concat(userName).concat(" at ").concat(time).concat("
#                  says </span><br>").concat(body).concat('</p>
#               </div>
#             </div>
#           </div>
#         </div>')
#         messages.append $(newMessage)
#         # messages.append data['message']
#         messages_to_bottom()
#
#       send_message: (message, channelId) ->
#         @perform 'send_message', message: message, chat_room_id: channelId
#
#    $('#new_message').submit (e) ->
#       $this = $(this)
#       textarea = $this.find('#message_body')
#       if $.trim(textarea.val()).length > 1
#         App.global_chat.send_message textarea.val(), channelId
#         textarea.val('')
#       e.preventDefault()
#       return false
