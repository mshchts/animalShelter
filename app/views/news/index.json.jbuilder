json.array!(@news) do |news|
  json.extract! news, :id, :title, :text
  json.url news_url(news, format: :json)
end
