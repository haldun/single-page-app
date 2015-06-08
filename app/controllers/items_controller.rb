class ItemsController < ActionController::API
  def index
    render json: Item.all
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item, status: :created, location: item
    else
      render json: item.errors, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:item).permit(:title)
  end
end
