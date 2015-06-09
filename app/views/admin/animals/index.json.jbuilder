json.array!(@animals) do |animal|
  json.extract! animal, :id, :type, :name, :sex, :size, :age, :sterile, :description, :photo
  json.url animal_url(animal, format: :json)
end
