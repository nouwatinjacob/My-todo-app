module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
        foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };

  return TodoItem;
};