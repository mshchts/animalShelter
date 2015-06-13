class NewsController < ApplicationController
  before_action :set_news, only: [:show]
  # GET /news
  # GET /news.json
  def index
    @news = News.all
  end

  # def seenews
  #   @news1 = News.find(params[:id])
  #   if @news.seenews(news_params)
  #     redirect_to(@news)
  #   else
  #     render "news1"
  #   end
  # end

  # def edit
  # end
  
  # GET /news/1
  # GET /news/1.json
  def show
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_news
      @news = News.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def news_params
      params.require(:news).permit(:id, :title, :text, :date, :photo)
    end
end
