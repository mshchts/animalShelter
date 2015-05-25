json.array!(@animals) do |animal|
  json.extract! animal, :id, :name, :title, :content
  json.url animal_url(animal, format: :json)
end
