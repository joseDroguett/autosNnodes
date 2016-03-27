class CreateAutos < ActiveRecord::Migration
  def change
    create_table :autos do |t|
      t.string :marca
      t.string :modelo
      t.string :latitud
      t.string :longuitud

      t.timestamps null: false
    end
  end
end
