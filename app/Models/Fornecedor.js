'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedor extends Model {
    static get table () {
        return 'fornecedor'
    }
    static get updatedAtColumn () {
        return null
    }
    static get createdAtColumn () {
        return null
    }
}

module.exports = Fornecedor
