class News < ActiveRecord::Base
	validates :title, presence: true
end
