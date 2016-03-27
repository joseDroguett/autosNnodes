class Auto < ActiveRecord::Base
	 has_many :piezas

  def as_json(options = {})
    super(options.merge(include: :piezas))
  end
end