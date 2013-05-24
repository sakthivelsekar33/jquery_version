class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :place
      t.string :time

      t.timestamps
    end
  end
end
