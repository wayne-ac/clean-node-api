import env from '../../../config/env'
import { DbAuthentication } from '../../../../data/usecases/authentication/db-authentication'
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { JwtAdapter } from '../../../../infra/cryptography/jwt-adapter/jwt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { Authentication } from '../../../../domain/usecases/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const accountMongoRepository = new AccountMongoRepository()
  const bCryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountMongoRepository, bCryptAdapter, jwtAdapter, accountMongoRepository)
}
