class Animal < ActiveRecord::Base

	validates :animal_type, presence: true
end