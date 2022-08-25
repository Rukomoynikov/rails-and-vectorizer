class AddVectorFieldToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :vector, :float, array: true
  end
end
