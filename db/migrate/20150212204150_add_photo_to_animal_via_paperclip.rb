class AddPhotoToAnimalViaPaperclip < ActiveRecord::Migration
  def self.up
    add_attachment :animals, :photo
  end

  def self.down
    remove_attachment :animals, :photo
  end
end
