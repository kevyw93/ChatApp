json.messages do
  json.array! @chat_room.messages.each do |message|
    json.extract! message, :body, :created_at
    json.user message.user
  end
end
