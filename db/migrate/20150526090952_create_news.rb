class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.integer :id
      t.string :title
      t.date :date
      t.string :text
      t.timestamps null: false
    end
  end
end
