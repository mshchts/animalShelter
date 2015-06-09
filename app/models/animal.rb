class Animal < ActiveRecord::Base
	has_attached_file :photo, :styles => { :medium => "640x480>", :thumb => "160x120>" }, :default_url => "/images/ico_photos.png"

	validates_attachment_content_type :photo, 
    content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	validates :animal_type, presence: true
end