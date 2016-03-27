class CreatePiezas < ActiveRecord::Migration
  def change
    create_table :piezas do |t|
      t.string :nombre
      t.integer :cantidad
      t.references :auto, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
