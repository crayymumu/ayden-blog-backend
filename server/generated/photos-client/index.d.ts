
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PImage
 * 
 */
export type PImage = $Result.DefaultSelection<Prisma.$PImagePayload>
/**
 * Model PAlbum
 * 
 */
export type PAlbum = $Result.DefaultSelection<Prisma.$PAlbumPayload>
/**
 * Model PImageAlbumRelation
 * 
 */
export type PImageAlbumRelation = $Result.DefaultSelection<Prisma.$PImageAlbumRelationPayload>
/**
 * Model PTag
 * 
 */
export type PTag = $Result.DefaultSelection<Prisma.$PTagPayload>
/**
 * Model PImageTagRelation
 * 
 */
export type PImageTagRelation = $Result.DefaultSelection<Prisma.$PImageTagRelationPayload>
/**
 * Model PConfig
 * 
 */
export type PConfig = $Result.DefaultSelection<Prisma.$PConfigPayload>
/**
 * Model PVisitLog
 * 
 */
export type PVisitLog = $Result.DefaultSelection<Prisma.$PVisitLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PImages
 * const pImages = await prisma.pImage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PImages
   * const pImages = await prisma.pImage.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pImage`: Exposes CRUD operations for the **PImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PImages
    * const pImages = await prisma.pImage.findMany()
    * ```
    */
  get pImage(): Prisma.PImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pAlbum`: Exposes CRUD operations for the **PAlbum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAlbums
    * const pAlbums = await prisma.pAlbum.findMany()
    * ```
    */
  get pAlbum(): Prisma.PAlbumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pImageAlbumRelation`: Exposes CRUD operations for the **PImageAlbumRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PImageAlbumRelations
    * const pImageAlbumRelations = await prisma.pImageAlbumRelation.findMany()
    * ```
    */
  get pImageAlbumRelation(): Prisma.PImageAlbumRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pTag`: Exposes CRUD operations for the **PTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PTags
    * const pTags = await prisma.pTag.findMany()
    * ```
    */
  get pTag(): Prisma.PTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pImageTagRelation`: Exposes CRUD operations for the **PImageTagRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PImageTagRelations
    * const pImageTagRelations = await prisma.pImageTagRelation.findMany()
    * ```
    */
  get pImageTagRelation(): Prisma.PImageTagRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pConfig`: Exposes CRUD operations for the **PConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PConfigs
    * const pConfigs = await prisma.pConfig.findMany()
    * ```
    */
  get pConfig(): Prisma.PConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pVisitLog`: Exposes CRUD operations for the **PVisitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PVisitLogs
    * const pVisitLogs = await prisma.pVisitLog.findMany()
    * ```
    */
  get pVisitLog(): Prisma.PVisitLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PImage: 'PImage',
    PAlbum: 'PAlbum',
    PImageAlbumRelation: 'PImageAlbumRelation',
    PTag: 'PTag',
    PImageTagRelation: 'PImageTagRelation',
    PConfig: 'PConfig',
    PVisitLog: 'PVisitLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pImage" | "pAlbum" | "pImageAlbumRelation" | "pTag" | "pImageTagRelation" | "pConfig" | "pVisitLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PImage: {
        payload: Prisma.$PImagePayload<ExtArgs>
        fields: Prisma.PImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          findFirst: {
            args: Prisma.PImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          findMany: {
            args: Prisma.PImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>[]
          }
          create: {
            args: Prisma.PImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          createMany: {
            args: Prisma.PImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>[]
          }
          delete: {
            args: Prisma.PImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          update: {
            args: Prisma.PImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          deleteMany: {
            args: Prisma.PImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>[]
          }
          upsert: {
            args: Prisma.PImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImagePayload>
          }
          aggregate: {
            args: Prisma.PImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePImage>
          }
          groupBy: {
            args: Prisma.PImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PImageCountArgs<ExtArgs>
            result: $Utils.Optional<PImageCountAggregateOutputType> | number
          }
        }
      }
      PAlbum: {
        payload: Prisma.$PAlbumPayload<ExtArgs>
        fields: Prisma.PAlbumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAlbumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAlbumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          findFirst: {
            args: Prisma.PAlbumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAlbumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          findMany: {
            args: Prisma.PAlbumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>[]
          }
          create: {
            args: Prisma.PAlbumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          createMany: {
            args: Prisma.PAlbumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAlbumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>[]
          }
          delete: {
            args: Prisma.PAlbumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          update: {
            args: Prisma.PAlbumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          deleteMany: {
            args: Prisma.PAlbumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAlbumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAlbumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>[]
          }
          upsert: {
            args: Prisma.PAlbumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAlbumPayload>
          }
          aggregate: {
            args: Prisma.PAlbumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAlbum>
          }
          groupBy: {
            args: Prisma.PAlbumGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAlbumGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAlbumCountArgs<ExtArgs>
            result: $Utils.Optional<PAlbumCountAggregateOutputType> | number
          }
        }
      }
      PImageAlbumRelation: {
        payload: Prisma.$PImageAlbumRelationPayload<ExtArgs>
        fields: Prisma.PImageAlbumRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PImageAlbumRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PImageAlbumRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          findFirst: {
            args: Prisma.PImageAlbumRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PImageAlbumRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          findMany: {
            args: Prisma.PImageAlbumRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>[]
          }
          create: {
            args: Prisma.PImageAlbumRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          createMany: {
            args: Prisma.PImageAlbumRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PImageAlbumRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>[]
          }
          delete: {
            args: Prisma.PImageAlbumRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          update: {
            args: Prisma.PImageAlbumRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          deleteMany: {
            args: Prisma.PImageAlbumRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PImageAlbumRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PImageAlbumRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>[]
          }
          upsert: {
            args: Prisma.PImageAlbumRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageAlbumRelationPayload>
          }
          aggregate: {
            args: Prisma.PImageAlbumRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePImageAlbumRelation>
          }
          groupBy: {
            args: Prisma.PImageAlbumRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PImageAlbumRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PImageAlbumRelationCountArgs<ExtArgs>
            result: $Utils.Optional<PImageAlbumRelationCountAggregateOutputType> | number
          }
        }
      }
      PTag: {
        payload: Prisma.$PTagPayload<ExtArgs>
        fields: Prisma.PTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          findFirst: {
            args: Prisma.PTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          findMany: {
            args: Prisma.PTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>[]
          }
          create: {
            args: Prisma.PTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          createMany: {
            args: Prisma.PTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>[]
          }
          delete: {
            args: Prisma.PTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          update: {
            args: Prisma.PTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          deleteMany: {
            args: Prisma.PTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>[]
          }
          upsert: {
            args: Prisma.PTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PTagPayload>
          }
          aggregate: {
            args: Prisma.PTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePTag>
          }
          groupBy: {
            args: Prisma.PTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PTagCountArgs<ExtArgs>
            result: $Utils.Optional<PTagCountAggregateOutputType> | number
          }
        }
      }
      PImageTagRelation: {
        payload: Prisma.$PImageTagRelationPayload<ExtArgs>
        fields: Prisma.PImageTagRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PImageTagRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PImageTagRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          findFirst: {
            args: Prisma.PImageTagRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PImageTagRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          findMany: {
            args: Prisma.PImageTagRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>[]
          }
          create: {
            args: Prisma.PImageTagRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          createMany: {
            args: Prisma.PImageTagRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PImageTagRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>[]
          }
          delete: {
            args: Prisma.PImageTagRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          update: {
            args: Prisma.PImageTagRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          deleteMany: {
            args: Prisma.PImageTagRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PImageTagRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PImageTagRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>[]
          }
          upsert: {
            args: Prisma.PImageTagRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PImageTagRelationPayload>
          }
          aggregate: {
            args: Prisma.PImageTagRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePImageTagRelation>
          }
          groupBy: {
            args: Prisma.PImageTagRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PImageTagRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PImageTagRelationCountArgs<ExtArgs>
            result: $Utils.Optional<PImageTagRelationCountAggregateOutputType> | number
          }
        }
      }
      PConfig: {
        payload: Prisma.$PConfigPayload<ExtArgs>
        fields: Prisma.PConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          findFirst: {
            args: Prisma.PConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          findMany: {
            args: Prisma.PConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>[]
          }
          create: {
            args: Prisma.PConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          createMany: {
            args: Prisma.PConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>[]
          }
          delete: {
            args: Prisma.PConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          update: {
            args: Prisma.PConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          deleteMany: {
            args: Prisma.PConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>[]
          }
          upsert: {
            args: Prisma.PConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PConfigPayload>
          }
          aggregate: {
            args: Prisma.PConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePConfig>
          }
          groupBy: {
            args: Prisma.PConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<PConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.PConfigCountArgs<ExtArgs>
            result: $Utils.Optional<PConfigCountAggregateOutputType> | number
          }
        }
      }
      PVisitLog: {
        payload: Prisma.$PVisitLogPayload<ExtArgs>
        fields: Prisma.PVisitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PVisitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PVisitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          findFirst: {
            args: Prisma.PVisitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PVisitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          findMany: {
            args: Prisma.PVisitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>[]
          }
          create: {
            args: Prisma.PVisitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          createMany: {
            args: Prisma.PVisitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PVisitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>[]
          }
          delete: {
            args: Prisma.PVisitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          update: {
            args: Prisma.PVisitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          deleteMany: {
            args: Prisma.PVisitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PVisitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PVisitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>[]
          }
          upsert: {
            args: Prisma.PVisitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PVisitLogPayload>
          }
          aggregate: {
            args: Prisma.PVisitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePVisitLog>
          }
          groupBy: {
            args: Prisma.PVisitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PVisitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PVisitLogCountArgs<ExtArgs>
            result: $Utils.Optional<PVisitLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    pImage?: PImageOmit
    pAlbum?: PAlbumOmit
    pImageAlbumRelation?: PImageAlbumRelationOmit
    pTag?: PTagOmit
    pImageTagRelation?: PImageTagRelationOmit
    pConfig?: PConfigOmit
    pVisitLog?: PVisitLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PImageCountOutputType
   */

  export type PImageCountOutputType = {
    albumRelations: number
    tagRelations: number
  }

  export type PImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albumRelations?: boolean | PImageCountOutputTypeCountAlbumRelationsArgs
    tagRelations?: boolean | PImageCountOutputTypeCountTagRelationsArgs
  }

  // Custom InputTypes
  /**
   * PImageCountOutputType without action
   */
  export type PImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageCountOutputType
     */
    select?: PImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PImageCountOutputType without action
   */
  export type PImageCountOutputTypeCountAlbumRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageAlbumRelationWhereInput
  }

  /**
   * PImageCountOutputType without action
   */
  export type PImageCountOutputTypeCountTagRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageTagRelationWhereInput
  }


  /**
   * Count Type PAlbumCountOutputType
   */

  export type PAlbumCountOutputType = {
    imageRelations: number
  }

  export type PAlbumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageRelations?: boolean | PAlbumCountOutputTypeCountImageRelationsArgs
  }

  // Custom InputTypes
  /**
   * PAlbumCountOutputType without action
   */
  export type PAlbumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbumCountOutputType
     */
    select?: PAlbumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PAlbumCountOutputType without action
   */
  export type PAlbumCountOutputTypeCountImageRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageAlbumRelationWhereInput
  }


  /**
   * Count Type PTagCountOutputType
   */

  export type PTagCountOutputType = {
    children: number
    images: number
  }

  export type PTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | PTagCountOutputTypeCountChildrenArgs
    images?: boolean | PTagCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PTagCountOutputType without action
   */
  export type PTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTagCountOutputType
     */
    select?: PTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PTagCountOutputType without action
   */
  export type PTagCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PTagWhereInput
  }

  /**
   * PTagCountOutputType without action
   */
  export type PTagCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageTagRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PImage
   */

  export type AggregatePImage = {
    _count: PImageCountAggregateOutputType | null
    _avg: PImageAvgAggregateOutputType | null
    _sum: PImageSumAggregateOutputType | null
    _min: PImageMinAggregateOutputType | null
    _max: PImageMaxAggregateOutputType | null
  }

  export type PImageAvgAggregateOutputType = {
    width: number | null
    height: number | null
    type: number | null
    show: number | null
    showOnMainpage: number | null
    featured: number | null
    sort: number | null
    del: number | null
  }

  export type PImageSumAggregateOutputType = {
    width: number | null
    height: number | null
    type: number | null
    show: number | null
    showOnMainpage: number | null
    featured: number | null
    sort: number | null
    del: number | null
  }

  export type PImageMinAggregateOutputType = {
    id: string | null
    imageName: string | null
    url: string | null
    previewUrl: string | null
    videoUrl: string | null
    originalKey: string | null
    previewKey: string | null
    videoKey: string | null
    blurhash: string | null
    width: number | null
    height: number | null
    lon: string | null
    lat: string | null
    title: string | null
    detail: string | null
    type: number | null
    show: number | null
    showOnMainpage: number | null
    featured: number | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    del: number | null
  }

  export type PImageMaxAggregateOutputType = {
    id: string | null
    imageName: string | null
    url: string | null
    previewUrl: string | null
    videoUrl: string | null
    originalKey: string | null
    previewKey: string | null
    videoKey: string | null
    blurhash: string | null
    width: number | null
    height: number | null
    lon: string | null
    lat: string | null
    title: string | null
    detail: string | null
    type: number | null
    show: number | null
    showOnMainpage: number | null
    featured: number | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    del: number | null
  }

  export type PImageCountAggregateOutputType = {
    id: number
    imageName: number
    url: number
    previewUrl: number
    videoUrl: number
    originalKey: number
    previewKey: number
    videoKey: number
    blurhash: number
    exif: number
    labels: number
    width: number
    height: number
    lon: number
    lat: number
    title: number
    detail: number
    type: number
    show: number
    showOnMainpage: number
    featured: number
    sort: number
    createdAt: number
    updatedAt: number
    del: number
    _all: number
  }


  export type PImageAvgAggregateInputType = {
    width?: true
    height?: true
    type?: true
    show?: true
    showOnMainpage?: true
    featured?: true
    sort?: true
    del?: true
  }

  export type PImageSumAggregateInputType = {
    width?: true
    height?: true
    type?: true
    show?: true
    showOnMainpage?: true
    featured?: true
    sort?: true
    del?: true
  }

  export type PImageMinAggregateInputType = {
    id?: true
    imageName?: true
    url?: true
    previewUrl?: true
    videoUrl?: true
    originalKey?: true
    previewKey?: true
    videoKey?: true
    blurhash?: true
    width?: true
    height?: true
    lon?: true
    lat?: true
    title?: true
    detail?: true
    type?: true
    show?: true
    showOnMainpage?: true
    featured?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    del?: true
  }

  export type PImageMaxAggregateInputType = {
    id?: true
    imageName?: true
    url?: true
    previewUrl?: true
    videoUrl?: true
    originalKey?: true
    previewKey?: true
    videoKey?: true
    blurhash?: true
    width?: true
    height?: true
    lon?: true
    lat?: true
    title?: true
    detail?: true
    type?: true
    show?: true
    showOnMainpage?: true
    featured?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    del?: true
  }

  export type PImageCountAggregateInputType = {
    id?: true
    imageName?: true
    url?: true
    previewUrl?: true
    videoUrl?: true
    originalKey?: true
    previewKey?: true
    videoKey?: true
    blurhash?: true
    exif?: true
    labels?: true
    width?: true
    height?: true
    lon?: true
    lat?: true
    title?: true
    detail?: true
    type?: true
    show?: true
    showOnMainpage?: true
    featured?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    del?: true
    _all?: true
  }

  export type PImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImage to aggregate.
     */
    where?: PImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImages to fetch.
     */
    orderBy?: PImageOrderByWithRelationInput | PImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PImages
    **/
    _count?: true | PImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PImageMaxAggregateInputType
  }

  export type GetPImageAggregateType<T extends PImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePImage[P]>
      : GetScalarType<T[P], AggregatePImage[P]>
  }




  export type PImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageWhereInput
    orderBy?: PImageOrderByWithAggregationInput | PImageOrderByWithAggregationInput[]
    by: PImageScalarFieldEnum[] | PImageScalarFieldEnum
    having?: PImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PImageCountAggregateInputType | true
    _avg?: PImageAvgAggregateInputType
    _sum?: PImageSumAggregateInputType
    _min?: PImageMinAggregateInputType
    _max?: PImageMaxAggregateInputType
  }

  export type PImageGroupByOutputType = {
    id: string
    imageName: string | null
    url: string | null
    previewUrl: string | null
    videoUrl: string | null
    originalKey: string | null
    previewKey: string | null
    videoKey: string | null
    blurhash: string | null
    exif: JsonValue | null
    labels: JsonValue | null
    width: number
    height: number
    lon: string | null
    lat: string | null
    title: string | null
    detail: string | null
    type: number
    show: number
    showOnMainpage: number
    featured: number
    sort: number
    createdAt: Date
    updatedAt: Date | null
    del: number
    _count: PImageCountAggregateOutputType | null
    _avg: PImageAvgAggregateOutputType | null
    _sum: PImageSumAggregateOutputType | null
    _min: PImageMinAggregateOutputType | null
    _max: PImageMaxAggregateOutputType | null
  }

  type GetPImageGroupByPayload<T extends PImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PImageGroupByOutputType[P]>
            : GetScalarType<T[P], PImageGroupByOutputType[P]>
        }
      >
    >


  export type PImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageName?: boolean
    url?: boolean
    previewUrl?: boolean
    videoUrl?: boolean
    originalKey?: boolean
    previewKey?: boolean
    videoKey?: boolean
    blurhash?: boolean
    exif?: boolean
    labels?: boolean
    width?: boolean
    height?: boolean
    lon?: boolean
    lat?: boolean
    title?: boolean
    detail?: boolean
    type?: boolean
    show?: boolean
    showOnMainpage?: boolean
    featured?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
    albumRelations?: boolean | PImage$albumRelationsArgs<ExtArgs>
    tagRelations?: boolean | PImage$tagRelationsArgs<ExtArgs>
    _count?: boolean | PImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImage"]>

  export type PImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageName?: boolean
    url?: boolean
    previewUrl?: boolean
    videoUrl?: boolean
    originalKey?: boolean
    previewKey?: boolean
    videoKey?: boolean
    blurhash?: boolean
    exif?: boolean
    labels?: boolean
    width?: boolean
    height?: boolean
    lon?: boolean
    lat?: boolean
    title?: boolean
    detail?: boolean
    type?: boolean
    show?: boolean
    showOnMainpage?: boolean
    featured?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
  }, ExtArgs["result"]["pImage"]>

  export type PImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageName?: boolean
    url?: boolean
    previewUrl?: boolean
    videoUrl?: boolean
    originalKey?: boolean
    previewKey?: boolean
    videoKey?: boolean
    blurhash?: boolean
    exif?: boolean
    labels?: boolean
    width?: boolean
    height?: boolean
    lon?: boolean
    lat?: boolean
    title?: boolean
    detail?: boolean
    type?: boolean
    show?: boolean
    showOnMainpage?: boolean
    featured?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
  }, ExtArgs["result"]["pImage"]>

  export type PImageSelectScalar = {
    id?: boolean
    imageName?: boolean
    url?: boolean
    previewUrl?: boolean
    videoUrl?: boolean
    originalKey?: boolean
    previewKey?: boolean
    videoKey?: boolean
    blurhash?: boolean
    exif?: boolean
    labels?: boolean
    width?: boolean
    height?: boolean
    lon?: boolean
    lat?: boolean
    title?: boolean
    detail?: boolean
    type?: boolean
    show?: boolean
    showOnMainpage?: boolean
    featured?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
  }

  export type PImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageName" | "url" | "previewUrl" | "videoUrl" | "originalKey" | "previewKey" | "videoKey" | "blurhash" | "exif" | "labels" | "width" | "height" | "lon" | "lat" | "title" | "detail" | "type" | "show" | "showOnMainpage" | "featured" | "sort" | "createdAt" | "updatedAt" | "del", ExtArgs["result"]["pImage"]>
  export type PImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albumRelations?: boolean | PImage$albumRelationsArgs<ExtArgs>
    tagRelations?: boolean | PImage$tagRelationsArgs<ExtArgs>
    _count?: boolean | PImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PImage"
    objects: {
      albumRelations: Prisma.$PImageAlbumRelationPayload<ExtArgs>[]
      tagRelations: Prisma.$PImageTagRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageName: string | null
      url: string | null
      previewUrl: string | null
      videoUrl: string | null
      originalKey: string | null
      previewKey: string | null
      videoKey: string | null
      blurhash: string | null
      exif: Prisma.JsonValue | null
      labels: Prisma.JsonValue | null
      width: number
      height: number
      lon: string | null
      lat: string | null
      title: string | null
      detail: string | null
      type: number
      show: number
      showOnMainpage: number
      featured: number
      sort: number
      createdAt: Date
      updatedAt: Date | null
      del: number
    }, ExtArgs["result"]["pImage"]>
    composites: {}
  }

  type PImageGetPayload<S extends boolean | null | undefined | PImageDefaultArgs> = $Result.GetResult<Prisma.$PImagePayload, S>

  type PImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PImageCountAggregateInputType | true
    }

  export interface PImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PImage'], meta: { name: 'PImage' } }
    /**
     * Find zero or one PImage that matches the filter.
     * @param {PImageFindUniqueArgs} args - Arguments to find a PImage
     * @example
     * // Get one PImage
     * const pImage = await prisma.pImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PImageFindUniqueArgs>(args: SelectSubset<T, PImageFindUniqueArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PImageFindUniqueOrThrowArgs} args - Arguments to find a PImage
     * @example
     * // Get one PImage
     * const pImage = await prisma.pImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageFindFirstArgs} args - Arguments to find a PImage
     * @example
     * // Get one PImage
     * const pImage = await prisma.pImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PImageFindFirstArgs>(args?: SelectSubset<T, PImageFindFirstArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageFindFirstOrThrowArgs} args - Arguments to find a PImage
     * @example
     * // Get one PImage
     * const pImage = await prisma.pImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PImages
     * const pImages = await prisma.pImage.findMany()
     * 
     * // Get first 10 PImages
     * const pImages = await prisma.pImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pImageWithIdOnly = await prisma.pImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PImageFindManyArgs>(args?: SelectSubset<T, PImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PImage.
     * @param {PImageCreateArgs} args - Arguments to create a PImage.
     * @example
     * // Create one PImage
     * const PImage = await prisma.pImage.create({
     *   data: {
     *     // ... data to create a PImage
     *   }
     * })
     * 
     */
    create<T extends PImageCreateArgs>(args: SelectSubset<T, PImageCreateArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PImages.
     * @param {PImageCreateManyArgs} args - Arguments to create many PImages.
     * @example
     * // Create many PImages
     * const pImage = await prisma.pImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PImageCreateManyArgs>(args?: SelectSubset<T, PImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PImages and returns the data saved in the database.
     * @param {PImageCreateManyAndReturnArgs} args - Arguments to create many PImages.
     * @example
     * // Create many PImages
     * const pImage = await prisma.pImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PImages and only return the `id`
     * const pImageWithIdOnly = await prisma.pImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PImage.
     * @param {PImageDeleteArgs} args - Arguments to delete one PImage.
     * @example
     * // Delete one PImage
     * const PImage = await prisma.pImage.delete({
     *   where: {
     *     // ... filter to delete one PImage
     *   }
     * })
     * 
     */
    delete<T extends PImageDeleteArgs>(args: SelectSubset<T, PImageDeleteArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PImage.
     * @param {PImageUpdateArgs} args - Arguments to update one PImage.
     * @example
     * // Update one PImage
     * const pImage = await prisma.pImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PImageUpdateArgs>(args: SelectSubset<T, PImageUpdateArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PImages.
     * @param {PImageDeleteManyArgs} args - Arguments to filter PImages to delete.
     * @example
     * // Delete a few PImages
     * const { count } = await prisma.pImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PImageDeleteManyArgs>(args?: SelectSubset<T, PImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PImages
     * const pImage = await prisma.pImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PImageUpdateManyArgs>(args: SelectSubset<T, PImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImages and returns the data updated in the database.
     * @param {PImageUpdateManyAndReturnArgs} args - Arguments to update many PImages.
     * @example
     * // Update many PImages
     * const pImage = await prisma.pImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PImages and only return the `id`
     * const pImageWithIdOnly = await prisma.pImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PImage.
     * @param {PImageUpsertArgs} args - Arguments to update or create a PImage.
     * @example
     * // Update or create a PImage
     * const pImage = await prisma.pImage.upsert({
     *   create: {
     *     // ... data to create a PImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PImage we want to update
     *   }
     * })
     */
    upsert<T extends PImageUpsertArgs>(args: SelectSubset<T, PImageUpsertArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageCountArgs} args - Arguments to filter PImages to count.
     * @example
     * // Count the number of PImages
     * const count = await prisma.pImage.count({
     *   where: {
     *     // ... the filter for the PImages we want to count
     *   }
     * })
    **/
    count<T extends PImageCountArgs>(
      args?: Subset<T, PImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PImageAggregateArgs>(args: Subset<T, PImageAggregateArgs>): Prisma.PrismaPromise<GetPImageAggregateType<T>>

    /**
     * Group by PImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PImageGroupByArgs['orderBy'] }
        : { orderBy?: PImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PImage model
   */
  readonly fields: PImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    albumRelations<T extends PImage$albumRelationsArgs<ExtArgs> = {}>(args?: Subset<T, PImage$albumRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tagRelations<T extends PImage$tagRelationsArgs<ExtArgs> = {}>(args?: Subset<T, PImage$tagRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PImage model
   */
  interface PImageFieldRefs {
    readonly id: FieldRef<"PImage", 'String'>
    readonly imageName: FieldRef<"PImage", 'String'>
    readonly url: FieldRef<"PImage", 'String'>
    readonly previewUrl: FieldRef<"PImage", 'String'>
    readonly videoUrl: FieldRef<"PImage", 'String'>
    readonly originalKey: FieldRef<"PImage", 'String'>
    readonly previewKey: FieldRef<"PImage", 'String'>
    readonly videoKey: FieldRef<"PImage", 'String'>
    readonly blurhash: FieldRef<"PImage", 'String'>
    readonly exif: FieldRef<"PImage", 'Json'>
    readonly labels: FieldRef<"PImage", 'Json'>
    readonly width: FieldRef<"PImage", 'Int'>
    readonly height: FieldRef<"PImage", 'Int'>
    readonly lon: FieldRef<"PImage", 'String'>
    readonly lat: FieldRef<"PImage", 'String'>
    readonly title: FieldRef<"PImage", 'String'>
    readonly detail: FieldRef<"PImage", 'String'>
    readonly type: FieldRef<"PImage", 'Int'>
    readonly show: FieldRef<"PImage", 'Int'>
    readonly showOnMainpage: FieldRef<"PImage", 'Int'>
    readonly featured: FieldRef<"PImage", 'Int'>
    readonly sort: FieldRef<"PImage", 'Int'>
    readonly createdAt: FieldRef<"PImage", 'DateTime'>
    readonly updatedAt: FieldRef<"PImage", 'DateTime'>
    readonly del: FieldRef<"PImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PImage findUnique
   */
  export type PImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter, which PImage to fetch.
     */
    where: PImageWhereUniqueInput
  }

  /**
   * PImage findUniqueOrThrow
   */
  export type PImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter, which PImage to fetch.
     */
    where: PImageWhereUniqueInput
  }

  /**
   * PImage findFirst
   */
  export type PImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter, which PImage to fetch.
     */
    where?: PImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImages to fetch.
     */
    orderBy?: PImageOrderByWithRelationInput | PImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImages.
     */
    cursor?: PImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImages.
     */
    distinct?: PImageScalarFieldEnum | PImageScalarFieldEnum[]
  }

  /**
   * PImage findFirstOrThrow
   */
  export type PImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter, which PImage to fetch.
     */
    where?: PImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImages to fetch.
     */
    orderBy?: PImageOrderByWithRelationInput | PImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImages.
     */
    cursor?: PImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImages.
     */
    distinct?: PImageScalarFieldEnum | PImageScalarFieldEnum[]
  }

  /**
   * PImage findMany
   */
  export type PImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter, which PImages to fetch.
     */
    where?: PImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImages to fetch.
     */
    orderBy?: PImageOrderByWithRelationInput | PImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PImages.
     */
    cursor?: PImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImages.
     */
    skip?: number
    distinct?: PImageScalarFieldEnum | PImageScalarFieldEnum[]
  }

  /**
   * PImage create
   */
  export type PImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PImage.
     */
    data?: XOR<PImageCreateInput, PImageUncheckedCreateInput>
  }

  /**
   * PImage createMany
   */
  export type PImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PImages.
     */
    data: PImageCreateManyInput | PImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PImage createManyAndReturn
   */
  export type PImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * The data used to create many PImages.
     */
    data: PImageCreateManyInput | PImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PImage update
   */
  export type PImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PImage.
     */
    data: XOR<PImageUpdateInput, PImageUncheckedUpdateInput>
    /**
     * Choose, which PImage to update.
     */
    where: PImageWhereUniqueInput
  }

  /**
   * PImage updateMany
   */
  export type PImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PImages.
     */
    data: XOR<PImageUpdateManyMutationInput, PImageUncheckedUpdateManyInput>
    /**
     * Filter which PImages to update
     */
    where?: PImageWhereInput
    /**
     * Limit how many PImages to update.
     */
    limit?: number
  }

  /**
   * PImage updateManyAndReturn
   */
  export type PImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * The data used to update PImages.
     */
    data: XOR<PImageUpdateManyMutationInput, PImageUncheckedUpdateManyInput>
    /**
     * Filter which PImages to update
     */
    where?: PImageWhereInput
    /**
     * Limit how many PImages to update.
     */
    limit?: number
  }

  /**
   * PImage upsert
   */
  export type PImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PImage to update in case it exists.
     */
    where: PImageWhereUniqueInput
    /**
     * In case the PImage found by the `where` argument doesn't exist, create a new PImage with this data.
     */
    create: XOR<PImageCreateInput, PImageUncheckedCreateInput>
    /**
     * In case the PImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PImageUpdateInput, PImageUncheckedUpdateInput>
  }

  /**
   * PImage delete
   */
  export type PImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
    /**
     * Filter which PImage to delete.
     */
    where: PImageWhereUniqueInput
  }

  /**
   * PImage deleteMany
   */
  export type PImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImages to delete
     */
    where?: PImageWhereInput
    /**
     * Limit how many PImages to delete.
     */
    limit?: number
  }

  /**
   * PImage.albumRelations
   */
  export type PImage$albumRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    where?: PImageAlbumRelationWhereInput
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    cursor?: PImageAlbumRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PImageAlbumRelationScalarFieldEnum | PImageAlbumRelationScalarFieldEnum[]
  }

  /**
   * PImage.tagRelations
   */
  export type PImage$tagRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    where?: PImageTagRelationWhereInput
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    cursor?: PImageTagRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PImageTagRelationScalarFieldEnum | PImageTagRelationScalarFieldEnum[]
  }

  /**
   * PImage without action
   */
  export type PImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImage
     */
    select?: PImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImage
     */
    omit?: PImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageInclude<ExtArgs> | null
  }


  /**
   * Model PAlbum
   */

  export type AggregatePAlbum = {
    _count: PAlbumCountAggregateOutputType | null
    _avg: PAlbumAvgAggregateOutputType | null
    _sum: PAlbumSumAggregateOutputType | null
    _min: PAlbumMinAggregateOutputType | null
    _max: PAlbumMaxAggregateOutputType | null
  }

  export type PAlbumAvgAggregateOutputType = {
    show: number | null
    sort: number | null
    randomShow: number | null
    del: number | null
    imageSorting: number | null
  }

  export type PAlbumSumAggregateOutputType = {
    show: number | null
    sort: number | null
    randomShow: number | null
    del: number | null
    imageSorting: number | null
  }

  export type PAlbumMinAggregateOutputType = {
    id: string | null
    name: string | null
    albumValue: string | null
    detail: string | null
    theme: string | null
    show: number | null
    sort: number | null
    randomShow: number | null
    license: string | null
    createdAt: Date | null
    updatedAt: Date | null
    del: number | null
    imageSorting: number | null
    cover: string | null
  }

  export type PAlbumMaxAggregateOutputType = {
    id: string | null
    name: string | null
    albumValue: string | null
    detail: string | null
    theme: string | null
    show: number | null
    sort: number | null
    randomShow: number | null
    license: string | null
    createdAt: Date | null
    updatedAt: Date | null
    del: number | null
    imageSorting: number | null
    cover: string | null
  }

  export type PAlbumCountAggregateOutputType = {
    id: number
    name: number
    albumValue: number
    detail: number
    theme: number
    show: number
    sort: number
    randomShow: number
    license: number
    createdAt: number
    updatedAt: number
    del: number
    imageSorting: number
    cover: number
    _all: number
  }


  export type PAlbumAvgAggregateInputType = {
    show?: true
    sort?: true
    randomShow?: true
    del?: true
    imageSorting?: true
  }

  export type PAlbumSumAggregateInputType = {
    show?: true
    sort?: true
    randomShow?: true
    del?: true
    imageSorting?: true
  }

  export type PAlbumMinAggregateInputType = {
    id?: true
    name?: true
    albumValue?: true
    detail?: true
    theme?: true
    show?: true
    sort?: true
    randomShow?: true
    license?: true
    createdAt?: true
    updatedAt?: true
    del?: true
    imageSorting?: true
    cover?: true
  }

  export type PAlbumMaxAggregateInputType = {
    id?: true
    name?: true
    albumValue?: true
    detail?: true
    theme?: true
    show?: true
    sort?: true
    randomShow?: true
    license?: true
    createdAt?: true
    updatedAt?: true
    del?: true
    imageSorting?: true
    cover?: true
  }

  export type PAlbumCountAggregateInputType = {
    id?: true
    name?: true
    albumValue?: true
    detail?: true
    theme?: true
    show?: true
    sort?: true
    randomShow?: true
    license?: true
    createdAt?: true
    updatedAt?: true
    del?: true
    imageSorting?: true
    cover?: true
    _all?: true
  }

  export type PAlbumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAlbum to aggregate.
     */
    where?: PAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAlbums to fetch.
     */
    orderBy?: PAlbumOrderByWithRelationInput | PAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAlbums
    **/
    _count?: true | PAlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAlbumMaxAggregateInputType
  }

  export type GetPAlbumAggregateType<T extends PAlbumAggregateArgs> = {
        [P in keyof T & keyof AggregatePAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAlbum[P]>
      : GetScalarType<T[P], AggregatePAlbum[P]>
  }




  export type PAlbumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAlbumWhereInput
    orderBy?: PAlbumOrderByWithAggregationInput | PAlbumOrderByWithAggregationInput[]
    by: PAlbumScalarFieldEnum[] | PAlbumScalarFieldEnum
    having?: PAlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAlbumCountAggregateInputType | true
    _avg?: PAlbumAvgAggregateInputType
    _sum?: PAlbumSumAggregateInputType
    _min?: PAlbumMinAggregateInputType
    _max?: PAlbumMaxAggregateInputType
  }

  export type PAlbumGroupByOutputType = {
    id: string
    name: string
    albumValue: string
    detail: string | null
    theme: string
    show: number
    sort: number
    randomShow: number
    license: string | null
    createdAt: Date
    updatedAt: Date | null
    del: number
    imageSorting: number
    cover: string | null
    _count: PAlbumCountAggregateOutputType | null
    _avg: PAlbumAvgAggregateOutputType | null
    _sum: PAlbumSumAggregateOutputType | null
    _min: PAlbumMinAggregateOutputType | null
    _max: PAlbumMaxAggregateOutputType | null
  }

  type GetPAlbumGroupByPayload<T extends PAlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAlbumGroupByOutputType[P]>
            : GetScalarType<T[P], PAlbumGroupByOutputType[P]>
        }
      >
    >


  export type PAlbumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    albumValue?: boolean
    detail?: boolean
    theme?: boolean
    show?: boolean
    sort?: boolean
    randomShow?: boolean
    license?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
    imageSorting?: boolean
    cover?: boolean
    imageRelations?: boolean | PAlbum$imageRelationsArgs<ExtArgs>
    _count?: boolean | PAlbumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAlbum"]>

  export type PAlbumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    albumValue?: boolean
    detail?: boolean
    theme?: boolean
    show?: boolean
    sort?: boolean
    randomShow?: boolean
    license?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
    imageSorting?: boolean
    cover?: boolean
  }, ExtArgs["result"]["pAlbum"]>

  export type PAlbumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    albumValue?: boolean
    detail?: boolean
    theme?: boolean
    show?: boolean
    sort?: boolean
    randomShow?: boolean
    license?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
    imageSorting?: boolean
    cover?: boolean
  }, ExtArgs["result"]["pAlbum"]>

  export type PAlbumSelectScalar = {
    id?: boolean
    name?: boolean
    albumValue?: boolean
    detail?: boolean
    theme?: boolean
    show?: boolean
    sort?: boolean
    randomShow?: boolean
    license?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    del?: boolean
    imageSorting?: boolean
    cover?: boolean
  }

  export type PAlbumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "albumValue" | "detail" | "theme" | "show" | "sort" | "randomShow" | "license" | "createdAt" | "updatedAt" | "del" | "imageSorting" | "cover", ExtArgs["result"]["pAlbum"]>
  export type PAlbumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageRelations?: boolean | PAlbum$imageRelationsArgs<ExtArgs>
    _count?: boolean | PAlbumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PAlbumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PAlbumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PAlbumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAlbum"
    objects: {
      imageRelations: Prisma.$PImageAlbumRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      albumValue: string
      detail: string | null
      theme: string
      show: number
      sort: number
      randomShow: number
      license: string | null
      createdAt: Date
      updatedAt: Date | null
      del: number
      imageSorting: number
      cover: string | null
    }, ExtArgs["result"]["pAlbum"]>
    composites: {}
  }

  type PAlbumGetPayload<S extends boolean | null | undefined | PAlbumDefaultArgs> = $Result.GetResult<Prisma.$PAlbumPayload, S>

  type PAlbumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAlbumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAlbumCountAggregateInputType | true
    }

  export interface PAlbumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAlbum'], meta: { name: 'PAlbum' } }
    /**
     * Find zero or one PAlbum that matches the filter.
     * @param {PAlbumFindUniqueArgs} args - Arguments to find a PAlbum
     * @example
     * // Get one PAlbum
     * const pAlbum = await prisma.pAlbum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAlbumFindUniqueArgs>(args: SelectSubset<T, PAlbumFindUniqueArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAlbum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAlbumFindUniqueOrThrowArgs} args - Arguments to find a PAlbum
     * @example
     * // Get one PAlbum
     * const pAlbum = await prisma.pAlbum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAlbumFindUniqueOrThrowArgs>(args: SelectSubset<T, PAlbumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAlbum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumFindFirstArgs} args - Arguments to find a PAlbum
     * @example
     * // Get one PAlbum
     * const pAlbum = await prisma.pAlbum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAlbumFindFirstArgs>(args?: SelectSubset<T, PAlbumFindFirstArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAlbum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumFindFirstOrThrowArgs} args - Arguments to find a PAlbum
     * @example
     * // Get one PAlbum
     * const pAlbum = await prisma.pAlbum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAlbumFindFirstOrThrowArgs>(args?: SelectSubset<T, PAlbumFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAlbums
     * const pAlbums = await prisma.pAlbum.findMany()
     * 
     * // Get first 10 PAlbums
     * const pAlbums = await prisma.pAlbum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pAlbumWithIdOnly = await prisma.pAlbum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PAlbumFindManyArgs>(args?: SelectSubset<T, PAlbumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAlbum.
     * @param {PAlbumCreateArgs} args - Arguments to create a PAlbum.
     * @example
     * // Create one PAlbum
     * const PAlbum = await prisma.pAlbum.create({
     *   data: {
     *     // ... data to create a PAlbum
     *   }
     * })
     * 
     */
    create<T extends PAlbumCreateArgs>(args: SelectSubset<T, PAlbumCreateArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAlbums.
     * @param {PAlbumCreateManyArgs} args - Arguments to create many PAlbums.
     * @example
     * // Create many PAlbums
     * const pAlbum = await prisma.pAlbum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAlbumCreateManyArgs>(args?: SelectSubset<T, PAlbumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAlbums and returns the data saved in the database.
     * @param {PAlbumCreateManyAndReturnArgs} args - Arguments to create many PAlbums.
     * @example
     * // Create many PAlbums
     * const pAlbum = await prisma.pAlbum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAlbums and only return the `id`
     * const pAlbumWithIdOnly = await prisma.pAlbum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAlbumCreateManyAndReturnArgs>(args?: SelectSubset<T, PAlbumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAlbum.
     * @param {PAlbumDeleteArgs} args - Arguments to delete one PAlbum.
     * @example
     * // Delete one PAlbum
     * const PAlbum = await prisma.pAlbum.delete({
     *   where: {
     *     // ... filter to delete one PAlbum
     *   }
     * })
     * 
     */
    delete<T extends PAlbumDeleteArgs>(args: SelectSubset<T, PAlbumDeleteArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAlbum.
     * @param {PAlbumUpdateArgs} args - Arguments to update one PAlbum.
     * @example
     * // Update one PAlbum
     * const pAlbum = await prisma.pAlbum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAlbumUpdateArgs>(args: SelectSubset<T, PAlbumUpdateArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAlbums.
     * @param {PAlbumDeleteManyArgs} args - Arguments to filter PAlbums to delete.
     * @example
     * // Delete a few PAlbums
     * const { count } = await prisma.pAlbum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAlbumDeleteManyArgs>(args?: SelectSubset<T, PAlbumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAlbums
     * const pAlbum = await prisma.pAlbum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAlbumUpdateManyArgs>(args: SelectSubset<T, PAlbumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAlbums and returns the data updated in the database.
     * @param {PAlbumUpdateManyAndReturnArgs} args - Arguments to update many PAlbums.
     * @example
     * // Update many PAlbums
     * const pAlbum = await prisma.pAlbum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAlbums and only return the `id`
     * const pAlbumWithIdOnly = await prisma.pAlbum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PAlbumUpdateManyAndReturnArgs>(args: SelectSubset<T, PAlbumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAlbum.
     * @param {PAlbumUpsertArgs} args - Arguments to update or create a PAlbum.
     * @example
     * // Update or create a PAlbum
     * const pAlbum = await prisma.pAlbum.upsert({
     *   create: {
     *     // ... data to create a PAlbum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAlbum we want to update
     *   }
     * })
     */
    upsert<T extends PAlbumUpsertArgs>(args: SelectSubset<T, PAlbumUpsertArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumCountArgs} args - Arguments to filter PAlbums to count.
     * @example
     * // Count the number of PAlbums
     * const count = await prisma.pAlbum.count({
     *   where: {
     *     // ... the filter for the PAlbums we want to count
     *   }
     * })
    **/
    count<T extends PAlbumCountArgs>(
      args?: Subset<T, PAlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PAlbumAggregateArgs>(args: Subset<T, PAlbumAggregateArgs>): Prisma.PrismaPromise<GetPAlbumAggregateType<T>>

    /**
     * Group by PAlbum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PAlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAlbumGroupByArgs['orderBy'] }
        : { orderBy?: PAlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PAlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAlbum model
   */
  readonly fields: PAlbumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAlbum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAlbumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imageRelations<T extends PAlbum$imageRelationsArgs<ExtArgs> = {}>(args?: Subset<T, PAlbum$imageRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PAlbum model
   */
  interface PAlbumFieldRefs {
    readonly id: FieldRef<"PAlbum", 'String'>
    readonly name: FieldRef<"PAlbum", 'String'>
    readonly albumValue: FieldRef<"PAlbum", 'String'>
    readonly detail: FieldRef<"PAlbum", 'String'>
    readonly theme: FieldRef<"PAlbum", 'String'>
    readonly show: FieldRef<"PAlbum", 'Int'>
    readonly sort: FieldRef<"PAlbum", 'Int'>
    readonly randomShow: FieldRef<"PAlbum", 'Int'>
    readonly license: FieldRef<"PAlbum", 'String'>
    readonly createdAt: FieldRef<"PAlbum", 'DateTime'>
    readonly updatedAt: FieldRef<"PAlbum", 'DateTime'>
    readonly del: FieldRef<"PAlbum", 'Int'>
    readonly imageSorting: FieldRef<"PAlbum", 'Int'>
    readonly cover: FieldRef<"PAlbum", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PAlbum findUnique
   */
  export type PAlbumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter, which PAlbum to fetch.
     */
    where: PAlbumWhereUniqueInput
  }

  /**
   * PAlbum findUniqueOrThrow
   */
  export type PAlbumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter, which PAlbum to fetch.
     */
    where: PAlbumWhereUniqueInput
  }

  /**
   * PAlbum findFirst
   */
  export type PAlbumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter, which PAlbum to fetch.
     */
    where?: PAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAlbums to fetch.
     */
    orderBy?: PAlbumOrderByWithRelationInput | PAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAlbums.
     */
    cursor?: PAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAlbums.
     */
    distinct?: PAlbumScalarFieldEnum | PAlbumScalarFieldEnum[]
  }

  /**
   * PAlbum findFirstOrThrow
   */
  export type PAlbumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter, which PAlbum to fetch.
     */
    where?: PAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAlbums to fetch.
     */
    orderBy?: PAlbumOrderByWithRelationInput | PAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAlbums.
     */
    cursor?: PAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAlbums.
     */
    distinct?: PAlbumScalarFieldEnum | PAlbumScalarFieldEnum[]
  }

  /**
   * PAlbum findMany
   */
  export type PAlbumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter, which PAlbums to fetch.
     */
    where?: PAlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAlbums to fetch.
     */
    orderBy?: PAlbumOrderByWithRelationInput | PAlbumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAlbums.
     */
    cursor?: PAlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAlbums.
     */
    skip?: number
    distinct?: PAlbumScalarFieldEnum | PAlbumScalarFieldEnum[]
  }

  /**
   * PAlbum create
   */
  export type PAlbumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * The data needed to create a PAlbum.
     */
    data: XOR<PAlbumCreateInput, PAlbumUncheckedCreateInput>
  }

  /**
   * PAlbum createMany
   */
  export type PAlbumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAlbums.
     */
    data: PAlbumCreateManyInput | PAlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAlbum createManyAndReturn
   */
  export type PAlbumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * The data used to create many PAlbums.
     */
    data: PAlbumCreateManyInput | PAlbumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAlbum update
   */
  export type PAlbumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * The data needed to update a PAlbum.
     */
    data: XOR<PAlbumUpdateInput, PAlbumUncheckedUpdateInput>
    /**
     * Choose, which PAlbum to update.
     */
    where: PAlbumWhereUniqueInput
  }

  /**
   * PAlbum updateMany
   */
  export type PAlbumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAlbums.
     */
    data: XOR<PAlbumUpdateManyMutationInput, PAlbumUncheckedUpdateManyInput>
    /**
     * Filter which PAlbums to update
     */
    where?: PAlbumWhereInput
    /**
     * Limit how many PAlbums to update.
     */
    limit?: number
  }

  /**
   * PAlbum updateManyAndReturn
   */
  export type PAlbumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * The data used to update PAlbums.
     */
    data: XOR<PAlbumUpdateManyMutationInput, PAlbumUncheckedUpdateManyInput>
    /**
     * Filter which PAlbums to update
     */
    where?: PAlbumWhereInput
    /**
     * Limit how many PAlbums to update.
     */
    limit?: number
  }

  /**
   * PAlbum upsert
   */
  export type PAlbumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * The filter to search for the PAlbum to update in case it exists.
     */
    where: PAlbumWhereUniqueInput
    /**
     * In case the PAlbum found by the `where` argument doesn't exist, create a new PAlbum with this data.
     */
    create: XOR<PAlbumCreateInput, PAlbumUncheckedCreateInput>
    /**
     * In case the PAlbum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAlbumUpdateInput, PAlbumUncheckedUpdateInput>
  }

  /**
   * PAlbum delete
   */
  export type PAlbumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
    /**
     * Filter which PAlbum to delete.
     */
    where: PAlbumWhereUniqueInput
  }

  /**
   * PAlbum deleteMany
   */
  export type PAlbumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAlbums to delete
     */
    where?: PAlbumWhereInput
    /**
     * Limit how many PAlbums to delete.
     */
    limit?: number
  }

  /**
   * PAlbum.imageRelations
   */
  export type PAlbum$imageRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    where?: PImageAlbumRelationWhereInput
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    cursor?: PImageAlbumRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PImageAlbumRelationScalarFieldEnum | PImageAlbumRelationScalarFieldEnum[]
  }

  /**
   * PAlbum without action
   */
  export type PAlbumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAlbum
     */
    select?: PAlbumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAlbum
     */
    omit?: PAlbumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAlbumInclude<ExtArgs> | null
  }


  /**
   * Model PImageAlbumRelation
   */

  export type AggregatePImageAlbumRelation = {
    _count: PImageAlbumRelationCountAggregateOutputType | null
    _min: PImageAlbumRelationMinAggregateOutputType | null
    _max: PImageAlbumRelationMaxAggregateOutputType | null
  }

  export type PImageAlbumRelationMinAggregateOutputType = {
    albumValue: string | null
    imageId: string | null
  }

  export type PImageAlbumRelationMaxAggregateOutputType = {
    albumValue: string | null
    imageId: string | null
  }

  export type PImageAlbumRelationCountAggregateOutputType = {
    albumValue: number
    imageId: number
    _all: number
  }


  export type PImageAlbumRelationMinAggregateInputType = {
    albumValue?: true
    imageId?: true
  }

  export type PImageAlbumRelationMaxAggregateInputType = {
    albumValue?: true
    imageId?: true
  }

  export type PImageAlbumRelationCountAggregateInputType = {
    albumValue?: true
    imageId?: true
    _all?: true
  }

  export type PImageAlbumRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImageAlbumRelation to aggregate.
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageAlbumRelations to fetch.
     */
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PImageAlbumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageAlbumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageAlbumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PImageAlbumRelations
    **/
    _count?: true | PImageAlbumRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PImageAlbumRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PImageAlbumRelationMaxAggregateInputType
  }

  export type GetPImageAlbumRelationAggregateType<T extends PImageAlbumRelationAggregateArgs> = {
        [P in keyof T & keyof AggregatePImageAlbumRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePImageAlbumRelation[P]>
      : GetScalarType<T[P], AggregatePImageAlbumRelation[P]>
  }




  export type PImageAlbumRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageAlbumRelationWhereInput
    orderBy?: PImageAlbumRelationOrderByWithAggregationInput | PImageAlbumRelationOrderByWithAggregationInput[]
    by: PImageAlbumRelationScalarFieldEnum[] | PImageAlbumRelationScalarFieldEnum
    having?: PImageAlbumRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PImageAlbumRelationCountAggregateInputType | true
    _min?: PImageAlbumRelationMinAggregateInputType
    _max?: PImageAlbumRelationMaxAggregateInputType
  }

  export type PImageAlbumRelationGroupByOutputType = {
    albumValue: string
    imageId: string
    _count: PImageAlbumRelationCountAggregateOutputType | null
    _min: PImageAlbumRelationMinAggregateOutputType | null
    _max: PImageAlbumRelationMaxAggregateOutputType | null
  }

  type GetPImageAlbumRelationGroupByPayload<T extends PImageAlbumRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PImageAlbumRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PImageAlbumRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PImageAlbumRelationGroupByOutputType[P]>
            : GetScalarType<T[P], PImageAlbumRelationGroupByOutputType[P]>
        }
      >
    >


  export type PImageAlbumRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    albumValue?: boolean
    imageId?: boolean
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageAlbumRelation"]>

  export type PImageAlbumRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    albumValue?: boolean
    imageId?: boolean
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageAlbumRelation"]>

  export type PImageAlbumRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    albumValue?: boolean
    imageId?: boolean
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageAlbumRelation"]>

  export type PImageAlbumRelationSelectScalar = {
    albumValue?: boolean
    imageId?: boolean
  }

  export type PImageAlbumRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"albumValue" | "imageId", ExtArgs["result"]["pImageAlbumRelation"]>
  export type PImageAlbumRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }
  export type PImageAlbumRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }
  export type PImageAlbumRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | PAlbumDefaultArgs<ExtArgs>
    image?: boolean | PImageDefaultArgs<ExtArgs>
  }

  export type $PImageAlbumRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PImageAlbumRelation"
    objects: {
      album: Prisma.$PAlbumPayload<ExtArgs>
      image: Prisma.$PImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      albumValue: string
      imageId: string
    }, ExtArgs["result"]["pImageAlbumRelation"]>
    composites: {}
  }

  type PImageAlbumRelationGetPayload<S extends boolean | null | undefined | PImageAlbumRelationDefaultArgs> = $Result.GetResult<Prisma.$PImageAlbumRelationPayload, S>

  type PImageAlbumRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PImageAlbumRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PImageAlbumRelationCountAggregateInputType | true
    }

  export interface PImageAlbumRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PImageAlbumRelation'], meta: { name: 'PImageAlbumRelation' } }
    /**
     * Find zero or one PImageAlbumRelation that matches the filter.
     * @param {PImageAlbumRelationFindUniqueArgs} args - Arguments to find a PImageAlbumRelation
     * @example
     * // Get one PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PImageAlbumRelationFindUniqueArgs>(args: SelectSubset<T, PImageAlbumRelationFindUniqueArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PImageAlbumRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PImageAlbumRelationFindUniqueOrThrowArgs} args - Arguments to find a PImageAlbumRelation
     * @example
     * // Get one PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PImageAlbumRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, PImageAlbumRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImageAlbumRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationFindFirstArgs} args - Arguments to find a PImageAlbumRelation
     * @example
     * // Get one PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PImageAlbumRelationFindFirstArgs>(args?: SelectSubset<T, PImageAlbumRelationFindFirstArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImageAlbumRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationFindFirstOrThrowArgs} args - Arguments to find a PImageAlbumRelation
     * @example
     * // Get one PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PImageAlbumRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, PImageAlbumRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PImageAlbumRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PImageAlbumRelations
     * const pImageAlbumRelations = await prisma.pImageAlbumRelation.findMany()
     * 
     * // Get first 10 PImageAlbumRelations
     * const pImageAlbumRelations = await prisma.pImageAlbumRelation.findMany({ take: 10 })
     * 
     * // Only select the `albumValue`
     * const pImageAlbumRelationWithAlbumValueOnly = await prisma.pImageAlbumRelation.findMany({ select: { albumValue: true } })
     * 
     */
    findMany<T extends PImageAlbumRelationFindManyArgs>(args?: SelectSubset<T, PImageAlbumRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PImageAlbumRelation.
     * @param {PImageAlbumRelationCreateArgs} args - Arguments to create a PImageAlbumRelation.
     * @example
     * // Create one PImageAlbumRelation
     * const PImageAlbumRelation = await prisma.pImageAlbumRelation.create({
     *   data: {
     *     // ... data to create a PImageAlbumRelation
     *   }
     * })
     * 
     */
    create<T extends PImageAlbumRelationCreateArgs>(args: SelectSubset<T, PImageAlbumRelationCreateArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PImageAlbumRelations.
     * @param {PImageAlbumRelationCreateManyArgs} args - Arguments to create many PImageAlbumRelations.
     * @example
     * // Create many PImageAlbumRelations
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PImageAlbumRelationCreateManyArgs>(args?: SelectSubset<T, PImageAlbumRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PImageAlbumRelations and returns the data saved in the database.
     * @param {PImageAlbumRelationCreateManyAndReturnArgs} args - Arguments to create many PImageAlbumRelations.
     * @example
     * // Create many PImageAlbumRelations
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PImageAlbumRelations and only return the `albumValue`
     * const pImageAlbumRelationWithAlbumValueOnly = await prisma.pImageAlbumRelation.createManyAndReturn({
     *   select: { albumValue: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PImageAlbumRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, PImageAlbumRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PImageAlbumRelation.
     * @param {PImageAlbumRelationDeleteArgs} args - Arguments to delete one PImageAlbumRelation.
     * @example
     * // Delete one PImageAlbumRelation
     * const PImageAlbumRelation = await prisma.pImageAlbumRelation.delete({
     *   where: {
     *     // ... filter to delete one PImageAlbumRelation
     *   }
     * })
     * 
     */
    delete<T extends PImageAlbumRelationDeleteArgs>(args: SelectSubset<T, PImageAlbumRelationDeleteArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PImageAlbumRelation.
     * @param {PImageAlbumRelationUpdateArgs} args - Arguments to update one PImageAlbumRelation.
     * @example
     * // Update one PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PImageAlbumRelationUpdateArgs>(args: SelectSubset<T, PImageAlbumRelationUpdateArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PImageAlbumRelations.
     * @param {PImageAlbumRelationDeleteManyArgs} args - Arguments to filter PImageAlbumRelations to delete.
     * @example
     * // Delete a few PImageAlbumRelations
     * const { count } = await prisma.pImageAlbumRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PImageAlbumRelationDeleteManyArgs>(args?: SelectSubset<T, PImageAlbumRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImageAlbumRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PImageAlbumRelations
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PImageAlbumRelationUpdateManyArgs>(args: SelectSubset<T, PImageAlbumRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImageAlbumRelations and returns the data updated in the database.
     * @param {PImageAlbumRelationUpdateManyAndReturnArgs} args - Arguments to update many PImageAlbumRelations.
     * @example
     * // Update many PImageAlbumRelations
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PImageAlbumRelations and only return the `albumValue`
     * const pImageAlbumRelationWithAlbumValueOnly = await prisma.pImageAlbumRelation.updateManyAndReturn({
     *   select: { albumValue: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PImageAlbumRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, PImageAlbumRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PImageAlbumRelation.
     * @param {PImageAlbumRelationUpsertArgs} args - Arguments to update or create a PImageAlbumRelation.
     * @example
     * // Update or create a PImageAlbumRelation
     * const pImageAlbumRelation = await prisma.pImageAlbumRelation.upsert({
     *   create: {
     *     // ... data to create a PImageAlbumRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PImageAlbumRelation we want to update
     *   }
     * })
     */
    upsert<T extends PImageAlbumRelationUpsertArgs>(args: SelectSubset<T, PImageAlbumRelationUpsertArgs<ExtArgs>>): Prisma__PImageAlbumRelationClient<$Result.GetResult<Prisma.$PImageAlbumRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PImageAlbumRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationCountArgs} args - Arguments to filter PImageAlbumRelations to count.
     * @example
     * // Count the number of PImageAlbumRelations
     * const count = await prisma.pImageAlbumRelation.count({
     *   where: {
     *     // ... the filter for the PImageAlbumRelations we want to count
     *   }
     * })
    **/
    count<T extends PImageAlbumRelationCountArgs>(
      args?: Subset<T, PImageAlbumRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PImageAlbumRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PImageAlbumRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PImageAlbumRelationAggregateArgs>(args: Subset<T, PImageAlbumRelationAggregateArgs>): Prisma.PrismaPromise<GetPImageAlbumRelationAggregateType<T>>

    /**
     * Group by PImageAlbumRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageAlbumRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PImageAlbumRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PImageAlbumRelationGroupByArgs['orderBy'] }
        : { orderBy?: PImageAlbumRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PImageAlbumRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPImageAlbumRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PImageAlbumRelation model
   */
  readonly fields: PImageAlbumRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PImageAlbumRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PImageAlbumRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    album<T extends PAlbumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAlbumDefaultArgs<ExtArgs>>): Prisma__PAlbumClient<$Result.GetResult<Prisma.$PAlbumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends PImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PImageDefaultArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PImageAlbumRelation model
   */
  interface PImageAlbumRelationFieldRefs {
    readonly albumValue: FieldRef<"PImageAlbumRelation", 'String'>
    readonly imageId: FieldRef<"PImageAlbumRelation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PImageAlbumRelation findUnique
   */
  export type PImageAlbumRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageAlbumRelation to fetch.
     */
    where: PImageAlbumRelationWhereUniqueInput
  }

  /**
   * PImageAlbumRelation findUniqueOrThrow
   */
  export type PImageAlbumRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageAlbumRelation to fetch.
     */
    where: PImageAlbumRelationWhereUniqueInput
  }

  /**
   * PImageAlbumRelation findFirst
   */
  export type PImageAlbumRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageAlbumRelation to fetch.
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageAlbumRelations to fetch.
     */
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImageAlbumRelations.
     */
    cursor?: PImageAlbumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageAlbumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageAlbumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImageAlbumRelations.
     */
    distinct?: PImageAlbumRelationScalarFieldEnum | PImageAlbumRelationScalarFieldEnum[]
  }

  /**
   * PImageAlbumRelation findFirstOrThrow
   */
  export type PImageAlbumRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageAlbumRelation to fetch.
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageAlbumRelations to fetch.
     */
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImageAlbumRelations.
     */
    cursor?: PImageAlbumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageAlbumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageAlbumRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImageAlbumRelations.
     */
    distinct?: PImageAlbumRelationScalarFieldEnum | PImageAlbumRelationScalarFieldEnum[]
  }

  /**
   * PImageAlbumRelation findMany
   */
  export type PImageAlbumRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageAlbumRelations to fetch.
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageAlbumRelations to fetch.
     */
    orderBy?: PImageAlbumRelationOrderByWithRelationInput | PImageAlbumRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PImageAlbumRelations.
     */
    cursor?: PImageAlbumRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageAlbumRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageAlbumRelations.
     */
    skip?: number
    distinct?: PImageAlbumRelationScalarFieldEnum | PImageAlbumRelationScalarFieldEnum[]
  }

  /**
   * PImageAlbumRelation create
   */
  export type PImageAlbumRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a PImageAlbumRelation.
     */
    data: XOR<PImageAlbumRelationCreateInput, PImageAlbumRelationUncheckedCreateInput>
  }

  /**
   * PImageAlbumRelation createMany
   */
  export type PImageAlbumRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PImageAlbumRelations.
     */
    data: PImageAlbumRelationCreateManyInput | PImageAlbumRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PImageAlbumRelation createManyAndReturn
   */
  export type PImageAlbumRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * The data used to create many PImageAlbumRelations.
     */
    data: PImageAlbumRelationCreateManyInput | PImageAlbumRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PImageAlbumRelation update
   */
  export type PImageAlbumRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a PImageAlbumRelation.
     */
    data: XOR<PImageAlbumRelationUpdateInput, PImageAlbumRelationUncheckedUpdateInput>
    /**
     * Choose, which PImageAlbumRelation to update.
     */
    where: PImageAlbumRelationWhereUniqueInput
  }

  /**
   * PImageAlbumRelation updateMany
   */
  export type PImageAlbumRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PImageAlbumRelations.
     */
    data: XOR<PImageAlbumRelationUpdateManyMutationInput, PImageAlbumRelationUncheckedUpdateManyInput>
    /**
     * Filter which PImageAlbumRelations to update
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * Limit how many PImageAlbumRelations to update.
     */
    limit?: number
  }

  /**
   * PImageAlbumRelation updateManyAndReturn
   */
  export type PImageAlbumRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * The data used to update PImageAlbumRelations.
     */
    data: XOR<PImageAlbumRelationUpdateManyMutationInput, PImageAlbumRelationUncheckedUpdateManyInput>
    /**
     * Filter which PImageAlbumRelations to update
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * Limit how many PImageAlbumRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PImageAlbumRelation upsert
   */
  export type PImageAlbumRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the PImageAlbumRelation to update in case it exists.
     */
    where: PImageAlbumRelationWhereUniqueInput
    /**
     * In case the PImageAlbumRelation found by the `where` argument doesn't exist, create a new PImageAlbumRelation with this data.
     */
    create: XOR<PImageAlbumRelationCreateInput, PImageAlbumRelationUncheckedCreateInput>
    /**
     * In case the PImageAlbumRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PImageAlbumRelationUpdateInput, PImageAlbumRelationUncheckedUpdateInput>
  }

  /**
   * PImageAlbumRelation delete
   */
  export type PImageAlbumRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
    /**
     * Filter which PImageAlbumRelation to delete.
     */
    where: PImageAlbumRelationWhereUniqueInput
  }

  /**
   * PImageAlbumRelation deleteMany
   */
  export type PImageAlbumRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImageAlbumRelations to delete
     */
    where?: PImageAlbumRelationWhereInput
    /**
     * Limit how many PImageAlbumRelations to delete.
     */
    limit?: number
  }

  /**
   * PImageAlbumRelation without action
   */
  export type PImageAlbumRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageAlbumRelation
     */
    select?: PImageAlbumRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageAlbumRelation
     */
    omit?: PImageAlbumRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageAlbumRelationInclude<ExtArgs> | null
  }


  /**
   * Model PTag
   */

  export type AggregatePTag = {
    _count: PTagCountAggregateOutputType | null
    _min: PTagMinAggregateOutputType | null
    _max: PTagMaxAggregateOutputType | null
  }

  export type PTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    parentId: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    parentId: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PTagCountAggregateOutputType = {
    id: number
    name: number
    category: number
    parentId: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PTagMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    parentId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PTagMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    parentId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PTagCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    parentId?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PTag to aggregate.
     */
    where?: PTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PTags to fetch.
     */
    orderBy?: PTagOrderByWithRelationInput | PTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PTags
    **/
    _count?: true | PTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PTagMaxAggregateInputType
  }

  export type GetPTagAggregateType<T extends PTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePTag[P]>
      : GetScalarType<T[P], AggregatePTag[P]>
  }




  export type PTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PTagWhereInput
    orderBy?: PTagOrderByWithAggregationInput | PTagOrderByWithAggregationInput[]
    by: PTagScalarFieldEnum[] | PTagScalarFieldEnum
    having?: PTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PTagCountAggregateInputType | true
    _min?: PTagMinAggregateInputType
    _max?: PTagMaxAggregateInputType
  }

  export type PTagGroupByOutputType = {
    id: string
    name: string
    category: string | null
    parentId: string | null
    detail: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: PTagCountAggregateOutputType | null
    _min: PTagMinAggregateOutputType | null
    _max: PTagMaxAggregateOutputType | null
  }

  type GetPTagGroupByPayload<T extends PTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PTagGroupByOutputType[P]>
            : GetScalarType<T[P], PTagGroupByOutputType[P]>
        }
      >
    >


  export type PTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    parentId?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | PTag$parentArgs<ExtArgs>
    children?: boolean | PTag$childrenArgs<ExtArgs>
    images?: boolean | PTag$imagesArgs<ExtArgs>
    _count?: boolean | PTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pTag"]>

  export type PTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    parentId?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | PTag$parentArgs<ExtArgs>
  }, ExtArgs["result"]["pTag"]>

  export type PTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    parentId?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | PTag$parentArgs<ExtArgs>
  }, ExtArgs["result"]["pTag"]>

  export type PTagSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    parentId?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "parentId" | "detail" | "createdAt" | "updatedAt", ExtArgs["result"]["pTag"]>
  export type PTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PTag$parentArgs<ExtArgs>
    children?: boolean | PTag$childrenArgs<ExtArgs>
    images?: boolean | PTag$imagesArgs<ExtArgs>
    _count?: boolean | PTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PTag$parentArgs<ExtArgs>
  }
  export type PTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | PTag$parentArgs<ExtArgs>
  }

  export type $PTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PTag"
    objects: {
      parent: Prisma.$PTagPayload<ExtArgs> | null
      children: Prisma.$PTagPayload<ExtArgs>[]
      images: Prisma.$PImageTagRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string | null
      parentId: string | null
      detail: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["pTag"]>
    composites: {}
  }

  type PTagGetPayload<S extends boolean | null | undefined | PTagDefaultArgs> = $Result.GetResult<Prisma.$PTagPayload, S>

  type PTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PTagCountAggregateInputType | true
    }

  export interface PTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PTag'], meta: { name: 'PTag' } }
    /**
     * Find zero or one PTag that matches the filter.
     * @param {PTagFindUniqueArgs} args - Arguments to find a PTag
     * @example
     * // Get one PTag
     * const pTag = await prisma.pTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PTagFindUniqueArgs>(args: SelectSubset<T, PTagFindUniqueArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PTagFindUniqueOrThrowArgs} args - Arguments to find a PTag
     * @example
     * // Get one PTag
     * const pTag = await prisma.pTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagFindFirstArgs} args - Arguments to find a PTag
     * @example
     * // Get one PTag
     * const pTag = await prisma.pTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PTagFindFirstArgs>(args?: SelectSubset<T, PTagFindFirstArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagFindFirstOrThrowArgs} args - Arguments to find a PTag
     * @example
     * // Get one PTag
     * const pTag = await prisma.pTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PTags
     * const pTags = await prisma.pTag.findMany()
     * 
     * // Get first 10 PTags
     * const pTags = await prisma.pTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pTagWithIdOnly = await prisma.pTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PTagFindManyArgs>(args?: SelectSubset<T, PTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PTag.
     * @param {PTagCreateArgs} args - Arguments to create a PTag.
     * @example
     * // Create one PTag
     * const PTag = await prisma.pTag.create({
     *   data: {
     *     // ... data to create a PTag
     *   }
     * })
     * 
     */
    create<T extends PTagCreateArgs>(args: SelectSubset<T, PTagCreateArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PTags.
     * @param {PTagCreateManyArgs} args - Arguments to create many PTags.
     * @example
     * // Create many PTags
     * const pTag = await prisma.pTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PTagCreateManyArgs>(args?: SelectSubset<T, PTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PTags and returns the data saved in the database.
     * @param {PTagCreateManyAndReturnArgs} args - Arguments to create many PTags.
     * @example
     * // Create many PTags
     * const pTag = await prisma.pTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PTags and only return the `id`
     * const pTagWithIdOnly = await prisma.pTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PTag.
     * @param {PTagDeleteArgs} args - Arguments to delete one PTag.
     * @example
     * // Delete one PTag
     * const PTag = await prisma.pTag.delete({
     *   where: {
     *     // ... filter to delete one PTag
     *   }
     * })
     * 
     */
    delete<T extends PTagDeleteArgs>(args: SelectSubset<T, PTagDeleteArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PTag.
     * @param {PTagUpdateArgs} args - Arguments to update one PTag.
     * @example
     * // Update one PTag
     * const pTag = await prisma.pTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PTagUpdateArgs>(args: SelectSubset<T, PTagUpdateArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PTags.
     * @param {PTagDeleteManyArgs} args - Arguments to filter PTags to delete.
     * @example
     * // Delete a few PTags
     * const { count } = await prisma.pTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PTagDeleteManyArgs>(args?: SelectSubset<T, PTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PTags
     * const pTag = await prisma.pTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PTagUpdateManyArgs>(args: SelectSubset<T, PTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PTags and returns the data updated in the database.
     * @param {PTagUpdateManyAndReturnArgs} args - Arguments to update many PTags.
     * @example
     * // Update many PTags
     * const pTag = await prisma.pTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PTags and only return the `id`
     * const pTagWithIdOnly = await prisma.pTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PTag.
     * @param {PTagUpsertArgs} args - Arguments to update or create a PTag.
     * @example
     * // Update or create a PTag
     * const pTag = await prisma.pTag.upsert({
     *   create: {
     *     // ... data to create a PTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PTag we want to update
     *   }
     * })
     */
    upsert<T extends PTagUpsertArgs>(args: SelectSubset<T, PTagUpsertArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagCountArgs} args - Arguments to filter PTags to count.
     * @example
     * // Count the number of PTags
     * const count = await prisma.pTag.count({
     *   where: {
     *     // ... the filter for the PTags we want to count
     *   }
     * })
    **/
    count<T extends PTagCountArgs>(
      args?: Subset<T, PTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PTagAggregateArgs>(args: Subset<T, PTagAggregateArgs>): Prisma.PrismaPromise<GetPTagAggregateType<T>>

    /**
     * Group by PTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PTagGroupByArgs['orderBy'] }
        : { orderBy?: PTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PTag model
   */
  readonly fields: PTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends PTag$parentArgs<ExtArgs> = {}>(args?: Subset<T, PTag$parentArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends PTag$childrenArgs<ExtArgs> = {}>(args?: Subset<T, PTag$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends PTag$imagesArgs<ExtArgs> = {}>(args?: Subset<T, PTag$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PTag model
   */
  interface PTagFieldRefs {
    readonly id: FieldRef<"PTag", 'String'>
    readonly name: FieldRef<"PTag", 'String'>
    readonly category: FieldRef<"PTag", 'String'>
    readonly parentId: FieldRef<"PTag", 'String'>
    readonly detail: FieldRef<"PTag", 'String'>
    readonly createdAt: FieldRef<"PTag", 'DateTime'>
    readonly updatedAt: FieldRef<"PTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PTag findUnique
   */
  export type PTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter, which PTag to fetch.
     */
    where: PTagWhereUniqueInput
  }

  /**
   * PTag findUniqueOrThrow
   */
  export type PTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter, which PTag to fetch.
     */
    where: PTagWhereUniqueInput
  }

  /**
   * PTag findFirst
   */
  export type PTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter, which PTag to fetch.
     */
    where?: PTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PTags to fetch.
     */
    orderBy?: PTagOrderByWithRelationInput | PTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PTags.
     */
    cursor?: PTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PTags.
     */
    distinct?: PTagScalarFieldEnum | PTagScalarFieldEnum[]
  }

  /**
   * PTag findFirstOrThrow
   */
  export type PTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter, which PTag to fetch.
     */
    where?: PTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PTags to fetch.
     */
    orderBy?: PTagOrderByWithRelationInput | PTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PTags.
     */
    cursor?: PTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PTags.
     */
    distinct?: PTagScalarFieldEnum | PTagScalarFieldEnum[]
  }

  /**
   * PTag findMany
   */
  export type PTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter, which PTags to fetch.
     */
    where?: PTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PTags to fetch.
     */
    orderBy?: PTagOrderByWithRelationInput | PTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PTags.
     */
    cursor?: PTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PTags.
     */
    skip?: number
    distinct?: PTagScalarFieldEnum | PTagScalarFieldEnum[]
  }

  /**
   * PTag create
   */
  export type PTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PTag.
     */
    data: XOR<PTagCreateInput, PTagUncheckedCreateInput>
  }

  /**
   * PTag createMany
   */
  export type PTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PTags.
     */
    data: PTagCreateManyInput | PTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PTag createManyAndReturn
   */
  export type PTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * The data used to create many PTags.
     */
    data: PTagCreateManyInput | PTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PTag update
   */
  export type PTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PTag.
     */
    data: XOR<PTagUpdateInput, PTagUncheckedUpdateInput>
    /**
     * Choose, which PTag to update.
     */
    where: PTagWhereUniqueInput
  }

  /**
   * PTag updateMany
   */
  export type PTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PTags.
     */
    data: XOR<PTagUpdateManyMutationInput, PTagUncheckedUpdateManyInput>
    /**
     * Filter which PTags to update
     */
    where?: PTagWhereInput
    /**
     * Limit how many PTags to update.
     */
    limit?: number
  }

  /**
   * PTag updateManyAndReturn
   */
  export type PTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * The data used to update PTags.
     */
    data: XOR<PTagUpdateManyMutationInput, PTagUncheckedUpdateManyInput>
    /**
     * Filter which PTags to update
     */
    where?: PTagWhereInput
    /**
     * Limit how many PTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PTag upsert
   */
  export type PTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PTag to update in case it exists.
     */
    where: PTagWhereUniqueInput
    /**
     * In case the PTag found by the `where` argument doesn't exist, create a new PTag with this data.
     */
    create: XOR<PTagCreateInput, PTagUncheckedCreateInput>
    /**
     * In case the PTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PTagUpdateInput, PTagUncheckedUpdateInput>
  }

  /**
   * PTag delete
   */
  export type PTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    /**
     * Filter which PTag to delete.
     */
    where: PTagWhereUniqueInput
  }

  /**
   * PTag deleteMany
   */
  export type PTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PTags to delete
     */
    where?: PTagWhereInput
    /**
     * Limit how many PTags to delete.
     */
    limit?: number
  }

  /**
   * PTag.parent
   */
  export type PTag$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    where?: PTagWhereInput
  }

  /**
   * PTag.children
   */
  export type PTag$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
    where?: PTagWhereInput
    orderBy?: PTagOrderByWithRelationInput | PTagOrderByWithRelationInput[]
    cursor?: PTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PTagScalarFieldEnum | PTagScalarFieldEnum[]
  }

  /**
   * PTag.images
   */
  export type PTag$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    where?: PImageTagRelationWhereInput
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    cursor?: PImageTagRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PImageTagRelationScalarFieldEnum | PImageTagRelationScalarFieldEnum[]
  }

  /**
   * PTag without action
   */
  export type PTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PTag
     */
    select?: PTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PTag
     */
    omit?: PTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PTagInclude<ExtArgs> | null
  }


  /**
   * Model PImageTagRelation
   */

  export type AggregatePImageTagRelation = {
    _count: PImageTagRelationCountAggregateOutputType | null
    _min: PImageTagRelationMinAggregateOutputType | null
    _max: PImageTagRelationMaxAggregateOutputType | null
  }

  export type PImageTagRelationMinAggregateOutputType = {
    id: string | null
    imageId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type PImageTagRelationMaxAggregateOutputType = {
    id: string | null
    imageId: string | null
    tagId: string | null
    createdAt: Date | null
  }

  export type PImageTagRelationCountAggregateOutputType = {
    id: number
    imageId: number
    tagId: number
    createdAt: number
    _all: number
  }


  export type PImageTagRelationMinAggregateInputType = {
    id?: true
    imageId?: true
    tagId?: true
    createdAt?: true
  }

  export type PImageTagRelationMaxAggregateInputType = {
    id?: true
    imageId?: true
    tagId?: true
    createdAt?: true
  }

  export type PImageTagRelationCountAggregateInputType = {
    id?: true
    imageId?: true
    tagId?: true
    createdAt?: true
    _all?: true
  }

  export type PImageTagRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImageTagRelation to aggregate.
     */
    where?: PImageTagRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageTagRelations to fetch.
     */
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PImageTagRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageTagRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageTagRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PImageTagRelations
    **/
    _count?: true | PImageTagRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PImageTagRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PImageTagRelationMaxAggregateInputType
  }

  export type GetPImageTagRelationAggregateType<T extends PImageTagRelationAggregateArgs> = {
        [P in keyof T & keyof AggregatePImageTagRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePImageTagRelation[P]>
      : GetScalarType<T[P], AggregatePImageTagRelation[P]>
  }




  export type PImageTagRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PImageTagRelationWhereInput
    orderBy?: PImageTagRelationOrderByWithAggregationInput | PImageTagRelationOrderByWithAggregationInput[]
    by: PImageTagRelationScalarFieldEnum[] | PImageTagRelationScalarFieldEnum
    having?: PImageTagRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PImageTagRelationCountAggregateInputType | true
    _min?: PImageTagRelationMinAggregateInputType
    _max?: PImageTagRelationMaxAggregateInputType
  }

  export type PImageTagRelationGroupByOutputType = {
    id: string
    imageId: string
    tagId: string
    createdAt: Date
    _count: PImageTagRelationCountAggregateOutputType | null
    _min: PImageTagRelationMinAggregateOutputType | null
    _max: PImageTagRelationMaxAggregateOutputType | null
  }

  type GetPImageTagRelationGroupByPayload<T extends PImageTagRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PImageTagRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PImageTagRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PImageTagRelationGroupByOutputType[P]>
            : GetScalarType<T[P], PImageTagRelationGroupByOutputType[P]>
        }
      >
    >


  export type PImageTagRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageTagRelation"]>

  export type PImageTagRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageTagRelation"]>

  export type PImageTagRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageId?: boolean
    tagId?: boolean
    createdAt?: boolean
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pImageTagRelation"]>

  export type PImageTagRelationSelectScalar = {
    id?: boolean
    imageId?: boolean
    tagId?: boolean
    createdAt?: boolean
  }

  export type PImageTagRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageId" | "tagId" | "createdAt", ExtArgs["result"]["pImageTagRelation"]>
  export type PImageTagRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }
  export type PImageTagRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }
  export type PImageTagRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | PImageDefaultArgs<ExtArgs>
    tag?: boolean | PTagDefaultArgs<ExtArgs>
  }

  export type $PImageTagRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PImageTagRelation"
    objects: {
      image: Prisma.$PImagePayload<ExtArgs>
      tag: Prisma.$PTagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageId: string
      tagId: string
      createdAt: Date
    }, ExtArgs["result"]["pImageTagRelation"]>
    composites: {}
  }

  type PImageTagRelationGetPayload<S extends boolean | null | undefined | PImageTagRelationDefaultArgs> = $Result.GetResult<Prisma.$PImageTagRelationPayload, S>

  type PImageTagRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PImageTagRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PImageTagRelationCountAggregateInputType | true
    }

  export interface PImageTagRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PImageTagRelation'], meta: { name: 'PImageTagRelation' } }
    /**
     * Find zero or one PImageTagRelation that matches the filter.
     * @param {PImageTagRelationFindUniqueArgs} args - Arguments to find a PImageTagRelation
     * @example
     * // Get one PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PImageTagRelationFindUniqueArgs>(args: SelectSubset<T, PImageTagRelationFindUniqueArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PImageTagRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PImageTagRelationFindUniqueOrThrowArgs} args - Arguments to find a PImageTagRelation
     * @example
     * // Get one PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PImageTagRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, PImageTagRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImageTagRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationFindFirstArgs} args - Arguments to find a PImageTagRelation
     * @example
     * // Get one PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PImageTagRelationFindFirstArgs>(args?: SelectSubset<T, PImageTagRelationFindFirstArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PImageTagRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationFindFirstOrThrowArgs} args - Arguments to find a PImageTagRelation
     * @example
     * // Get one PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PImageTagRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, PImageTagRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PImageTagRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PImageTagRelations
     * const pImageTagRelations = await prisma.pImageTagRelation.findMany()
     * 
     * // Get first 10 PImageTagRelations
     * const pImageTagRelations = await prisma.pImageTagRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pImageTagRelationWithIdOnly = await prisma.pImageTagRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PImageTagRelationFindManyArgs>(args?: SelectSubset<T, PImageTagRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PImageTagRelation.
     * @param {PImageTagRelationCreateArgs} args - Arguments to create a PImageTagRelation.
     * @example
     * // Create one PImageTagRelation
     * const PImageTagRelation = await prisma.pImageTagRelation.create({
     *   data: {
     *     // ... data to create a PImageTagRelation
     *   }
     * })
     * 
     */
    create<T extends PImageTagRelationCreateArgs>(args: SelectSubset<T, PImageTagRelationCreateArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PImageTagRelations.
     * @param {PImageTagRelationCreateManyArgs} args - Arguments to create many PImageTagRelations.
     * @example
     * // Create many PImageTagRelations
     * const pImageTagRelation = await prisma.pImageTagRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PImageTagRelationCreateManyArgs>(args?: SelectSubset<T, PImageTagRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PImageTagRelations and returns the data saved in the database.
     * @param {PImageTagRelationCreateManyAndReturnArgs} args - Arguments to create many PImageTagRelations.
     * @example
     * // Create many PImageTagRelations
     * const pImageTagRelation = await prisma.pImageTagRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PImageTagRelations and only return the `id`
     * const pImageTagRelationWithIdOnly = await prisma.pImageTagRelation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PImageTagRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, PImageTagRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PImageTagRelation.
     * @param {PImageTagRelationDeleteArgs} args - Arguments to delete one PImageTagRelation.
     * @example
     * // Delete one PImageTagRelation
     * const PImageTagRelation = await prisma.pImageTagRelation.delete({
     *   where: {
     *     // ... filter to delete one PImageTagRelation
     *   }
     * })
     * 
     */
    delete<T extends PImageTagRelationDeleteArgs>(args: SelectSubset<T, PImageTagRelationDeleteArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PImageTagRelation.
     * @param {PImageTagRelationUpdateArgs} args - Arguments to update one PImageTagRelation.
     * @example
     * // Update one PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PImageTagRelationUpdateArgs>(args: SelectSubset<T, PImageTagRelationUpdateArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PImageTagRelations.
     * @param {PImageTagRelationDeleteManyArgs} args - Arguments to filter PImageTagRelations to delete.
     * @example
     * // Delete a few PImageTagRelations
     * const { count } = await prisma.pImageTagRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PImageTagRelationDeleteManyArgs>(args?: SelectSubset<T, PImageTagRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImageTagRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PImageTagRelations
     * const pImageTagRelation = await prisma.pImageTagRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PImageTagRelationUpdateManyArgs>(args: SelectSubset<T, PImageTagRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PImageTagRelations and returns the data updated in the database.
     * @param {PImageTagRelationUpdateManyAndReturnArgs} args - Arguments to update many PImageTagRelations.
     * @example
     * // Update many PImageTagRelations
     * const pImageTagRelation = await prisma.pImageTagRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PImageTagRelations and only return the `id`
     * const pImageTagRelationWithIdOnly = await prisma.pImageTagRelation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PImageTagRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, PImageTagRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PImageTagRelation.
     * @param {PImageTagRelationUpsertArgs} args - Arguments to update or create a PImageTagRelation.
     * @example
     * // Update or create a PImageTagRelation
     * const pImageTagRelation = await prisma.pImageTagRelation.upsert({
     *   create: {
     *     // ... data to create a PImageTagRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PImageTagRelation we want to update
     *   }
     * })
     */
    upsert<T extends PImageTagRelationUpsertArgs>(args: SelectSubset<T, PImageTagRelationUpsertArgs<ExtArgs>>): Prisma__PImageTagRelationClient<$Result.GetResult<Prisma.$PImageTagRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PImageTagRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationCountArgs} args - Arguments to filter PImageTagRelations to count.
     * @example
     * // Count the number of PImageTagRelations
     * const count = await prisma.pImageTagRelation.count({
     *   where: {
     *     // ... the filter for the PImageTagRelations we want to count
     *   }
     * })
    **/
    count<T extends PImageTagRelationCountArgs>(
      args?: Subset<T, PImageTagRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PImageTagRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PImageTagRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PImageTagRelationAggregateArgs>(args: Subset<T, PImageTagRelationAggregateArgs>): Prisma.PrismaPromise<GetPImageTagRelationAggregateType<T>>

    /**
     * Group by PImageTagRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PImageTagRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PImageTagRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PImageTagRelationGroupByArgs['orderBy'] }
        : { orderBy?: PImageTagRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PImageTagRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPImageTagRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PImageTagRelation model
   */
  readonly fields: PImageTagRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PImageTagRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PImageTagRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends PImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PImageDefaultArgs<ExtArgs>>): Prisma__PImageClient<$Result.GetResult<Prisma.$PImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends PTagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PTagDefaultArgs<ExtArgs>>): Prisma__PTagClient<$Result.GetResult<Prisma.$PTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PImageTagRelation model
   */
  interface PImageTagRelationFieldRefs {
    readonly id: FieldRef<"PImageTagRelation", 'String'>
    readonly imageId: FieldRef<"PImageTagRelation", 'String'>
    readonly tagId: FieldRef<"PImageTagRelation", 'String'>
    readonly createdAt: FieldRef<"PImageTagRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PImageTagRelation findUnique
   */
  export type PImageTagRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageTagRelation to fetch.
     */
    where: PImageTagRelationWhereUniqueInput
  }

  /**
   * PImageTagRelation findUniqueOrThrow
   */
  export type PImageTagRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageTagRelation to fetch.
     */
    where: PImageTagRelationWhereUniqueInput
  }

  /**
   * PImageTagRelation findFirst
   */
  export type PImageTagRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageTagRelation to fetch.
     */
    where?: PImageTagRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageTagRelations to fetch.
     */
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImageTagRelations.
     */
    cursor?: PImageTagRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageTagRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageTagRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImageTagRelations.
     */
    distinct?: PImageTagRelationScalarFieldEnum | PImageTagRelationScalarFieldEnum[]
  }

  /**
   * PImageTagRelation findFirstOrThrow
   */
  export type PImageTagRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageTagRelation to fetch.
     */
    where?: PImageTagRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageTagRelations to fetch.
     */
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PImageTagRelations.
     */
    cursor?: PImageTagRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageTagRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageTagRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PImageTagRelations.
     */
    distinct?: PImageTagRelationScalarFieldEnum | PImageTagRelationScalarFieldEnum[]
  }

  /**
   * PImageTagRelation findMany
   */
  export type PImageTagRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter, which PImageTagRelations to fetch.
     */
    where?: PImageTagRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PImageTagRelations to fetch.
     */
    orderBy?: PImageTagRelationOrderByWithRelationInput | PImageTagRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PImageTagRelations.
     */
    cursor?: PImageTagRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PImageTagRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PImageTagRelations.
     */
    skip?: number
    distinct?: PImageTagRelationScalarFieldEnum | PImageTagRelationScalarFieldEnum[]
  }

  /**
   * PImageTagRelation create
   */
  export type PImageTagRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a PImageTagRelation.
     */
    data: XOR<PImageTagRelationCreateInput, PImageTagRelationUncheckedCreateInput>
  }

  /**
   * PImageTagRelation createMany
   */
  export type PImageTagRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PImageTagRelations.
     */
    data: PImageTagRelationCreateManyInput | PImageTagRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PImageTagRelation createManyAndReturn
   */
  export type PImageTagRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * The data used to create many PImageTagRelations.
     */
    data: PImageTagRelationCreateManyInput | PImageTagRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PImageTagRelation update
   */
  export type PImageTagRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a PImageTagRelation.
     */
    data: XOR<PImageTagRelationUpdateInput, PImageTagRelationUncheckedUpdateInput>
    /**
     * Choose, which PImageTagRelation to update.
     */
    where: PImageTagRelationWhereUniqueInput
  }

  /**
   * PImageTagRelation updateMany
   */
  export type PImageTagRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PImageTagRelations.
     */
    data: XOR<PImageTagRelationUpdateManyMutationInput, PImageTagRelationUncheckedUpdateManyInput>
    /**
     * Filter which PImageTagRelations to update
     */
    where?: PImageTagRelationWhereInput
    /**
     * Limit how many PImageTagRelations to update.
     */
    limit?: number
  }

  /**
   * PImageTagRelation updateManyAndReturn
   */
  export type PImageTagRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * The data used to update PImageTagRelations.
     */
    data: XOR<PImageTagRelationUpdateManyMutationInput, PImageTagRelationUncheckedUpdateManyInput>
    /**
     * Filter which PImageTagRelations to update
     */
    where?: PImageTagRelationWhereInput
    /**
     * Limit how many PImageTagRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PImageTagRelation upsert
   */
  export type PImageTagRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the PImageTagRelation to update in case it exists.
     */
    where: PImageTagRelationWhereUniqueInput
    /**
     * In case the PImageTagRelation found by the `where` argument doesn't exist, create a new PImageTagRelation with this data.
     */
    create: XOR<PImageTagRelationCreateInput, PImageTagRelationUncheckedCreateInput>
    /**
     * In case the PImageTagRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PImageTagRelationUpdateInput, PImageTagRelationUncheckedUpdateInput>
  }

  /**
   * PImageTagRelation delete
   */
  export type PImageTagRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
    /**
     * Filter which PImageTagRelation to delete.
     */
    where: PImageTagRelationWhereUniqueInput
  }

  /**
   * PImageTagRelation deleteMany
   */
  export type PImageTagRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PImageTagRelations to delete
     */
    where?: PImageTagRelationWhereInput
    /**
     * Limit how many PImageTagRelations to delete.
     */
    limit?: number
  }

  /**
   * PImageTagRelation without action
   */
  export type PImageTagRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PImageTagRelation
     */
    select?: PImageTagRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PImageTagRelation
     */
    omit?: PImageTagRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PImageTagRelationInclude<ExtArgs> | null
  }


  /**
   * Model PConfig
   */

  export type AggregatePConfig = {
    _count: PConfigCountAggregateOutputType | null
    _min: PConfigMinAggregateOutputType | null
    _max: PConfigMaxAggregateOutputType | null
  }

  export type PConfigMinAggregateOutputType = {
    id: string | null
    configKey: string | null
    configValue: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PConfigMaxAggregateOutputType = {
    id: string | null
    configKey: string | null
    configValue: string | null
    detail: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PConfigCountAggregateOutputType = {
    id: number
    configKey: number
    configValue: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PConfigMinAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PConfigMaxAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PConfigCountAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PConfig to aggregate.
     */
    where?: PConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PConfigs to fetch.
     */
    orderBy?: PConfigOrderByWithRelationInput | PConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PConfigs
    **/
    _count?: true | PConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PConfigMaxAggregateInputType
  }

  export type GetPConfigAggregateType<T extends PConfigAggregateArgs> = {
        [P in keyof T & keyof AggregatePConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePConfig[P]>
      : GetScalarType<T[P], AggregatePConfig[P]>
  }




  export type PConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PConfigWhereInput
    orderBy?: PConfigOrderByWithAggregationInput | PConfigOrderByWithAggregationInput[]
    by: PConfigScalarFieldEnum[] | PConfigScalarFieldEnum
    having?: PConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PConfigCountAggregateInputType | true
    _min?: PConfigMinAggregateInputType
    _max?: PConfigMaxAggregateInputType
  }

  export type PConfigGroupByOutputType = {
    id: string
    configKey: string
    configValue: string | null
    detail: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: PConfigCountAggregateOutputType | null
    _min: PConfigMinAggregateOutputType | null
    _max: PConfigMaxAggregateOutputType | null
  }

  type GetPConfigGroupByPayload<T extends PConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PConfigGroupByOutputType[P]>
            : GetScalarType<T[P], PConfigGroupByOutputType[P]>
        }
      >
    >


  export type PConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pConfig"]>

  export type PConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pConfig"]>

  export type PConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pConfig"]>

  export type PConfigSelectScalar = {
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configKey" | "configValue" | "detail" | "createdAt" | "updatedAt", ExtArgs["result"]["pConfig"]>

  export type $PConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configKey: string
      configValue: string | null
      detail: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["pConfig"]>
    composites: {}
  }

  type PConfigGetPayload<S extends boolean | null | undefined | PConfigDefaultArgs> = $Result.GetResult<Prisma.$PConfigPayload, S>

  type PConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PConfigCountAggregateInputType | true
    }

  export interface PConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PConfig'], meta: { name: 'PConfig' } }
    /**
     * Find zero or one PConfig that matches the filter.
     * @param {PConfigFindUniqueArgs} args - Arguments to find a PConfig
     * @example
     * // Get one PConfig
     * const pConfig = await prisma.pConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PConfigFindUniqueArgs>(args: SelectSubset<T, PConfigFindUniqueArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PConfigFindUniqueOrThrowArgs} args - Arguments to find a PConfig
     * @example
     * // Get one PConfig
     * const pConfig = await prisma.pConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, PConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigFindFirstArgs} args - Arguments to find a PConfig
     * @example
     * // Get one PConfig
     * const pConfig = await prisma.pConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PConfigFindFirstArgs>(args?: SelectSubset<T, PConfigFindFirstArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigFindFirstOrThrowArgs} args - Arguments to find a PConfig
     * @example
     * // Get one PConfig
     * const pConfig = await prisma.pConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, PConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PConfigs
     * const pConfigs = await prisma.pConfig.findMany()
     * 
     * // Get first 10 PConfigs
     * const pConfigs = await prisma.pConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pConfigWithIdOnly = await prisma.pConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PConfigFindManyArgs>(args?: SelectSubset<T, PConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PConfig.
     * @param {PConfigCreateArgs} args - Arguments to create a PConfig.
     * @example
     * // Create one PConfig
     * const PConfig = await prisma.pConfig.create({
     *   data: {
     *     // ... data to create a PConfig
     *   }
     * })
     * 
     */
    create<T extends PConfigCreateArgs>(args: SelectSubset<T, PConfigCreateArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PConfigs.
     * @param {PConfigCreateManyArgs} args - Arguments to create many PConfigs.
     * @example
     * // Create many PConfigs
     * const pConfig = await prisma.pConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PConfigCreateManyArgs>(args?: SelectSubset<T, PConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PConfigs and returns the data saved in the database.
     * @param {PConfigCreateManyAndReturnArgs} args - Arguments to create many PConfigs.
     * @example
     * // Create many PConfigs
     * const pConfig = await prisma.pConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PConfigs and only return the `id`
     * const pConfigWithIdOnly = await prisma.pConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, PConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PConfig.
     * @param {PConfigDeleteArgs} args - Arguments to delete one PConfig.
     * @example
     * // Delete one PConfig
     * const PConfig = await prisma.pConfig.delete({
     *   where: {
     *     // ... filter to delete one PConfig
     *   }
     * })
     * 
     */
    delete<T extends PConfigDeleteArgs>(args: SelectSubset<T, PConfigDeleteArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PConfig.
     * @param {PConfigUpdateArgs} args - Arguments to update one PConfig.
     * @example
     * // Update one PConfig
     * const pConfig = await prisma.pConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PConfigUpdateArgs>(args: SelectSubset<T, PConfigUpdateArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PConfigs.
     * @param {PConfigDeleteManyArgs} args - Arguments to filter PConfigs to delete.
     * @example
     * // Delete a few PConfigs
     * const { count } = await prisma.pConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PConfigDeleteManyArgs>(args?: SelectSubset<T, PConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PConfigs
     * const pConfig = await prisma.pConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PConfigUpdateManyArgs>(args: SelectSubset<T, PConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PConfigs and returns the data updated in the database.
     * @param {PConfigUpdateManyAndReturnArgs} args - Arguments to update many PConfigs.
     * @example
     * // Update many PConfigs
     * const pConfig = await prisma.pConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PConfigs and only return the `id`
     * const pConfigWithIdOnly = await prisma.pConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, PConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PConfig.
     * @param {PConfigUpsertArgs} args - Arguments to update or create a PConfig.
     * @example
     * // Update or create a PConfig
     * const pConfig = await prisma.pConfig.upsert({
     *   create: {
     *     // ... data to create a PConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PConfig we want to update
     *   }
     * })
     */
    upsert<T extends PConfigUpsertArgs>(args: SelectSubset<T, PConfigUpsertArgs<ExtArgs>>): Prisma__PConfigClient<$Result.GetResult<Prisma.$PConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigCountArgs} args - Arguments to filter PConfigs to count.
     * @example
     * // Count the number of PConfigs
     * const count = await prisma.pConfig.count({
     *   where: {
     *     // ... the filter for the PConfigs we want to count
     *   }
     * })
    **/
    count<T extends PConfigCountArgs>(
      args?: Subset<T, PConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PConfigAggregateArgs>(args: Subset<T, PConfigAggregateArgs>): Prisma.PrismaPromise<GetPConfigAggregateType<T>>

    /**
     * Group by PConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PConfigGroupByArgs['orderBy'] }
        : { orderBy?: PConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PConfig model
   */
  readonly fields: PConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PConfig model
   */
  interface PConfigFieldRefs {
    readonly id: FieldRef<"PConfig", 'String'>
    readonly configKey: FieldRef<"PConfig", 'String'>
    readonly configValue: FieldRef<"PConfig", 'String'>
    readonly detail: FieldRef<"PConfig", 'String'>
    readonly createdAt: FieldRef<"PConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"PConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PConfig findUnique
   */
  export type PConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter, which PConfig to fetch.
     */
    where: PConfigWhereUniqueInput
  }

  /**
   * PConfig findUniqueOrThrow
   */
  export type PConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter, which PConfig to fetch.
     */
    where: PConfigWhereUniqueInput
  }

  /**
   * PConfig findFirst
   */
  export type PConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter, which PConfig to fetch.
     */
    where?: PConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PConfigs to fetch.
     */
    orderBy?: PConfigOrderByWithRelationInput | PConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PConfigs.
     */
    cursor?: PConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PConfigs.
     */
    distinct?: PConfigScalarFieldEnum | PConfigScalarFieldEnum[]
  }

  /**
   * PConfig findFirstOrThrow
   */
  export type PConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter, which PConfig to fetch.
     */
    where?: PConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PConfigs to fetch.
     */
    orderBy?: PConfigOrderByWithRelationInput | PConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PConfigs.
     */
    cursor?: PConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PConfigs.
     */
    distinct?: PConfigScalarFieldEnum | PConfigScalarFieldEnum[]
  }

  /**
   * PConfig findMany
   */
  export type PConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter, which PConfigs to fetch.
     */
    where?: PConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PConfigs to fetch.
     */
    orderBy?: PConfigOrderByWithRelationInput | PConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PConfigs.
     */
    cursor?: PConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PConfigs.
     */
    skip?: number
    distinct?: PConfigScalarFieldEnum | PConfigScalarFieldEnum[]
  }

  /**
   * PConfig create
   */
  export type PConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a PConfig.
     */
    data: XOR<PConfigCreateInput, PConfigUncheckedCreateInput>
  }

  /**
   * PConfig createMany
   */
  export type PConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PConfigs.
     */
    data: PConfigCreateManyInput | PConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PConfig createManyAndReturn
   */
  export type PConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * The data used to create many PConfigs.
     */
    data: PConfigCreateManyInput | PConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PConfig update
   */
  export type PConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a PConfig.
     */
    data: XOR<PConfigUpdateInput, PConfigUncheckedUpdateInput>
    /**
     * Choose, which PConfig to update.
     */
    where: PConfigWhereUniqueInput
  }

  /**
   * PConfig updateMany
   */
  export type PConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PConfigs.
     */
    data: XOR<PConfigUpdateManyMutationInput, PConfigUncheckedUpdateManyInput>
    /**
     * Filter which PConfigs to update
     */
    where?: PConfigWhereInput
    /**
     * Limit how many PConfigs to update.
     */
    limit?: number
  }

  /**
   * PConfig updateManyAndReturn
   */
  export type PConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * The data used to update PConfigs.
     */
    data: XOR<PConfigUpdateManyMutationInput, PConfigUncheckedUpdateManyInput>
    /**
     * Filter which PConfigs to update
     */
    where?: PConfigWhereInput
    /**
     * Limit how many PConfigs to update.
     */
    limit?: number
  }

  /**
   * PConfig upsert
   */
  export type PConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the PConfig to update in case it exists.
     */
    where: PConfigWhereUniqueInput
    /**
     * In case the PConfig found by the `where` argument doesn't exist, create a new PConfig with this data.
     */
    create: XOR<PConfigCreateInput, PConfigUncheckedCreateInput>
    /**
     * In case the PConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PConfigUpdateInput, PConfigUncheckedUpdateInput>
  }

  /**
   * PConfig delete
   */
  export type PConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
    /**
     * Filter which PConfig to delete.
     */
    where: PConfigWhereUniqueInput
  }

  /**
   * PConfig deleteMany
   */
  export type PConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PConfigs to delete
     */
    where?: PConfigWhereInput
    /**
     * Limit how many PConfigs to delete.
     */
    limit?: number
  }

  /**
   * PConfig without action
   */
  export type PConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PConfig
     */
    select?: PConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PConfig
     */
    omit?: PConfigOmit<ExtArgs> | null
  }


  /**
   * Model PVisitLog
   */

  export type AggregatePVisitLog = {
    _count: PVisitLogCountAggregateOutputType | null
    _min: PVisitLogMinAggregateOutputType | null
    _max: PVisitLogMaxAggregateOutputType | null
  }

  export type PVisitLogMinAggregateOutputType = {
    id: string | null
    path: string | null
    pageType: string | null
    ip: string | null
    userAgent: string | null
    referrer: string | null
    source: string | null
    createdAt: Date | null
  }

  export type PVisitLogMaxAggregateOutputType = {
    id: string | null
    path: string | null
    pageType: string | null
    ip: string | null
    userAgent: string | null
    referrer: string | null
    source: string | null
    createdAt: Date | null
  }

  export type PVisitLogCountAggregateOutputType = {
    id: number
    path: number
    pageType: number
    ip: number
    userAgent: number
    referrer: number
    source: number
    createdAt: number
    _all: number
  }


  export type PVisitLogMinAggregateInputType = {
    id?: true
    path?: true
    pageType?: true
    ip?: true
    userAgent?: true
    referrer?: true
    source?: true
    createdAt?: true
  }

  export type PVisitLogMaxAggregateInputType = {
    id?: true
    path?: true
    pageType?: true
    ip?: true
    userAgent?: true
    referrer?: true
    source?: true
    createdAt?: true
  }

  export type PVisitLogCountAggregateInputType = {
    id?: true
    path?: true
    pageType?: true
    ip?: true
    userAgent?: true
    referrer?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type PVisitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PVisitLog to aggregate.
     */
    where?: PVisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PVisitLogs to fetch.
     */
    orderBy?: PVisitLogOrderByWithRelationInput | PVisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PVisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PVisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PVisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PVisitLogs
    **/
    _count?: true | PVisitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PVisitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PVisitLogMaxAggregateInputType
  }

  export type GetPVisitLogAggregateType<T extends PVisitLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePVisitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePVisitLog[P]>
      : GetScalarType<T[P], AggregatePVisitLog[P]>
  }




  export type PVisitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PVisitLogWhereInput
    orderBy?: PVisitLogOrderByWithAggregationInput | PVisitLogOrderByWithAggregationInput[]
    by: PVisitLogScalarFieldEnum[] | PVisitLogScalarFieldEnum
    having?: PVisitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PVisitLogCountAggregateInputType | true
    _min?: PVisitLogMinAggregateInputType
    _max?: PVisitLogMaxAggregateInputType
  }

  export type PVisitLogGroupByOutputType = {
    id: string
    path: string
    pageType: string
    ip: string | null
    userAgent: string | null
    referrer: string | null
    source: string | null
    createdAt: Date
    _count: PVisitLogCountAggregateOutputType | null
    _min: PVisitLogMinAggregateOutputType | null
    _max: PVisitLogMaxAggregateOutputType | null
  }

  type GetPVisitLogGroupByPayload<T extends PVisitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PVisitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PVisitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PVisitLogGroupByOutputType[P]>
            : GetScalarType<T[P], PVisitLogGroupByOutputType[P]>
        }
      >
    >


  export type PVisitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    pageType?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pVisitLog"]>

  export type PVisitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    pageType?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pVisitLog"]>

  export type PVisitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    pageType?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["pVisitLog"]>

  export type PVisitLogSelectScalar = {
    id?: boolean
    path?: boolean
    pageType?: boolean
    ip?: boolean
    userAgent?: boolean
    referrer?: boolean
    source?: boolean
    createdAt?: boolean
  }

  export type PVisitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "pageType" | "ip" | "userAgent" | "referrer" | "source" | "createdAt", ExtArgs["result"]["pVisitLog"]>

  export type $PVisitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PVisitLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      pageType: string
      ip: string | null
      userAgent: string | null
      referrer: string | null
      source: string | null
      createdAt: Date
    }, ExtArgs["result"]["pVisitLog"]>
    composites: {}
  }

  type PVisitLogGetPayload<S extends boolean | null | undefined | PVisitLogDefaultArgs> = $Result.GetResult<Prisma.$PVisitLogPayload, S>

  type PVisitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PVisitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PVisitLogCountAggregateInputType | true
    }

  export interface PVisitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PVisitLog'], meta: { name: 'PVisitLog' } }
    /**
     * Find zero or one PVisitLog that matches the filter.
     * @param {PVisitLogFindUniqueArgs} args - Arguments to find a PVisitLog
     * @example
     * // Get one PVisitLog
     * const pVisitLog = await prisma.pVisitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PVisitLogFindUniqueArgs>(args: SelectSubset<T, PVisitLogFindUniqueArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PVisitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PVisitLogFindUniqueOrThrowArgs} args - Arguments to find a PVisitLog
     * @example
     * // Get one PVisitLog
     * const pVisitLog = await prisma.pVisitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PVisitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PVisitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PVisitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogFindFirstArgs} args - Arguments to find a PVisitLog
     * @example
     * // Get one PVisitLog
     * const pVisitLog = await prisma.pVisitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PVisitLogFindFirstArgs>(args?: SelectSubset<T, PVisitLogFindFirstArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PVisitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogFindFirstOrThrowArgs} args - Arguments to find a PVisitLog
     * @example
     * // Get one PVisitLog
     * const pVisitLog = await prisma.pVisitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PVisitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PVisitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PVisitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PVisitLogs
     * const pVisitLogs = await prisma.pVisitLog.findMany()
     * 
     * // Get first 10 PVisitLogs
     * const pVisitLogs = await prisma.pVisitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pVisitLogWithIdOnly = await prisma.pVisitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PVisitLogFindManyArgs>(args?: SelectSubset<T, PVisitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PVisitLog.
     * @param {PVisitLogCreateArgs} args - Arguments to create a PVisitLog.
     * @example
     * // Create one PVisitLog
     * const PVisitLog = await prisma.pVisitLog.create({
     *   data: {
     *     // ... data to create a PVisitLog
     *   }
     * })
     * 
     */
    create<T extends PVisitLogCreateArgs>(args: SelectSubset<T, PVisitLogCreateArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PVisitLogs.
     * @param {PVisitLogCreateManyArgs} args - Arguments to create many PVisitLogs.
     * @example
     * // Create many PVisitLogs
     * const pVisitLog = await prisma.pVisitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PVisitLogCreateManyArgs>(args?: SelectSubset<T, PVisitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PVisitLogs and returns the data saved in the database.
     * @param {PVisitLogCreateManyAndReturnArgs} args - Arguments to create many PVisitLogs.
     * @example
     * // Create many PVisitLogs
     * const pVisitLog = await prisma.pVisitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PVisitLogs and only return the `id`
     * const pVisitLogWithIdOnly = await prisma.pVisitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PVisitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PVisitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PVisitLog.
     * @param {PVisitLogDeleteArgs} args - Arguments to delete one PVisitLog.
     * @example
     * // Delete one PVisitLog
     * const PVisitLog = await prisma.pVisitLog.delete({
     *   where: {
     *     // ... filter to delete one PVisitLog
     *   }
     * })
     * 
     */
    delete<T extends PVisitLogDeleteArgs>(args: SelectSubset<T, PVisitLogDeleteArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PVisitLog.
     * @param {PVisitLogUpdateArgs} args - Arguments to update one PVisitLog.
     * @example
     * // Update one PVisitLog
     * const pVisitLog = await prisma.pVisitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PVisitLogUpdateArgs>(args: SelectSubset<T, PVisitLogUpdateArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PVisitLogs.
     * @param {PVisitLogDeleteManyArgs} args - Arguments to filter PVisitLogs to delete.
     * @example
     * // Delete a few PVisitLogs
     * const { count } = await prisma.pVisitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PVisitLogDeleteManyArgs>(args?: SelectSubset<T, PVisitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PVisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PVisitLogs
     * const pVisitLog = await prisma.pVisitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PVisitLogUpdateManyArgs>(args: SelectSubset<T, PVisitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PVisitLogs and returns the data updated in the database.
     * @param {PVisitLogUpdateManyAndReturnArgs} args - Arguments to update many PVisitLogs.
     * @example
     * // Update many PVisitLogs
     * const pVisitLog = await prisma.pVisitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PVisitLogs and only return the `id`
     * const pVisitLogWithIdOnly = await prisma.pVisitLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PVisitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PVisitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PVisitLog.
     * @param {PVisitLogUpsertArgs} args - Arguments to update or create a PVisitLog.
     * @example
     * // Update or create a PVisitLog
     * const pVisitLog = await prisma.pVisitLog.upsert({
     *   create: {
     *     // ... data to create a PVisitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PVisitLog we want to update
     *   }
     * })
     */
    upsert<T extends PVisitLogUpsertArgs>(args: SelectSubset<T, PVisitLogUpsertArgs<ExtArgs>>): Prisma__PVisitLogClient<$Result.GetResult<Prisma.$PVisitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PVisitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogCountArgs} args - Arguments to filter PVisitLogs to count.
     * @example
     * // Count the number of PVisitLogs
     * const count = await prisma.pVisitLog.count({
     *   where: {
     *     // ... the filter for the PVisitLogs we want to count
     *   }
     * })
    **/
    count<T extends PVisitLogCountArgs>(
      args?: Subset<T, PVisitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PVisitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PVisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PVisitLogAggregateArgs>(args: Subset<T, PVisitLogAggregateArgs>): Prisma.PrismaPromise<GetPVisitLogAggregateType<T>>

    /**
     * Group by PVisitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PVisitLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PVisitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PVisitLogGroupByArgs['orderBy'] }
        : { orderBy?: PVisitLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PVisitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPVisitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PVisitLog model
   */
  readonly fields: PVisitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PVisitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PVisitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PVisitLog model
   */
  interface PVisitLogFieldRefs {
    readonly id: FieldRef<"PVisitLog", 'String'>
    readonly path: FieldRef<"PVisitLog", 'String'>
    readonly pageType: FieldRef<"PVisitLog", 'String'>
    readonly ip: FieldRef<"PVisitLog", 'String'>
    readonly userAgent: FieldRef<"PVisitLog", 'String'>
    readonly referrer: FieldRef<"PVisitLog", 'String'>
    readonly source: FieldRef<"PVisitLog", 'String'>
    readonly createdAt: FieldRef<"PVisitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PVisitLog findUnique
   */
  export type PVisitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter, which PVisitLog to fetch.
     */
    where: PVisitLogWhereUniqueInput
  }

  /**
   * PVisitLog findUniqueOrThrow
   */
  export type PVisitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter, which PVisitLog to fetch.
     */
    where: PVisitLogWhereUniqueInput
  }

  /**
   * PVisitLog findFirst
   */
  export type PVisitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter, which PVisitLog to fetch.
     */
    where?: PVisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PVisitLogs to fetch.
     */
    orderBy?: PVisitLogOrderByWithRelationInput | PVisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PVisitLogs.
     */
    cursor?: PVisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PVisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PVisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PVisitLogs.
     */
    distinct?: PVisitLogScalarFieldEnum | PVisitLogScalarFieldEnum[]
  }

  /**
   * PVisitLog findFirstOrThrow
   */
  export type PVisitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter, which PVisitLog to fetch.
     */
    where?: PVisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PVisitLogs to fetch.
     */
    orderBy?: PVisitLogOrderByWithRelationInput | PVisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PVisitLogs.
     */
    cursor?: PVisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PVisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PVisitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PVisitLogs.
     */
    distinct?: PVisitLogScalarFieldEnum | PVisitLogScalarFieldEnum[]
  }

  /**
   * PVisitLog findMany
   */
  export type PVisitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter, which PVisitLogs to fetch.
     */
    where?: PVisitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PVisitLogs to fetch.
     */
    orderBy?: PVisitLogOrderByWithRelationInput | PVisitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PVisitLogs.
     */
    cursor?: PVisitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PVisitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PVisitLogs.
     */
    skip?: number
    distinct?: PVisitLogScalarFieldEnum | PVisitLogScalarFieldEnum[]
  }

  /**
   * PVisitLog create
   */
  export type PVisitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * The data needed to create a PVisitLog.
     */
    data: XOR<PVisitLogCreateInput, PVisitLogUncheckedCreateInput>
  }

  /**
   * PVisitLog createMany
   */
  export type PVisitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PVisitLogs.
     */
    data: PVisitLogCreateManyInput | PVisitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PVisitLog createManyAndReturn
   */
  export type PVisitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * The data used to create many PVisitLogs.
     */
    data: PVisitLogCreateManyInput | PVisitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PVisitLog update
   */
  export type PVisitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * The data needed to update a PVisitLog.
     */
    data: XOR<PVisitLogUpdateInput, PVisitLogUncheckedUpdateInput>
    /**
     * Choose, which PVisitLog to update.
     */
    where: PVisitLogWhereUniqueInput
  }

  /**
   * PVisitLog updateMany
   */
  export type PVisitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PVisitLogs.
     */
    data: XOR<PVisitLogUpdateManyMutationInput, PVisitLogUncheckedUpdateManyInput>
    /**
     * Filter which PVisitLogs to update
     */
    where?: PVisitLogWhereInput
    /**
     * Limit how many PVisitLogs to update.
     */
    limit?: number
  }

  /**
   * PVisitLog updateManyAndReturn
   */
  export type PVisitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * The data used to update PVisitLogs.
     */
    data: XOR<PVisitLogUpdateManyMutationInput, PVisitLogUncheckedUpdateManyInput>
    /**
     * Filter which PVisitLogs to update
     */
    where?: PVisitLogWhereInput
    /**
     * Limit how many PVisitLogs to update.
     */
    limit?: number
  }

  /**
   * PVisitLog upsert
   */
  export type PVisitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * The filter to search for the PVisitLog to update in case it exists.
     */
    where: PVisitLogWhereUniqueInput
    /**
     * In case the PVisitLog found by the `where` argument doesn't exist, create a new PVisitLog with this data.
     */
    create: XOR<PVisitLogCreateInput, PVisitLogUncheckedCreateInput>
    /**
     * In case the PVisitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PVisitLogUpdateInput, PVisitLogUncheckedUpdateInput>
  }

  /**
   * PVisitLog delete
   */
  export type PVisitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
    /**
     * Filter which PVisitLog to delete.
     */
    where: PVisitLogWhereUniqueInput
  }

  /**
   * PVisitLog deleteMany
   */
  export type PVisitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PVisitLogs to delete
     */
    where?: PVisitLogWhereInput
    /**
     * Limit how many PVisitLogs to delete.
     */
    limit?: number
  }

  /**
   * PVisitLog without action
   */
  export type PVisitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PVisitLog
     */
    select?: PVisitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PVisitLog
     */
    omit?: PVisitLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PImageScalarFieldEnum: {
    id: 'id',
    imageName: 'imageName',
    url: 'url',
    previewUrl: 'previewUrl',
    videoUrl: 'videoUrl',
    originalKey: 'originalKey',
    previewKey: 'previewKey',
    videoKey: 'videoKey',
    blurhash: 'blurhash',
    exif: 'exif',
    labels: 'labels',
    width: 'width',
    height: 'height',
    lon: 'lon',
    lat: 'lat',
    title: 'title',
    detail: 'detail',
    type: 'type',
    show: 'show',
    showOnMainpage: 'showOnMainpage',
    featured: 'featured',
    sort: 'sort',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    del: 'del'
  };

  export type PImageScalarFieldEnum = (typeof PImageScalarFieldEnum)[keyof typeof PImageScalarFieldEnum]


  export const PAlbumScalarFieldEnum: {
    id: 'id',
    name: 'name',
    albumValue: 'albumValue',
    detail: 'detail',
    theme: 'theme',
    show: 'show',
    sort: 'sort',
    randomShow: 'randomShow',
    license: 'license',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    del: 'del',
    imageSorting: 'imageSorting',
    cover: 'cover'
  };

  export type PAlbumScalarFieldEnum = (typeof PAlbumScalarFieldEnum)[keyof typeof PAlbumScalarFieldEnum]


  export const PImageAlbumRelationScalarFieldEnum: {
    albumValue: 'albumValue',
    imageId: 'imageId'
  };

  export type PImageAlbumRelationScalarFieldEnum = (typeof PImageAlbumRelationScalarFieldEnum)[keyof typeof PImageAlbumRelationScalarFieldEnum]


  export const PTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    parentId: 'parentId',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PTagScalarFieldEnum = (typeof PTagScalarFieldEnum)[keyof typeof PTagScalarFieldEnum]


  export const PImageTagRelationScalarFieldEnum: {
    id: 'id',
    imageId: 'imageId',
    tagId: 'tagId',
    createdAt: 'createdAt'
  };

  export type PImageTagRelationScalarFieldEnum = (typeof PImageTagRelationScalarFieldEnum)[keyof typeof PImageTagRelationScalarFieldEnum]


  export const PConfigScalarFieldEnum: {
    id: 'id',
    configKey: 'configKey',
    configValue: 'configValue',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PConfigScalarFieldEnum = (typeof PConfigScalarFieldEnum)[keyof typeof PConfigScalarFieldEnum]


  export const PVisitLogScalarFieldEnum: {
    id: 'id',
    path: 'path',
    pageType: 'pageType',
    ip: 'ip',
    userAgent: 'userAgent',
    referrer: 'referrer',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type PVisitLogScalarFieldEnum = (typeof PVisitLogScalarFieldEnum)[keyof typeof PVisitLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PImageWhereInput = {
    AND?: PImageWhereInput | PImageWhereInput[]
    OR?: PImageWhereInput[]
    NOT?: PImageWhereInput | PImageWhereInput[]
    id?: StringFilter<"PImage"> | string
    imageName?: StringNullableFilter<"PImage"> | string | null
    url?: StringNullableFilter<"PImage"> | string | null
    previewUrl?: StringNullableFilter<"PImage"> | string | null
    videoUrl?: StringNullableFilter<"PImage"> | string | null
    originalKey?: StringNullableFilter<"PImage"> | string | null
    previewKey?: StringNullableFilter<"PImage"> | string | null
    videoKey?: StringNullableFilter<"PImage"> | string | null
    blurhash?: StringNullableFilter<"PImage"> | string | null
    exif?: JsonNullableFilter<"PImage">
    labels?: JsonNullableFilter<"PImage">
    width?: IntFilter<"PImage"> | number
    height?: IntFilter<"PImage"> | number
    lon?: StringNullableFilter<"PImage"> | string | null
    lat?: StringNullableFilter<"PImage"> | string | null
    title?: StringNullableFilter<"PImage"> | string | null
    detail?: StringNullableFilter<"PImage"> | string | null
    type?: IntFilter<"PImage"> | number
    show?: IntFilter<"PImage"> | number
    showOnMainpage?: IntFilter<"PImage"> | number
    featured?: IntFilter<"PImage"> | number
    sort?: IntFilter<"PImage"> | number
    createdAt?: DateTimeFilter<"PImage"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PImage"> | Date | string | null
    del?: IntFilter<"PImage"> | number
    albumRelations?: PImageAlbumRelationListRelationFilter
    tagRelations?: PImageTagRelationListRelationFilter
  }

  export type PImageOrderByWithRelationInput = {
    id?: SortOrder
    imageName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    previewUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    originalKey?: SortOrderInput | SortOrder
    previewKey?: SortOrderInput | SortOrder
    videoKey?: SortOrderInput | SortOrder
    blurhash?: SortOrderInput | SortOrder
    exif?: SortOrderInput | SortOrder
    labels?: SortOrderInput | SortOrder
    width?: SortOrder
    height?: SortOrder
    lon?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    del?: SortOrder
    albumRelations?: PImageAlbumRelationOrderByRelationAggregateInput
    tagRelations?: PImageTagRelationOrderByRelationAggregateInput
  }

  export type PImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PImageWhereInput | PImageWhereInput[]
    OR?: PImageWhereInput[]
    NOT?: PImageWhereInput | PImageWhereInput[]
    imageName?: StringNullableFilter<"PImage"> | string | null
    url?: StringNullableFilter<"PImage"> | string | null
    previewUrl?: StringNullableFilter<"PImage"> | string | null
    videoUrl?: StringNullableFilter<"PImage"> | string | null
    originalKey?: StringNullableFilter<"PImage"> | string | null
    previewKey?: StringNullableFilter<"PImage"> | string | null
    videoKey?: StringNullableFilter<"PImage"> | string | null
    blurhash?: StringNullableFilter<"PImage"> | string | null
    exif?: JsonNullableFilter<"PImage">
    labels?: JsonNullableFilter<"PImage">
    width?: IntFilter<"PImage"> | number
    height?: IntFilter<"PImage"> | number
    lon?: StringNullableFilter<"PImage"> | string | null
    lat?: StringNullableFilter<"PImage"> | string | null
    title?: StringNullableFilter<"PImage"> | string | null
    detail?: StringNullableFilter<"PImage"> | string | null
    type?: IntFilter<"PImage"> | number
    show?: IntFilter<"PImage"> | number
    showOnMainpage?: IntFilter<"PImage"> | number
    featured?: IntFilter<"PImage"> | number
    sort?: IntFilter<"PImage"> | number
    createdAt?: DateTimeFilter<"PImage"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PImage"> | Date | string | null
    del?: IntFilter<"PImage"> | number
    albumRelations?: PImageAlbumRelationListRelationFilter
    tagRelations?: PImageTagRelationListRelationFilter
  }, "id">

  export type PImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageName?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    previewUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    originalKey?: SortOrderInput | SortOrder
    previewKey?: SortOrderInput | SortOrder
    videoKey?: SortOrderInput | SortOrder
    blurhash?: SortOrderInput | SortOrder
    exif?: SortOrderInput | SortOrder
    labels?: SortOrderInput | SortOrder
    width?: SortOrder
    height?: SortOrder
    lon?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    del?: SortOrder
    _count?: PImageCountOrderByAggregateInput
    _avg?: PImageAvgOrderByAggregateInput
    _max?: PImageMaxOrderByAggregateInput
    _min?: PImageMinOrderByAggregateInput
    _sum?: PImageSumOrderByAggregateInput
  }

  export type PImageScalarWhereWithAggregatesInput = {
    AND?: PImageScalarWhereWithAggregatesInput | PImageScalarWhereWithAggregatesInput[]
    OR?: PImageScalarWhereWithAggregatesInput[]
    NOT?: PImageScalarWhereWithAggregatesInput | PImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PImage"> | string
    imageName?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    url?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    previewUrl?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    originalKey?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    previewKey?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    videoKey?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    blurhash?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    exif?: JsonNullableWithAggregatesFilter<"PImage">
    labels?: JsonNullableWithAggregatesFilter<"PImage">
    width?: IntWithAggregatesFilter<"PImage"> | number
    height?: IntWithAggregatesFilter<"PImage"> | number
    lon?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    lat?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    title?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    detail?: StringNullableWithAggregatesFilter<"PImage"> | string | null
    type?: IntWithAggregatesFilter<"PImage"> | number
    show?: IntWithAggregatesFilter<"PImage"> | number
    showOnMainpage?: IntWithAggregatesFilter<"PImage"> | number
    featured?: IntWithAggregatesFilter<"PImage"> | number
    sort?: IntWithAggregatesFilter<"PImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PImage"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PImage"> | Date | string | null
    del?: IntWithAggregatesFilter<"PImage"> | number
  }

  export type PAlbumWhereInput = {
    AND?: PAlbumWhereInput | PAlbumWhereInput[]
    OR?: PAlbumWhereInput[]
    NOT?: PAlbumWhereInput | PAlbumWhereInput[]
    id?: StringFilter<"PAlbum"> | string
    name?: StringFilter<"PAlbum"> | string
    albumValue?: StringFilter<"PAlbum"> | string
    detail?: StringNullableFilter<"PAlbum"> | string | null
    theme?: StringFilter<"PAlbum"> | string
    show?: IntFilter<"PAlbum"> | number
    sort?: IntFilter<"PAlbum"> | number
    randomShow?: IntFilter<"PAlbum"> | number
    license?: StringNullableFilter<"PAlbum"> | string | null
    createdAt?: DateTimeFilter<"PAlbum"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PAlbum"> | Date | string | null
    del?: IntFilter<"PAlbum"> | number
    imageSorting?: IntFilter<"PAlbum"> | number
    cover?: StringNullableFilter<"PAlbum"> | string | null
    imageRelations?: PImageAlbumRelationListRelationFilter
  }

  export type PAlbumOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    albumValue?: SortOrder
    detail?: SortOrderInput | SortOrder
    theme?: SortOrder
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    license?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
    cover?: SortOrderInput | SortOrder
    imageRelations?: PImageAlbumRelationOrderByRelationAggregateInput
  }

  export type PAlbumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    albumValue?: string
    AND?: PAlbumWhereInput | PAlbumWhereInput[]
    OR?: PAlbumWhereInput[]
    NOT?: PAlbumWhereInput | PAlbumWhereInput[]
    name?: StringFilter<"PAlbum"> | string
    detail?: StringNullableFilter<"PAlbum"> | string | null
    theme?: StringFilter<"PAlbum"> | string
    show?: IntFilter<"PAlbum"> | number
    sort?: IntFilter<"PAlbum"> | number
    randomShow?: IntFilter<"PAlbum"> | number
    license?: StringNullableFilter<"PAlbum"> | string | null
    createdAt?: DateTimeFilter<"PAlbum"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PAlbum"> | Date | string | null
    del?: IntFilter<"PAlbum"> | number
    imageSorting?: IntFilter<"PAlbum"> | number
    cover?: StringNullableFilter<"PAlbum"> | string | null
    imageRelations?: PImageAlbumRelationListRelationFilter
  }, "id" | "albumValue">

  export type PAlbumOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    albumValue?: SortOrder
    detail?: SortOrderInput | SortOrder
    theme?: SortOrder
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    license?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
    cover?: SortOrderInput | SortOrder
    _count?: PAlbumCountOrderByAggregateInput
    _avg?: PAlbumAvgOrderByAggregateInput
    _max?: PAlbumMaxOrderByAggregateInput
    _min?: PAlbumMinOrderByAggregateInput
    _sum?: PAlbumSumOrderByAggregateInput
  }

  export type PAlbumScalarWhereWithAggregatesInput = {
    AND?: PAlbumScalarWhereWithAggregatesInput | PAlbumScalarWhereWithAggregatesInput[]
    OR?: PAlbumScalarWhereWithAggregatesInput[]
    NOT?: PAlbumScalarWhereWithAggregatesInput | PAlbumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PAlbum"> | string
    name?: StringWithAggregatesFilter<"PAlbum"> | string
    albumValue?: StringWithAggregatesFilter<"PAlbum"> | string
    detail?: StringNullableWithAggregatesFilter<"PAlbum"> | string | null
    theme?: StringWithAggregatesFilter<"PAlbum"> | string
    show?: IntWithAggregatesFilter<"PAlbum"> | number
    sort?: IntWithAggregatesFilter<"PAlbum"> | number
    randomShow?: IntWithAggregatesFilter<"PAlbum"> | number
    license?: StringNullableWithAggregatesFilter<"PAlbum"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PAlbum"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PAlbum"> | Date | string | null
    del?: IntWithAggregatesFilter<"PAlbum"> | number
    imageSorting?: IntWithAggregatesFilter<"PAlbum"> | number
    cover?: StringNullableWithAggregatesFilter<"PAlbum"> | string | null
  }

  export type PImageAlbumRelationWhereInput = {
    AND?: PImageAlbumRelationWhereInput | PImageAlbumRelationWhereInput[]
    OR?: PImageAlbumRelationWhereInput[]
    NOT?: PImageAlbumRelationWhereInput | PImageAlbumRelationWhereInput[]
    albumValue?: StringFilter<"PImageAlbumRelation"> | string
    imageId?: StringFilter<"PImageAlbumRelation"> | string
    album?: XOR<PAlbumScalarRelationFilter, PAlbumWhereInput>
    image?: XOR<PImageScalarRelationFilter, PImageWhereInput>
  }

  export type PImageAlbumRelationOrderByWithRelationInput = {
    albumValue?: SortOrder
    imageId?: SortOrder
    album?: PAlbumOrderByWithRelationInput
    image?: PImageOrderByWithRelationInput
  }

  export type PImageAlbumRelationWhereUniqueInput = Prisma.AtLeast<{
    imageId_albumValue?: PImageAlbumRelationImageIdAlbumValueCompoundUniqueInput
    AND?: PImageAlbumRelationWhereInput | PImageAlbumRelationWhereInput[]
    OR?: PImageAlbumRelationWhereInput[]
    NOT?: PImageAlbumRelationWhereInput | PImageAlbumRelationWhereInput[]
    albumValue?: StringFilter<"PImageAlbumRelation"> | string
    imageId?: StringFilter<"PImageAlbumRelation"> | string
    album?: XOR<PAlbumScalarRelationFilter, PAlbumWhereInput>
    image?: XOR<PImageScalarRelationFilter, PImageWhereInput>
  }, "imageId_albumValue">

  export type PImageAlbumRelationOrderByWithAggregationInput = {
    albumValue?: SortOrder
    imageId?: SortOrder
    _count?: PImageAlbumRelationCountOrderByAggregateInput
    _max?: PImageAlbumRelationMaxOrderByAggregateInput
    _min?: PImageAlbumRelationMinOrderByAggregateInput
  }

  export type PImageAlbumRelationScalarWhereWithAggregatesInput = {
    AND?: PImageAlbumRelationScalarWhereWithAggregatesInput | PImageAlbumRelationScalarWhereWithAggregatesInput[]
    OR?: PImageAlbumRelationScalarWhereWithAggregatesInput[]
    NOT?: PImageAlbumRelationScalarWhereWithAggregatesInput | PImageAlbumRelationScalarWhereWithAggregatesInput[]
    albumValue?: StringWithAggregatesFilter<"PImageAlbumRelation"> | string
    imageId?: StringWithAggregatesFilter<"PImageAlbumRelation"> | string
  }

  export type PTagWhereInput = {
    AND?: PTagWhereInput | PTagWhereInput[]
    OR?: PTagWhereInput[]
    NOT?: PTagWhereInput | PTagWhereInput[]
    id?: StringFilter<"PTag"> | string
    name?: StringFilter<"PTag"> | string
    category?: StringNullableFilter<"PTag"> | string | null
    parentId?: StringNullableFilter<"PTag"> | string | null
    detail?: StringNullableFilter<"PTag"> | string | null
    createdAt?: DateTimeFilter<"PTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PTag"> | Date | string | null
    parent?: XOR<PTagNullableScalarRelationFilter, PTagWhereInput> | null
    children?: PTagListRelationFilter
    images?: PImageTagRelationListRelationFilter
  }

  export type PTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    parent?: PTagOrderByWithRelationInput
    children?: PTagOrderByRelationAggregateInput
    images?: PImageTagRelationOrderByRelationAggregateInput
  }

  export type PTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PTagWhereInput | PTagWhereInput[]
    OR?: PTagWhereInput[]
    NOT?: PTagWhereInput | PTagWhereInput[]
    category?: StringNullableFilter<"PTag"> | string | null
    parentId?: StringNullableFilter<"PTag"> | string | null
    detail?: StringNullableFilter<"PTag"> | string | null
    createdAt?: DateTimeFilter<"PTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PTag"> | Date | string | null
    parent?: XOR<PTagNullableScalarRelationFilter, PTagWhereInput> | null
    children?: PTagListRelationFilter
    images?: PImageTagRelationListRelationFilter
  }, "id" | "name">

  export type PTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PTagCountOrderByAggregateInput
    _max?: PTagMaxOrderByAggregateInput
    _min?: PTagMinOrderByAggregateInput
  }

  export type PTagScalarWhereWithAggregatesInput = {
    AND?: PTagScalarWhereWithAggregatesInput | PTagScalarWhereWithAggregatesInput[]
    OR?: PTagScalarWhereWithAggregatesInput[]
    NOT?: PTagScalarWhereWithAggregatesInput | PTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PTag"> | string
    name?: StringWithAggregatesFilter<"PTag"> | string
    category?: StringNullableWithAggregatesFilter<"PTag"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"PTag"> | string | null
    detail?: StringNullableWithAggregatesFilter<"PTag"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PTag"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PTag"> | Date | string | null
  }

  export type PImageTagRelationWhereInput = {
    AND?: PImageTagRelationWhereInput | PImageTagRelationWhereInput[]
    OR?: PImageTagRelationWhereInput[]
    NOT?: PImageTagRelationWhereInput | PImageTagRelationWhereInput[]
    id?: StringFilter<"PImageTagRelation"> | string
    imageId?: StringFilter<"PImageTagRelation"> | string
    tagId?: StringFilter<"PImageTagRelation"> | string
    createdAt?: DateTimeFilter<"PImageTagRelation"> | Date | string
    image?: XOR<PImageScalarRelationFilter, PImageWhereInput>
    tag?: XOR<PTagScalarRelationFilter, PTagWhereInput>
  }

  export type PImageTagRelationOrderByWithRelationInput = {
    id?: SortOrder
    imageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    image?: PImageOrderByWithRelationInput
    tag?: PTagOrderByWithRelationInput
  }

  export type PImageTagRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    imageId_tagId?: PImageTagRelationImageIdTagIdCompoundUniqueInput
    AND?: PImageTagRelationWhereInput | PImageTagRelationWhereInput[]
    OR?: PImageTagRelationWhereInput[]
    NOT?: PImageTagRelationWhereInput | PImageTagRelationWhereInput[]
    imageId?: StringFilter<"PImageTagRelation"> | string
    tagId?: StringFilter<"PImageTagRelation"> | string
    createdAt?: DateTimeFilter<"PImageTagRelation"> | Date | string
    image?: XOR<PImageScalarRelationFilter, PImageWhereInput>
    tag?: XOR<PTagScalarRelationFilter, PTagWhereInput>
  }, "id" | "imageId_tagId">

  export type PImageTagRelationOrderByWithAggregationInput = {
    id?: SortOrder
    imageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
    _count?: PImageTagRelationCountOrderByAggregateInput
    _max?: PImageTagRelationMaxOrderByAggregateInput
    _min?: PImageTagRelationMinOrderByAggregateInput
  }

  export type PImageTagRelationScalarWhereWithAggregatesInput = {
    AND?: PImageTagRelationScalarWhereWithAggregatesInput | PImageTagRelationScalarWhereWithAggregatesInput[]
    OR?: PImageTagRelationScalarWhereWithAggregatesInput[]
    NOT?: PImageTagRelationScalarWhereWithAggregatesInput | PImageTagRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PImageTagRelation"> | string
    imageId?: StringWithAggregatesFilter<"PImageTagRelation"> | string
    tagId?: StringWithAggregatesFilter<"PImageTagRelation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PImageTagRelation"> | Date | string
  }

  export type PConfigWhereInput = {
    AND?: PConfigWhereInput | PConfigWhereInput[]
    OR?: PConfigWhereInput[]
    NOT?: PConfigWhereInput | PConfigWhereInput[]
    id?: StringFilter<"PConfig"> | string
    configKey?: StringFilter<"PConfig"> | string
    configValue?: StringNullableFilter<"PConfig"> | string | null
    detail?: StringNullableFilter<"PConfig"> | string | null
    createdAt?: DateTimeFilter<"PConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PConfig"> | Date | string | null
  }

  export type PConfigOrderByWithRelationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type PConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    configKey?: string
    AND?: PConfigWhereInput | PConfigWhereInput[]
    OR?: PConfigWhereInput[]
    NOT?: PConfigWhereInput | PConfigWhereInput[]
    configValue?: StringNullableFilter<"PConfig"> | string | null
    detail?: StringNullableFilter<"PConfig"> | string | null
    createdAt?: DateTimeFilter<"PConfig"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PConfig"> | Date | string | null
  }, "id" | "configKey">

  export type PConfigOrderByWithAggregationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrderInput | SortOrder
    detail?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PConfigCountOrderByAggregateInput
    _max?: PConfigMaxOrderByAggregateInput
    _min?: PConfigMinOrderByAggregateInput
  }

  export type PConfigScalarWhereWithAggregatesInput = {
    AND?: PConfigScalarWhereWithAggregatesInput | PConfigScalarWhereWithAggregatesInput[]
    OR?: PConfigScalarWhereWithAggregatesInput[]
    NOT?: PConfigScalarWhereWithAggregatesInput | PConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PConfig"> | string
    configKey?: StringWithAggregatesFilter<"PConfig"> | string
    configValue?: StringNullableWithAggregatesFilter<"PConfig"> | string | null
    detail?: StringNullableWithAggregatesFilter<"PConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PConfig"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PConfig"> | Date | string | null
  }

  export type PVisitLogWhereInput = {
    AND?: PVisitLogWhereInput | PVisitLogWhereInput[]
    OR?: PVisitLogWhereInput[]
    NOT?: PVisitLogWhereInput | PVisitLogWhereInput[]
    id?: StringFilter<"PVisitLog"> | string
    path?: StringFilter<"PVisitLog"> | string
    pageType?: StringFilter<"PVisitLog"> | string
    ip?: StringNullableFilter<"PVisitLog"> | string | null
    userAgent?: StringNullableFilter<"PVisitLog"> | string | null
    referrer?: StringNullableFilter<"PVisitLog"> | string | null
    source?: StringNullableFilter<"PVisitLog"> | string | null
    createdAt?: DateTimeFilter<"PVisitLog"> | Date | string
  }

  export type PVisitLogOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    pageType?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type PVisitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PVisitLogWhereInput | PVisitLogWhereInput[]
    OR?: PVisitLogWhereInput[]
    NOT?: PVisitLogWhereInput | PVisitLogWhereInput[]
    path?: StringFilter<"PVisitLog"> | string
    pageType?: StringFilter<"PVisitLog"> | string
    ip?: StringNullableFilter<"PVisitLog"> | string | null
    userAgent?: StringNullableFilter<"PVisitLog"> | string | null
    referrer?: StringNullableFilter<"PVisitLog"> | string | null
    source?: StringNullableFilter<"PVisitLog"> | string | null
    createdAt?: DateTimeFilter<"PVisitLog"> | Date | string
  }, "id">

  export type PVisitLogOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    pageType?: SortOrder
    ip?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    referrer?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PVisitLogCountOrderByAggregateInput
    _max?: PVisitLogMaxOrderByAggregateInput
    _min?: PVisitLogMinOrderByAggregateInput
  }

  export type PVisitLogScalarWhereWithAggregatesInput = {
    AND?: PVisitLogScalarWhereWithAggregatesInput | PVisitLogScalarWhereWithAggregatesInput[]
    OR?: PVisitLogScalarWhereWithAggregatesInput[]
    NOT?: PVisitLogScalarWhereWithAggregatesInput | PVisitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PVisitLog"> | string
    path?: StringWithAggregatesFilter<"PVisitLog"> | string
    pageType?: StringWithAggregatesFilter<"PVisitLog"> | string
    ip?: StringNullableWithAggregatesFilter<"PVisitLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"PVisitLog"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"PVisitLog"> | string | null
    source?: StringNullableWithAggregatesFilter<"PVisitLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PVisitLog"> | Date | string
  }

  export type PImageCreateInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    albumRelations?: PImageAlbumRelationCreateNestedManyWithoutImageInput
    tagRelations?: PImageTagRelationCreateNestedManyWithoutImageInput
  }

  export type PImageUncheckedCreateInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    albumRelations?: PImageAlbumRelationUncheckedCreateNestedManyWithoutImageInput
    tagRelations?: PImageTagRelationUncheckedCreateNestedManyWithoutImageInput
  }

  export type PImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    albumRelations?: PImageAlbumRelationUpdateManyWithoutImageNestedInput
    tagRelations?: PImageTagRelationUpdateManyWithoutImageNestedInput
  }

  export type PImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    albumRelations?: PImageAlbumRelationUncheckedUpdateManyWithoutImageNestedInput
    tagRelations?: PImageTagRelationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type PImageCreateManyInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
  }

  export type PImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
  }

  export type PImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
  }

  export type PAlbumCreateInput = {
    id?: string
    name: string
    albumValue: string
    detail?: string | null
    theme?: string
    show?: number
    sort?: number
    randomShow?: number
    license?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    imageSorting?: number
    cover?: string | null
    imageRelations?: PImageAlbumRelationCreateNestedManyWithoutAlbumInput
  }

  export type PAlbumUncheckedCreateInput = {
    id?: string
    name: string
    albumValue: string
    detail?: string | null
    theme?: string
    show?: number
    sort?: number
    randomShow?: number
    license?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    imageSorting?: number
    cover?: string | null
    imageRelations?: PImageAlbumRelationUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type PAlbumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    imageRelations?: PImageAlbumRelationUpdateManyWithoutAlbumNestedInput
  }

  export type PAlbumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    imageRelations?: PImageAlbumRelationUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type PAlbumCreateManyInput = {
    id?: string
    name: string
    albumValue: string
    detail?: string | null
    theme?: string
    show?: number
    sort?: number
    randomShow?: number
    license?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    imageSorting?: number
    cover?: string | null
  }

  export type PAlbumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PAlbumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PImageAlbumRelationCreateInput = {
    album: PAlbumCreateNestedOneWithoutImageRelationsInput
    image: PImageCreateNestedOneWithoutAlbumRelationsInput
  }

  export type PImageAlbumRelationUncheckedCreateInput = {
    albumValue: string
    imageId: string
  }

  export type PImageAlbumRelationUpdateInput = {
    album?: PAlbumUpdateOneRequiredWithoutImageRelationsNestedInput
    image?: PImageUpdateOneRequiredWithoutAlbumRelationsNestedInput
  }

  export type PImageAlbumRelationUncheckedUpdateInput = {
    albumValue?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PImageAlbumRelationCreateManyInput = {
    albumValue: string
    imageId: string
  }

  export type PImageAlbumRelationUpdateManyMutationInput = {

  }

  export type PImageAlbumRelationUncheckedUpdateManyInput = {
    albumValue?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PTagCreateInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: PTagCreateNestedOneWithoutChildrenInput
    children?: PTagCreateNestedManyWithoutParentInput
    images?: PImageTagRelationCreateNestedManyWithoutTagInput
  }

  export type PTagUncheckedCreateInput = {
    id?: string
    name: string
    category?: string | null
    parentId?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: PTagUncheckedCreateNestedManyWithoutParentInput
    images?: PImageTagRelationUncheckedCreateNestedManyWithoutTagInput
  }

  export type PTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: PTagUpdateOneWithoutChildrenNestedInput
    children?: PTagUpdateManyWithoutParentNestedInput
    images?: PImageTagRelationUpdateManyWithoutTagNestedInput
  }

  export type PTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: PTagUncheckedUpdateManyWithoutParentNestedInput
    images?: PImageTagRelationUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PTagCreateManyInput = {
    id?: string
    name: string
    category?: string | null
    parentId?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PImageTagRelationCreateInput = {
    id?: string
    createdAt?: Date | string
    image: PImageCreateNestedOneWithoutTagRelationsInput
    tag: PTagCreateNestedOneWithoutImagesInput
  }

  export type PImageTagRelationUncheckedCreateInput = {
    id?: string
    imageId: string
    tagId: string
    createdAt?: Date | string
  }

  export type PImageTagRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: PImageUpdateOneRequiredWithoutTagRelationsNestedInput
    tag?: PTagUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PImageTagRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PImageTagRelationCreateManyInput = {
    id?: string
    imageId: string
    tagId: string
    createdAt?: Date | string
  }

  export type PImageTagRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PImageTagRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PConfigCreateInput = {
    id?: string
    configKey: string
    configValue?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PConfigUncheckedCreateInput = {
    id?: string
    configKey: string
    configValue?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PConfigCreateManyInput = {
    id?: string
    configKey: string
    configValue?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PVisitLogCreateInput = {
    id?: string
    path: string
    pageType: string
    ip?: string | null
    userAgent?: string | null
    referrer?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type PVisitLogUncheckedCreateInput = {
    id?: string
    path: string
    pageType: string
    ip?: string | null
    userAgent?: string | null
    referrer?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type PVisitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pageType?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PVisitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pageType?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PVisitLogCreateManyInput = {
    id?: string
    path: string
    pageType: string
    ip?: string | null
    userAgent?: string | null
    referrer?: string | null
    source?: string | null
    createdAt?: Date | string
  }

  export type PVisitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pageType?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PVisitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    pageType?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PImageAlbumRelationListRelationFilter = {
    every?: PImageAlbumRelationWhereInput
    some?: PImageAlbumRelationWhereInput
    none?: PImageAlbumRelationWhereInput
  }

  export type PImageTagRelationListRelationFilter = {
    every?: PImageTagRelationWhereInput
    some?: PImageTagRelationWhereInput
    none?: PImageTagRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PImageAlbumRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PImageTagRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    url?: SortOrder
    previewUrl?: SortOrder
    videoUrl?: SortOrder
    originalKey?: SortOrder
    previewKey?: SortOrder
    videoKey?: SortOrder
    blurhash?: SortOrder
    exif?: SortOrder
    labels?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
  }

  export type PImageAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    del?: SortOrder
  }

  export type PImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    url?: SortOrder
    previewUrl?: SortOrder
    videoUrl?: SortOrder
    originalKey?: SortOrder
    previewKey?: SortOrder
    videoKey?: SortOrder
    blurhash?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
  }

  export type PImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageName?: SortOrder
    url?: SortOrder
    previewUrl?: SortOrder
    videoUrl?: SortOrder
    originalKey?: SortOrder
    previewKey?: SortOrder
    videoKey?: SortOrder
    blurhash?: SortOrder
    width?: SortOrder
    height?: SortOrder
    lon?: SortOrder
    lat?: SortOrder
    title?: SortOrder
    detail?: SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
  }

  export type PImageSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    type?: SortOrder
    show?: SortOrder
    showOnMainpage?: SortOrder
    featured?: SortOrder
    sort?: SortOrder
    del?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PAlbumCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    albumValue?: SortOrder
    detail?: SortOrder
    theme?: SortOrder
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    license?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
    cover?: SortOrder
  }

  export type PAlbumAvgOrderByAggregateInput = {
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
  }

  export type PAlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    albumValue?: SortOrder
    detail?: SortOrder
    theme?: SortOrder
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    license?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
    cover?: SortOrder
  }

  export type PAlbumMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    albumValue?: SortOrder
    detail?: SortOrder
    theme?: SortOrder
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    license?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
    cover?: SortOrder
  }

  export type PAlbumSumOrderByAggregateInput = {
    show?: SortOrder
    sort?: SortOrder
    randomShow?: SortOrder
    del?: SortOrder
    imageSorting?: SortOrder
  }

  export type PAlbumScalarRelationFilter = {
    is?: PAlbumWhereInput
    isNot?: PAlbumWhereInput
  }

  export type PImageScalarRelationFilter = {
    is?: PImageWhereInput
    isNot?: PImageWhereInput
  }

  export type PImageAlbumRelationImageIdAlbumValueCompoundUniqueInput = {
    imageId: string
    albumValue: string
  }

  export type PImageAlbumRelationCountOrderByAggregateInput = {
    albumValue?: SortOrder
    imageId?: SortOrder
  }

  export type PImageAlbumRelationMaxOrderByAggregateInput = {
    albumValue?: SortOrder
    imageId?: SortOrder
  }

  export type PImageAlbumRelationMinOrderByAggregateInput = {
    albumValue?: SortOrder
    imageId?: SortOrder
  }

  export type PTagNullableScalarRelationFilter = {
    is?: PTagWhereInput | null
    isNot?: PTagWhereInput | null
  }

  export type PTagListRelationFilter = {
    every?: PTagWhereInput
    some?: PTagWhereInput
    none?: PTagWhereInput
  }

  export type PTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    parentId?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PTagScalarRelationFilter = {
    is?: PTagWhereInput
    isNot?: PTagWhereInput
  }

  export type PImageTagRelationImageIdTagIdCompoundUniqueInput = {
    imageId: string
    tagId: string
  }

  export type PImageTagRelationCountOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PImageTagRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PImageTagRelationMinOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
    tagId?: SortOrder
    createdAt?: SortOrder
  }

  export type PConfigCountOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PConfigMinOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PVisitLogCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    pageType?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PVisitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    pageType?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PVisitLogMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    pageType?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    referrer?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type PImageAlbumRelationCreateNestedManyWithoutImageInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput> | PImageAlbumRelationCreateWithoutImageInput[] | PImageAlbumRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutImageInput | PImageAlbumRelationCreateOrConnectWithoutImageInput[]
    createMany?: PImageAlbumRelationCreateManyImageInputEnvelope
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
  }

  export type PImageTagRelationCreateNestedManyWithoutImageInput = {
    create?: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput> | PImageTagRelationCreateWithoutImageInput[] | PImageTagRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutImageInput | PImageTagRelationCreateOrConnectWithoutImageInput[]
    createMany?: PImageTagRelationCreateManyImageInputEnvelope
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
  }

  export type PImageAlbumRelationUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput> | PImageAlbumRelationCreateWithoutImageInput[] | PImageAlbumRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutImageInput | PImageAlbumRelationCreateOrConnectWithoutImageInput[]
    createMany?: PImageAlbumRelationCreateManyImageInputEnvelope
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
  }

  export type PImageTagRelationUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput> | PImageTagRelationCreateWithoutImageInput[] | PImageTagRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutImageInput | PImageTagRelationCreateOrConnectWithoutImageInput[]
    createMany?: PImageTagRelationCreateManyImageInputEnvelope
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PImageAlbumRelationUpdateManyWithoutImageNestedInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput> | PImageAlbumRelationCreateWithoutImageInput[] | PImageAlbumRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutImageInput | PImageAlbumRelationCreateOrConnectWithoutImageInput[]
    upsert?: PImageAlbumRelationUpsertWithWhereUniqueWithoutImageInput | PImageAlbumRelationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PImageAlbumRelationCreateManyImageInputEnvelope
    set?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    disconnect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    delete?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    update?: PImageAlbumRelationUpdateWithWhereUniqueWithoutImageInput | PImageAlbumRelationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PImageAlbumRelationUpdateManyWithWhereWithoutImageInput | PImageAlbumRelationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
  }

  export type PImageTagRelationUpdateManyWithoutImageNestedInput = {
    create?: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput> | PImageTagRelationCreateWithoutImageInput[] | PImageTagRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutImageInput | PImageTagRelationCreateOrConnectWithoutImageInput[]
    upsert?: PImageTagRelationUpsertWithWhereUniqueWithoutImageInput | PImageTagRelationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PImageTagRelationCreateManyImageInputEnvelope
    set?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    disconnect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    delete?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    update?: PImageTagRelationUpdateWithWhereUniqueWithoutImageInput | PImageTagRelationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PImageTagRelationUpdateManyWithWhereWithoutImageInput | PImageTagRelationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
  }

  export type PImageAlbumRelationUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput> | PImageAlbumRelationCreateWithoutImageInput[] | PImageAlbumRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutImageInput | PImageAlbumRelationCreateOrConnectWithoutImageInput[]
    upsert?: PImageAlbumRelationUpsertWithWhereUniqueWithoutImageInput | PImageAlbumRelationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PImageAlbumRelationCreateManyImageInputEnvelope
    set?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    disconnect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    delete?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    update?: PImageAlbumRelationUpdateWithWhereUniqueWithoutImageInput | PImageAlbumRelationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PImageAlbumRelationUpdateManyWithWhereWithoutImageInput | PImageAlbumRelationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
  }

  export type PImageTagRelationUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput> | PImageTagRelationCreateWithoutImageInput[] | PImageTagRelationUncheckedCreateWithoutImageInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutImageInput | PImageTagRelationCreateOrConnectWithoutImageInput[]
    upsert?: PImageTagRelationUpsertWithWhereUniqueWithoutImageInput | PImageTagRelationUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: PImageTagRelationCreateManyImageInputEnvelope
    set?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    disconnect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    delete?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    update?: PImageTagRelationUpdateWithWhereUniqueWithoutImageInput | PImageTagRelationUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: PImageTagRelationUpdateManyWithWhereWithoutImageInput | PImageTagRelationUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
  }

  export type PImageAlbumRelationCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput> | PImageAlbumRelationCreateWithoutAlbumInput[] | PImageAlbumRelationUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutAlbumInput | PImageAlbumRelationCreateOrConnectWithoutAlbumInput[]
    createMany?: PImageAlbumRelationCreateManyAlbumInputEnvelope
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
  }

  export type PImageAlbumRelationUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput> | PImageAlbumRelationCreateWithoutAlbumInput[] | PImageAlbumRelationUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutAlbumInput | PImageAlbumRelationCreateOrConnectWithoutAlbumInput[]
    createMany?: PImageAlbumRelationCreateManyAlbumInputEnvelope
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
  }

  export type PImageAlbumRelationUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput> | PImageAlbumRelationCreateWithoutAlbumInput[] | PImageAlbumRelationUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutAlbumInput | PImageAlbumRelationCreateOrConnectWithoutAlbumInput[]
    upsert?: PImageAlbumRelationUpsertWithWhereUniqueWithoutAlbumInput | PImageAlbumRelationUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PImageAlbumRelationCreateManyAlbumInputEnvelope
    set?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    disconnect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    delete?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    update?: PImageAlbumRelationUpdateWithWhereUniqueWithoutAlbumInput | PImageAlbumRelationUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PImageAlbumRelationUpdateManyWithWhereWithoutAlbumInput | PImageAlbumRelationUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
  }

  export type PImageAlbumRelationUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput> | PImageAlbumRelationCreateWithoutAlbumInput[] | PImageAlbumRelationUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: PImageAlbumRelationCreateOrConnectWithoutAlbumInput | PImageAlbumRelationCreateOrConnectWithoutAlbumInput[]
    upsert?: PImageAlbumRelationUpsertWithWhereUniqueWithoutAlbumInput | PImageAlbumRelationUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: PImageAlbumRelationCreateManyAlbumInputEnvelope
    set?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    disconnect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    delete?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    connect?: PImageAlbumRelationWhereUniqueInput | PImageAlbumRelationWhereUniqueInput[]
    update?: PImageAlbumRelationUpdateWithWhereUniqueWithoutAlbumInput | PImageAlbumRelationUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: PImageAlbumRelationUpdateManyWithWhereWithoutAlbumInput | PImageAlbumRelationUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
  }

  export type PAlbumCreateNestedOneWithoutImageRelationsInput = {
    create?: XOR<PAlbumCreateWithoutImageRelationsInput, PAlbumUncheckedCreateWithoutImageRelationsInput>
    connectOrCreate?: PAlbumCreateOrConnectWithoutImageRelationsInput
    connect?: PAlbumWhereUniqueInput
  }

  export type PImageCreateNestedOneWithoutAlbumRelationsInput = {
    create?: XOR<PImageCreateWithoutAlbumRelationsInput, PImageUncheckedCreateWithoutAlbumRelationsInput>
    connectOrCreate?: PImageCreateOrConnectWithoutAlbumRelationsInput
    connect?: PImageWhereUniqueInput
  }

  export type PAlbumUpdateOneRequiredWithoutImageRelationsNestedInput = {
    create?: XOR<PAlbumCreateWithoutImageRelationsInput, PAlbumUncheckedCreateWithoutImageRelationsInput>
    connectOrCreate?: PAlbumCreateOrConnectWithoutImageRelationsInput
    upsert?: PAlbumUpsertWithoutImageRelationsInput
    connect?: PAlbumWhereUniqueInput
    update?: XOR<XOR<PAlbumUpdateToOneWithWhereWithoutImageRelationsInput, PAlbumUpdateWithoutImageRelationsInput>, PAlbumUncheckedUpdateWithoutImageRelationsInput>
  }

  export type PImageUpdateOneRequiredWithoutAlbumRelationsNestedInput = {
    create?: XOR<PImageCreateWithoutAlbumRelationsInput, PImageUncheckedCreateWithoutAlbumRelationsInput>
    connectOrCreate?: PImageCreateOrConnectWithoutAlbumRelationsInput
    upsert?: PImageUpsertWithoutAlbumRelationsInput
    connect?: PImageWhereUniqueInput
    update?: XOR<XOR<PImageUpdateToOneWithWhereWithoutAlbumRelationsInput, PImageUpdateWithoutAlbumRelationsInput>, PImageUncheckedUpdateWithoutAlbumRelationsInput>
  }

  export type PTagCreateNestedOneWithoutChildrenInput = {
    create?: XOR<PTagCreateWithoutChildrenInput, PTagUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PTagCreateOrConnectWithoutChildrenInput
    connect?: PTagWhereUniqueInput
  }

  export type PTagCreateNestedManyWithoutParentInput = {
    create?: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput> | PTagCreateWithoutParentInput[] | PTagUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PTagCreateOrConnectWithoutParentInput | PTagCreateOrConnectWithoutParentInput[]
    createMany?: PTagCreateManyParentInputEnvelope
    connect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
  }

  export type PImageTagRelationCreateNestedManyWithoutTagInput = {
    create?: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput> | PImageTagRelationCreateWithoutTagInput[] | PImageTagRelationUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutTagInput | PImageTagRelationCreateOrConnectWithoutTagInput[]
    createMany?: PImageTagRelationCreateManyTagInputEnvelope
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
  }

  export type PTagUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput> | PTagCreateWithoutParentInput[] | PTagUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PTagCreateOrConnectWithoutParentInput | PTagCreateOrConnectWithoutParentInput[]
    createMany?: PTagCreateManyParentInputEnvelope
    connect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
  }

  export type PImageTagRelationUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput> | PImageTagRelationCreateWithoutTagInput[] | PImageTagRelationUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutTagInput | PImageTagRelationCreateOrConnectWithoutTagInput[]
    createMany?: PImageTagRelationCreateManyTagInputEnvelope
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
  }

  export type PTagUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<PTagCreateWithoutChildrenInput, PTagUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: PTagCreateOrConnectWithoutChildrenInput
    upsert?: PTagUpsertWithoutChildrenInput
    disconnect?: PTagWhereInput | boolean
    delete?: PTagWhereInput | boolean
    connect?: PTagWhereUniqueInput
    update?: XOR<XOR<PTagUpdateToOneWithWhereWithoutChildrenInput, PTagUpdateWithoutChildrenInput>, PTagUncheckedUpdateWithoutChildrenInput>
  }

  export type PTagUpdateManyWithoutParentNestedInput = {
    create?: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput> | PTagCreateWithoutParentInput[] | PTagUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PTagCreateOrConnectWithoutParentInput | PTagCreateOrConnectWithoutParentInput[]
    upsert?: PTagUpsertWithWhereUniqueWithoutParentInput | PTagUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PTagCreateManyParentInputEnvelope
    set?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    disconnect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    delete?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    connect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    update?: PTagUpdateWithWhereUniqueWithoutParentInput | PTagUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PTagUpdateManyWithWhereWithoutParentInput | PTagUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PTagScalarWhereInput | PTagScalarWhereInput[]
  }

  export type PImageTagRelationUpdateManyWithoutTagNestedInput = {
    create?: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput> | PImageTagRelationCreateWithoutTagInput[] | PImageTagRelationUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutTagInput | PImageTagRelationCreateOrConnectWithoutTagInput[]
    upsert?: PImageTagRelationUpsertWithWhereUniqueWithoutTagInput | PImageTagRelationUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PImageTagRelationCreateManyTagInputEnvelope
    set?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    disconnect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    delete?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    update?: PImageTagRelationUpdateWithWhereUniqueWithoutTagInput | PImageTagRelationUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PImageTagRelationUpdateManyWithWhereWithoutTagInput | PImageTagRelationUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
  }

  export type PTagUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput> | PTagCreateWithoutParentInput[] | PTagUncheckedCreateWithoutParentInput[]
    connectOrCreate?: PTagCreateOrConnectWithoutParentInput | PTagCreateOrConnectWithoutParentInput[]
    upsert?: PTagUpsertWithWhereUniqueWithoutParentInput | PTagUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: PTagCreateManyParentInputEnvelope
    set?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    disconnect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    delete?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    connect?: PTagWhereUniqueInput | PTagWhereUniqueInput[]
    update?: PTagUpdateWithWhereUniqueWithoutParentInput | PTagUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: PTagUpdateManyWithWhereWithoutParentInput | PTagUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: PTagScalarWhereInput | PTagScalarWhereInput[]
  }

  export type PImageTagRelationUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput> | PImageTagRelationCreateWithoutTagInput[] | PImageTagRelationUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PImageTagRelationCreateOrConnectWithoutTagInput | PImageTagRelationCreateOrConnectWithoutTagInput[]
    upsert?: PImageTagRelationUpsertWithWhereUniqueWithoutTagInput | PImageTagRelationUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PImageTagRelationCreateManyTagInputEnvelope
    set?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    disconnect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    delete?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    connect?: PImageTagRelationWhereUniqueInput | PImageTagRelationWhereUniqueInput[]
    update?: PImageTagRelationUpdateWithWhereUniqueWithoutTagInput | PImageTagRelationUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PImageTagRelationUpdateManyWithWhereWithoutTagInput | PImageTagRelationUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
  }

  export type PImageCreateNestedOneWithoutTagRelationsInput = {
    create?: XOR<PImageCreateWithoutTagRelationsInput, PImageUncheckedCreateWithoutTagRelationsInput>
    connectOrCreate?: PImageCreateOrConnectWithoutTagRelationsInput
    connect?: PImageWhereUniqueInput
  }

  export type PTagCreateNestedOneWithoutImagesInput = {
    create?: XOR<PTagCreateWithoutImagesInput, PTagUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PTagCreateOrConnectWithoutImagesInput
    connect?: PTagWhereUniqueInput
  }

  export type PImageUpdateOneRequiredWithoutTagRelationsNestedInput = {
    create?: XOR<PImageCreateWithoutTagRelationsInput, PImageUncheckedCreateWithoutTagRelationsInput>
    connectOrCreate?: PImageCreateOrConnectWithoutTagRelationsInput
    upsert?: PImageUpsertWithoutTagRelationsInput
    connect?: PImageWhereUniqueInput
    update?: XOR<XOR<PImageUpdateToOneWithWhereWithoutTagRelationsInput, PImageUpdateWithoutTagRelationsInput>, PImageUncheckedUpdateWithoutTagRelationsInput>
  }

  export type PTagUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PTagCreateWithoutImagesInput, PTagUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PTagCreateOrConnectWithoutImagesInput
    upsert?: PTagUpsertWithoutImagesInput
    connect?: PTagWhereUniqueInput
    update?: XOR<XOR<PTagUpdateToOneWithWhereWithoutImagesInput, PTagUpdateWithoutImagesInput>, PTagUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PImageAlbumRelationCreateWithoutImageInput = {
    album: PAlbumCreateNestedOneWithoutImageRelationsInput
  }

  export type PImageAlbumRelationUncheckedCreateWithoutImageInput = {
    albumValue: string
  }

  export type PImageAlbumRelationCreateOrConnectWithoutImageInput = {
    where: PImageAlbumRelationWhereUniqueInput
    create: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput>
  }

  export type PImageAlbumRelationCreateManyImageInputEnvelope = {
    data: PImageAlbumRelationCreateManyImageInput | PImageAlbumRelationCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type PImageTagRelationCreateWithoutImageInput = {
    id?: string
    createdAt?: Date | string
    tag: PTagCreateNestedOneWithoutImagesInput
  }

  export type PImageTagRelationUncheckedCreateWithoutImageInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
  }

  export type PImageTagRelationCreateOrConnectWithoutImageInput = {
    where: PImageTagRelationWhereUniqueInput
    create: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput>
  }

  export type PImageTagRelationCreateManyImageInputEnvelope = {
    data: PImageTagRelationCreateManyImageInput | PImageTagRelationCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type PImageAlbumRelationUpsertWithWhereUniqueWithoutImageInput = {
    where: PImageAlbumRelationWhereUniqueInput
    update: XOR<PImageAlbumRelationUpdateWithoutImageInput, PImageAlbumRelationUncheckedUpdateWithoutImageInput>
    create: XOR<PImageAlbumRelationCreateWithoutImageInput, PImageAlbumRelationUncheckedCreateWithoutImageInput>
  }

  export type PImageAlbumRelationUpdateWithWhereUniqueWithoutImageInput = {
    where: PImageAlbumRelationWhereUniqueInput
    data: XOR<PImageAlbumRelationUpdateWithoutImageInput, PImageAlbumRelationUncheckedUpdateWithoutImageInput>
  }

  export type PImageAlbumRelationUpdateManyWithWhereWithoutImageInput = {
    where: PImageAlbumRelationScalarWhereInput
    data: XOR<PImageAlbumRelationUpdateManyMutationInput, PImageAlbumRelationUncheckedUpdateManyWithoutImageInput>
  }

  export type PImageAlbumRelationScalarWhereInput = {
    AND?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
    OR?: PImageAlbumRelationScalarWhereInput[]
    NOT?: PImageAlbumRelationScalarWhereInput | PImageAlbumRelationScalarWhereInput[]
    albumValue?: StringFilter<"PImageAlbumRelation"> | string
    imageId?: StringFilter<"PImageAlbumRelation"> | string
  }

  export type PImageTagRelationUpsertWithWhereUniqueWithoutImageInput = {
    where: PImageTagRelationWhereUniqueInput
    update: XOR<PImageTagRelationUpdateWithoutImageInput, PImageTagRelationUncheckedUpdateWithoutImageInput>
    create: XOR<PImageTagRelationCreateWithoutImageInput, PImageTagRelationUncheckedCreateWithoutImageInput>
  }

  export type PImageTagRelationUpdateWithWhereUniqueWithoutImageInput = {
    where: PImageTagRelationWhereUniqueInput
    data: XOR<PImageTagRelationUpdateWithoutImageInput, PImageTagRelationUncheckedUpdateWithoutImageInput>
  }

  export type PImageTagRelationUpdateManyWithWhereWithoutImageInput = {
    where: PImageTagRelationScalarWhereInput
    data: XOR<PImageTagRelationUpdateManyMutationInput, PImageTagRelationUncheckedUpdateManyWithoutImageInput>
  }

  export type PImageTagRelationScalarWhereInput = {
    AND?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
    OR?: PImageTagRelationScalarWhereInput[]
    NOT?: PImageTagRelationScalarWhereInput | PImageTagRelationScalarWhereInput[]
    id?: StringFilter<"PImageTagRelation"> | string
    imageId?: StringFilter<"PImageTagRelation"> | string
    tagId?: StringFilter<"PImageTagRelation"> | string
    createdAt?: DateTimeFilter<"PImageTagRelation"> | Date | string
  }

  export type PImageAlbumRelationCreateWithoutAlbumInput = {
    image: PImageCreateNestedOneWithoutAlbumRelationsInput
  }

  export type PImageAlbumRelationUncheckedCreateWithoutAlbumInput = {
    imageId: string
  }

  export type PImageAlbumRelationCreateOrConnectWithoutAlbumInput = {
    where: PImageAlbumRelationWhereUniqueInput
    create: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput>
  }

  export type PImageAlbumRelationCreateManyAlbumInputEnvelope = {
    data: PImageAlbumRelationCreateManyAlbumInput | PImageAlbumRelationCreateManyAlbumInput[]
    skipDuplicates?: boolean
  }

  export type PImageAlbumRelationUpsertWithWhereUniqueWithoutAlbumInput = {
    where: PImageAlbumRelationWhereUniqueInput
    update: XOR<PImageAlbumRelationUpdateWithoutAlbumInput, PImageAlbumRelationUncheckedUpdateWithoutAlbumInput>
    create: XOR<PImageAlbumRelationCreateWithoutAlbumInput, PImageAlbumRelationUncheckedCreateWithoutAlbumInput>
  }

  export type PImageAlbumRelationUpdateWithWhereUniqueWithoutAlbumInput = {
    where: PImageAlbumRelationWhereUniqueInput
    data: XOR<PImageAlbumRelationUpdateWithoutAlbumInput, PImageAlbumRelationUncheckedUpdateWithoutAlbumInput>
  }

  export type PImageAlbumRelationUpdateManyWithWhereWithoutAlbumInput = {
    where: PImageAlbumRelationScalarWhereInput
    data: XOR<PImageAlbumRelationUpdateManyMutationInput, PImageAlbumRelationUncheckedUpdateManyWithoutAlbumInput>
  }

  export type PAlbumCreateWithoutImageRelationsInput = {
    id?: string
    name: string
    albumValue: string
    detail?: string | null
    theme?: string
    show?: number
    sort?: number
    randomShow?: number
    license?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    imageSorting?: number
    cover?: string | null
  }

  export type PAlbumUncheckedCreateWithoutImageRelationsInput = {
    id?: string
    name: string
    albumValue: string
    detail?: string | null
    theme?: string
    show?: number
    sort?: number
    randomShow?: number
    license?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    imageSorting?: number
    cover?: string | null
  }

  export type PAlbumCreateOrConnectWithoutImageRelationsInput = {
    where: PAlbumWhereUniqueInput
    create: XOR<PAlbumCreateWithoutImageRelationsInput, PAlbumUncheckedCreateWithoutImageRelationsInput>
  }

  export type PImageCreateWithoutAlbumRelationsInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    tagRelations?: PImageTagRelationCreateNestedManyWithoutImageInput
  }

  export type PImageUncheckedCreateWithoutAlbumRelationsInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    tagRelations?: PImageTagRelationUncheckedCreateNestedManyWithoutImageInput
  }

  export type PImageCreateOrConnectWithoutAlbumRelationsInput = {
    where: PImageWhereUniqueInput
    create: XOR<PImageCreateWithoutAlbumRelationsInput, PImageUncheckedCreateWithoutAlbumRelationsInput>
  }

  export type PAlbumUpsertWithoutImageRelationsInput = {
    update: XOR<PAlbumUpdateWithoutImageRelationsInput, PAlbumUncheckedUpdateWithoutImageRelationsInput>
    create: XOR<PAlbumCreateWithoutImageRelationsInput, PAlbumUncheckedCreateWithoutImageRelationsInput>
    where?: PAlbumWhereInput
  }

  export type PAlbumUpdateToOneWithWhereWithoutImageRelationsInput = {
    where?: PAlbumWhereInput
    data: XOR<PAlbumUpdateWithoutImageRelationsInput, PAlbumUncheckedUpdateWithoutImageRelationsInput>
  }

  export type PAlbumUpdateWithoutImageRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PAlbumUncheckedUpdateWithoutImageRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    albumValue?: StringFieldUpdateOperationsInput | string
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: StringFieldUpdateOperationsInput | string
    show?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    randomShow?: IntFieldUpdateOperationsInput | number
    license?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    imageSorting?: IntFieldUpdateOperationsInput | number
    cover?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PImageUpsertWithoutAlbumRelationsInput = {
    update: XOR<PImageUpdateWithoutAlbumRelationsInput, PImageUncheckedUpdateWithoutAlbumRelationsInput>
    create: XOR<PImageCreateWithoutAlbumRelationsInput, PImageUncheckedCreateWithoutAlbumRelationsInput>
    where?: PImageWhereInput
  }

  export type PImageUpdateToOneWithWhereWithoutAlbumRelationsInput = {
    where?: PImageWhereInput
    data: XOR<PImageUpdateWithoutAlbumRelationsInput, PImageUncheckedUpdateWithoutAlbumRelationsInput>
  }

  export type PImageUpdateWithoutAlbumRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    tagRelations?: PImageTagRelationUpdateManyWithoutImageNestedInput
  }

  export type PImageUncheckedUpdateWithoutAlbumRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    tagRelations?: PImageTagRelationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type PTagCreateWithoutChildrenInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: PTagCreateNestedOneWithoutChildrenInput
    images?: PImageTagRelationCreateNestedManyWithoutTagInput
  }

  export type PTagUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    category?: string | null
    parentId?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    images?: PImageTagRelationUncheckedCreateNestedManyWithoutTagInput
  }

  export type PTagCreateOrConnectWithoutChildrenInput = {
    where: PTagWhereUniqueInput
    create: XOR<PTagCreateWithoutChildrenInput, PTagUncheckedCreateWithoutChildrenInput>
  }

  export type PTagCreateWithoutParentInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: PTagCreateNestedManyWithoutParentInput
    images?: PImageTagRelationCreateNestedManyWithoutTagInput
  }

  export type PTagUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: PTagUncheckedCreateNestedManyWithoutParentInput
    images?: PImageTagRelationUncheckedCreateNestedManyWithoutTagInput
  }

  export type PTagCreateOrConnectWithoutParentInput = {
    where: PTagWhereUniqueInput
    create: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput>
  }

  export type PTagCreateManyParentInputEnvelope = {
    data: PTagCreateManyParentInput | PTagCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PImageTagRelationCreateWithoutTagInput = {
    id?: string
    createdAt?: Date | string
    image: PImageCreateNestedOneWithoutTagRelationsInput
  }

  export type PImageTagRelationUncheckedCreateWithoutTagInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type PImageTagRelationCreateOrConnectWithoutTagInput = {
    where: PImageTagRelationWhereUniqueInput
    create: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput>
  }

  export type PImageTagRelationCreateManyTagInputEnvelope = {
    data: PImageTagRelationCreateManyTagInput | PImageTagRelationCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PTagUpsertWithoutChildrenInput = {
    update: XOR<PTagUpdateWithoutChildrenInput, PTagUncheckedUpdateWithoutChildrenInput>
    create: XOR<PTagCreateWithoutChildrenInput, PTagUncheckedCreateWithoutChildrenInput>
    where?: PTagWhereInput
  }

  export type PTagUpdateToOneWithWhereWithoutChildrenInput = {
    where?: PTagWhereInput
    data: XOR<PTagUpdateWithoutChildrenInput, PTagUncheckedUpdateWithoutChildrenInput>
  }

  export type PTagUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: PTagUpdateOneWithoutChildrenNestedInput
    images?: PImageTagRelationUpdateManyWithoutTagNestedInput
  }

  export type PTagUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: PImageTagRelationUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PTagUpsertWithWhereUniqueWithoutParentInput = {
    where: PTagWhereUniqueInput
    update: XOR<PTagUpdateWithoutParentInput, PTagUncheckedUpdateWithoutParentInput>
    create: XOR<PTagCreateWithoutParentInput, PTagUncheckedCreateWithoutParentInput>
  }

  export type PTagUpdateWithWhereUniqueWithoutParentInput = {
    where: PTagWhereUniqueInput
    data: XOR<PTagUpdateWithoutParentInput, PTagUncheckedUpdateWithoutParentInput>
  }

  export type PTagUpdateManyWithWhereWithoutParentInput = {
    where: PTagScalarWhereInput
    data: XOR<PTagUpdateManyMutationInput, PTagUncheckedUpdateManyWithoutParentInput>
  }

  export type PTagScalarWhereInput = {
    AND?: PTagScalarWhereInput | PTagScalarWhereInput[]
    OR?: PTagScalarWhereInput[]
    NOT?: PTagScalarWhereInput | PTagScalarWhereInput[]
    id?: StringFilter<"PTag"> | string
    name?: StringFilter<"PTag"> | string
    category?: StringNullableFilter<"PTag"> | string | null
    parentId?: StringNullableFilter<"PTag"> | string | null
    detail?: StringNullableFilter<"PTag"> | string | null
    createdAt?: DateTimeFilter<"PTag"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PTag"> | Date | string | null
  }

  export type PImageTagRelationUpsertWithWhereUniqueWithoutTagInput = {
    where: PImageTagRelationWhereUniqueInput
    update: XOR<PImageTagRelationUpdateWithoutTagInput, PImageTagRelationUncheckedUpdateWithoutTagInput>
    create: XOR<PImageTagRelationCreateWithoutTagInput, PImageTagRelationUncheckedCreateWithoutTagInput>
  }

  export type PImageTagRelationUpdateWithWhereUniqueWithoutTagInput = {
    where: PImageTagRelationWhereUniqueInput
    data: XOR<PImageTagRelationUpdateWithoutTagInput, PImageTagRelationUncheckedUpdateWithoutTagInput>
  }

  export type PImageTagRelationUpdateManyWithWhereWithoutTagInput = {
    where: PImageTagRelationScalarWhereInput
    data: XOR<PImageTagRelationUpdateManyMutationInput, PImageTagRelationUncheckedUpdateManyWithoutTagInput>
  }

  export type PImageCreateWithoutTagRelationsInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    albumRelations?: PImageAlbumRelationCreateNestedManyWithoutImageInput
  }

  export type PImageUncheckedCreateWithoutTagRelationsInput = {
    id?: string
    imageName?: string | null
    url?: string | null
    previewUrl?: string | null
    videoUrl?: string | null
    originalKey?: string | null
    previewKey?: string | null
    videoKey?: string | null
    blurhash?: string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: number
    height?: number
    lon?: string | null
    lat?: string | null
    title?: string | null
    detail?: string | null
    type?: number
    show?: number
    showOnMainpage?: number
    featured?: number
    sort?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    del?: number
    albumRelations?: PImageAlbumRelationUncheckedCreateNestedManyWithoutImageInput
  }

  export type PImageCreateOrConnectWithoutTagRelationsInput = {
    where: PImageWhereUniqueInput
    create: XOR<PImageCreateWithoutTagRelationsInput, PImageUncheckedCreateWithoutTagRelationsInput>
  }

  export type PTagCreateWithoutImagesInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    parent?: PTagCreateNestedOneWithoutChildrenInput
    children?: PTagCreateNestedManyWithoutParentInput
  }

  export type PTagUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    category?: string | null
    parentId?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    children?: PTagUncheckedCreateNestedManyWithoutParentInput
  }

  export type PTagCreateOrConnectWithoutImagesInput = {
    where: PTagWhereUniqueInput
    create: XOR<PTagCreateWithoutImagesInput, PTagUncheckedCreateWithoutImagesInput>
  }

  export type PImageUpsertWithoutTagRelationsInput = {
    update: XOR<PImageUpdateWithoutTagRelationsInput, PImageUncheckedUpdateWithoutTagRelationsInput>
    create: XOR<PImageCreateWithoutTagRelationsInput, PImageUncheckedCreateWithoutTagRelationsInput>
    where?: PImageWhereInput
  }

  export type PImageUpdateToOneWithWhereWithoutTagRelationsInput = {
    where?: PImageWhereInput
    data: XOR<PImageUpdateWithoutTagRelationsInput, PImageUncheckedUpdateWithoutTagRelationsInput>
  }

  export type PImageUpdateWithoutTagRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    albumRelations?: PImageAlbumRelationUpdateManyWithoutImageNestedInput
  }

  export type PImageUncheckedUpdateWithoutTagRelationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageName?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    originalKey?: NullableStringFieldUpdateOperationsInput | string | null
    previewKey?: NullableStringFieldUpdateOperationsInput | string | null
    videoKey?: NullableStringFieldUpdateOperationsInput | string | null
    blurhash?: NullableStringFieldUpdateOperationsInput | string | null
    exif?: NullableJsonNullValueInput | InputJsonValue
    labels?: NullableJsonNullValueInput | InputJsonValue
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    lon?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    type?: IntFieldUpdateOperationsInput | number
    show?: IntFieldUpdateOperationsInput | number
    showOnMainpage?: IntFieldUpdateOperationsInput | number
    featured?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    del?: IntFieldUpdateOperationsInput | number
    albumRelations?: PImageAlbumRelationUncheckedUpdateManyWithoutImageNestedInput
  }

  export type PTagUpsertWithoutImagesInput = {
    update: XOR<PTagUpdateWithoutImagesInput, PTagUncheckedUpdateWithoutImagesInput>
    create: XOR<PTagCreateWithoutImagesInput, PTagUncheckedCreateWithoutImagesInput>
    where?: PTagWhereInput
  }

  export type PTagUpdateToOneWithWhereWithoutImagesInput = {
    where?: PTagWhereInput
    data: XOR<PTagUpdateWithoutImagesInput, PTagUncheckedUpdateWithoutImagesInput>
  }

  export type PTagUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parent?: PTagUpdateOneWithoutChildrenNestedInput
    children?: PTagUpdateManyWithoutParentNestedInput
  }

  export type PTagUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: PTagUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PImageAlbumRelationCreateManyImageInput = {
    albumValue: string
  }

  export type PImageTagRelationCreateManyImageInput = {
    id?: string
    tagId: string
    createdAt?: Date | string
  }

  export type PImageAlbumRelationUpdateWithoutImageInput = {
    album?: PAlbumUpdateOneRequiredWithoutImageRelationsNestedInput
  }

  export type PImageAlbumRelationUncheckedUpdateWithoutImageInput = {
    albumValue?: StringFieldUpdateOperationsInput | string
  }

  export type PImageAlbumRelationUncheckedUpdateManyWithoutImageInput = {
    albumValue?: StringFieldUpdateOperationsInput | string
  }

  export type PImageTagRelationUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tag?: PTagUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PImageTagRelationUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PImageTagRelationUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PImageAlbumRelationCreateManyAlbumInput = {
    imageId: string
  }

  export type PImageAlbumRelationUpdateWithoutAlbumInput = {
    image?: PImageUpdateOneRequiredWithoutAlbumRelationsNestedInput
  }

  export type PImageAlbumRelationUncheckedUpdateWithoutAlbumInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PImageAlbumRelationUncheckedUpdateManyWithoutAlbumInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type PTagCreateManyParentInput = {
    id?: string
    name: string
    category?: string | null
    detail?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PImageTagRelationCreateManyTagInput = {
    id?: string
    imageId: string
    createdAt?: Date | string
  }

  export type PTagUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: PTagUpdateManyWithoutParentNestedInput
    images?: PImageTagRelationUpdateManyWithoutTagNestedInput
  }

  export type PTagUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    children?: PTagUncheckedUpdateManyWithoutParentNestedInput
    images?: PImageTagRelationUncheckedUpdateManyWithoutTagNestedInput
  }

  export type PTagUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PImageTagRelationUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: PImageUpdateOneRequiredWithoutTagRelationsNestedInput
  }

  export type PImageTagRelationUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PImageTagRelationUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}