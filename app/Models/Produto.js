'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    static get table () {
        return 'produto'
    }
    static get updatedAtColumn () {
        return null
    }
    static get createdAtColumn () {
        return null
    }
    categoria(){
        return this.belongsTo('App/Models/Categoria','id_categoria','id')
    }
    fornecedor(){
        return this.belongsTo('App/Models/Fornecedor','id_fornecedor','id')
    }
    marca(){
        return this.belongsTo('App/Models/Marca','id_marca','id')
    }
}

module.exports = Produto
