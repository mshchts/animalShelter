class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.integer :id
      t.string :animal_type
      t.string :name
      t.string :sex
      t.string :size
      t.string :age
      t.string :sterile
      t.string :description
      t.attachment :photo

      t.timestamps null: false
    end
  end
end
