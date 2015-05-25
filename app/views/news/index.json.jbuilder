json.array!(@news) do |news|
  json.extract! news, :id, :name, :title, :content
  json.url news_url(news, format: :json)
end
