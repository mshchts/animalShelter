class AddPhotoToAnimalViaPaperclip < ActiveRecord::Migration
  def self.up
    change_table :animals do |t|
      t.has_attached_file :photo
    end
  end

  def self.down
    drop_attached_file :animals, :photo
  end
end

