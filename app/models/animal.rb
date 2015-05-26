class Animal < ActiveRecord::Base
	has_many :news, dependent: :destroy
	has_one :location, dependent: :destroy

	validates :type, presence: true
end