
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AlocacaoProjeto
 * 
 */
export type AlocacaoProjeto = $Result.DefaultSelection<Prisma.$AlocacaoProjetoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AlocacaoProjetos
 * const alocacaoProjetos = await prisma.alocacaoProjeto.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AlocacaoProjetos
   * const alocacaoProjetos = await prisma.alocacaoProjeto.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alocacaoProjeto`: Exposes CRUD operations for the **AlocacaoProjeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlocacaoProjetos
    * const alocacaoProjetos = await prisma.alocacaoProjeto.findMany()
    * ```
    */
  get alocacaoProjeto(): Prisma.AlocacaoProjetoDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    AlocacaoProjeto: 'AlocacaoProjeto'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alocacaoProjeto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AlocacaoProjeto: {
        payload: Prisma.$AlocacaoProjetoPayload<ExtArgs>
        fields: Prisma.AlocacaoProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlocacaoProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlocacaoProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          findFirst: {
            args: Prisma.AlocacaoProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlocacaoProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          findMany: {
            args: Prisma.AlocacaoProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>[]
          }
          create: {
            args: Prisma.AlocacaoProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          createMany: {
            args: Prisma.AlocacaoProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlocacaoProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>[]
          }
          delete: {
            args: Prisma.AlocacaoProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          update: {
            args: Prisma.AlocacaoProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          deleteMany: {
            args: Prisma.AlocacaoProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlocacaoProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlocacaoProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>[]
          }
          upsert: {
            args: Prisma.AlocacaoProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlocacaoProjetoPayload>
          }
          aggregate: {
            args: Prisma.AlocacaoProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlocacaoProjeto>
          }
          groupBy: {
            args: Prisma.AlocacaoProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlocacaoProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<AlocacaoProjetoCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    alocacaoProjeto?: AlocacaoProjetoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model AlocacaoProjeto
   */

  export type AggregateAlocacaoProjeto = {
    _count: AlocacaoProjetoCountAggregateOutputType | null
    _avg: AlocacaoProjetoAvgAggregateOutputType | null
    _sum: AlocacaoProjetoSumAggregateOutputType | null
    _min: AlocacaoProjetoMinAggregateOutputType | null
    _max: AlocacaoProjetoMaxAggregateOutputType | null
  }

  export type AlocacaoProjetoAvgAggregateOutputType = {
    id: number | null
    id_tecnico: number | null
    id_projeto_categoria: number | null
    id_usuario: number | null
    id_cliente: number | null
    qtd_horas_alocadas: number | null
    qtd_horas_comerciais: number | null
  }

  export type AlocacaoProjetoSumAggregateOutputType = {
    id: number | null
    id_tecnico: number | null
    id_projeto_categoria: number | null
    id_usuario: number | null
    id_cliente: number | null
    qtd_horas_alocadas: number | null
    qtd_horas_comerciais: number | null
  }

  export type AlocacaoProjetoMinAggregateOutputType = {
    id: number | null
    tecnico: string | null
    id_tecnico: number | null
    projeto_categoria: string | null
    id_projeto_categoria: number | null
    usuario: string | null
    id_usuario: number | null
    cliente: string | null
    id_cliente: number | null
    qtd_horas_alocadas: number | null
    qtd_horas_comerciais: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlocacaoProjetoMaxAggregateOutputType = {
    id: number | null
    tecnico: string | null
    id_tecnico: number | null
    projeto_categoria: string | null
    id_projeto_categoria: number | null
    usuario: string | null
    id_usuario: number | null
    cliente: string | null
    id_cliente: number | null
    qtd_horas_alocadas: number | null
    qtd_horas_comerciais: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlocacaoProjetoCountAggregateOutputType = {
    id: number
    tecnico: number
    id_tecnico: number
    projeto_categoria: number
    id_projeto_categoria: number
    usuario: number
    id_usuario: number
    cliente: number
    id_cliente: number
    qtd_horas_alocadas: number
    qtd_horas_comerciais: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlocacaoProjetoAvgAggregateInputType = {
    id?: true
    id_tecnico?: true
    id_projeto_categoria?: true
    id_usuario?: true
    id_cliente?: true
    qtd_horas_alocadas?: true
    qtd_horas_comerciais?: true
  }

  export type AlocacaoProjetoSumAggregateInputType = {
    id?: true
    id_tecnico?: true
    id_projeto_categoria?: true
    id_usuario?: true
    id_cliente?: true
    qtd_horas_alocadas?: true
    qtd_horas_comerciais?: true
  }

  export type AlocacaoProjetoMinAggregateInputType = {
    id?: true
    tecnico?: true
    id_tecnico?: true
    projeto_categoria?: true
    id_projeto_categoria?: true
    usuario?: true
    id_usuario?: true
    cliente?: true
    id_cliente?: true
    qtd_horas_alocadas?: true
    qtd_horas_comerciais?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlocacaoProjetoMaxAggregateInputType = {
    id?: true
    tecnico?: true
    id_tecnico?: true
    projeto_categoria?: true
    id_projeto_categoria?: true
    usuario?: true
    id_usuario?: true
    cliente?: true
    id_cliente?: true
    qtd_horas_alocadas?: true
    qtd_horas_comerciais?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlocacaoProjetoCountAggregateInputType = {
    id?: true
    tecnico?: true
    id_tecnico?: true
    projeto_categoria?: true
    id_projeto_categoria?: true
    usuario?: true
    id_usuario?: true
    cliente?: true
    id_cliente?: true
    qtd_horas_alocadas?: true
    qtd_horas_comerciais?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlocacaoProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlocacaoProjeto to aggregate.
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProjetos to fetch.
     */
    orderBy?: AlocacaoProjetoOrderByWithRelationInput | AlocacaoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlocacaoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlocacaoProjetos
    **/
    _count?: true | AlocacaoProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlocacaoProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlocacaoProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlocacaoProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlocacaoProjetoMaxAggregateInputType
  }

  export type GetAlocacaoProjetoAggregateType<T extends AlocacaoProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlocacaoProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlocacaoProjeto[P]>
      : GetScalarType<T[P], AggregateAlocacaoProjeto[P]>
  }




  export type AlocacaoProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlocacaoProjetoWhereInput
    orderBy?: AlocacaoProjetoOrderByWithAggregationInput | AlocacaoProjetoOrderByWithAggregationInput[]
    by: AlocacaoProjetoScalarFieldEnum[] | AlocacaoProjetoScalarFieldEnum
    having?: AlocacaoProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlocacaoProjetoCountAggregateInputType | true
    _avg?: AlocacaoProjetoAvgAggregateInputType
    _sum?: AlocacaoProjetoSumAggregateInputType
    _min?: AlocacaoProjetoMinAggregateInputType
    _max?: AlocacaoProjetoMaxAggregateInputType
  }

  export type AlocacaoProjetoGroupByOutputType = {
    id: number
    tecnico: string
    id_tecnico: number
    projeto_categoria: string
    id_projeto_categoria: number
    usuario: string
    id_usuario: number
    cliente: string
    id_cliente: number
    qtd_horas_alocadas: number
    qtd_horas_comerciais: number
    createdAt: Date
    updatedAt: Date
    _count: AlocacaoProjetoCountAggregateOutputType | null
    _avg: AlocacaoProjetoAvgAggregateOutputType | null
    _sum: AlocacaoProjetoSumAggregateOutputType | null
    _min: AlocacaoProjetoMinAggregateOutputType | null
    _max: AlocacaoProjetoMaxAggregateOutputType | null
  }

  type GetAlocacaoProjetoGroupByPayload<T extends AlocacaoProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlocacaoProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlocacaoProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlocacaoProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], AlocacaoProjetoGroupByOutputType[P]>
        }
      >
    >


  export type AlocacaoProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnico?: boolean
    id_tecnico?: boolean
    projeto_categoria?: boolean
    id_projeto_categoria?: boolean
    usuario?: boolean
    id_usuario?: boolean
    cliente?: boolean
    id_cliente?: boolean
    qtd_horas_alocadas?: boolean
    qtd_horas_comerciais?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alocacaoProjeto"]>

  export type AlocacaoProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnico?: boolean
    id_tecnico?: boolean
    projeto_categoria?: boolean
    id_projeto_categoria?: boolean
    usuario?: boolean
    id_usuario?: boolean
    cliente?: boolean
    id_cliente?: boolean
    qtd_horas_alocadas?: boolean
    qtd_horas_comerciais?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alocacaoProjeto"]>

  export type AlocacaoProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tecnico?: boolean
    id_tecnico?: boolean
    projeto_categoria?: boolean
    id_projeto_categoria?: boolean
    usuario?: boolean
    id_usuario?: boolean
    cliente?: boolean
    id_cliente?: boolean
    qtd_horas_alocadas?: boolean
    qtd_horas_comerciais?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alocacaoProjeto"]>

  export type AlocacaoProjetoSelectScalar = {
    id?: boolean
    tecnico?: boolean
    id_tecnico?: boolean
    projeto_categoria?: boolean
    id_projeto_categoria?: boolean
    usuario?: boolean
    id_usuario?: boolean
    cliente?: boolean
    id_cliente?: boolean
    qtd_horas_alocadas?: boolean
    qtd_horas_comerciais?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlocacaoProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tecnico" | "id_tecnico" | "projeto_categoria" | "id_projeto_categoria" | "usuario" | "id_usuario" | "cliente" | "id_cliente" | "qtd_horas_alocadas" | "qtd_horas_comerciais" | "createdAt" | "updatedAt", ExtArgs["result"]["alocacaoProjeto"]>

  export type $AlocacaoProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlocacaoProjeto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tecnico: string
      id_tecnico: number
      projeto_categoria: string
      id_projeto_categoria: number
      usuario: string
      id_usuario: number
      cliente: string
      id_cliente: number
      qtd_horas_alocadas: number
      qtd_horas_comerciais: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alocacaoProjeto"]>
    composites: {}
  }

  type AlocacaoProjetoGetPayload<S extends boolean | null | undefined | AlocacaoProjetoDefaultArgs> = $Result.GetResult<Prisma.$AlocacaoProjetoPayload, S>

  type AlocacaoProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlocacaoProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlocacaoProjetoCountAggregateInputType | true
    }

  export interface AlocacaoProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlocacaoProjeto'], meta: { name: 'AlocacaoProjeto' } }
    /**
     * Find zero or one AlocacaoProjeto that matches the filter.
     * @param {AlocacaoProjetoFindUniqueArgs} args - Arguments to find a AlocacaoProjeto
     * @example
     * // Get one AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlocacaoProjetoFindUniqueArgs>(args: SelectSubset<T, AlocacaoProjetoFindUniqueArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlocacaoProjeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlocacaoProjetoFindUniqueOrThrowArgs} args - Arguments to find a AlocacaoProjeto
     * @example
     * // Get one AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlocacaoProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlocacaoProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlocacaoProjeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoFindFirstArgs} args - Arguments to find a AlocacaoProjeto
     * @example
     * // Get one AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlocacaoProjetoFindFirstArgs>(args?: SelectSubset<T, AlocacaoProjetoFindFirstArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlocacaoProjeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoFindFirstOrThrowArgs} args - Arguments to find a AlocacaoProjeto
     * @example
     * // Get one AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlocacaoProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlocacaoProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlocacaoProjetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlocacaoProjetos
     * const alocacaoProjetos = await prisma.alocacaoProjeto.findMany()
     * 
     * // Get first 10 AlocacaoProjetos
     * const alocacaoProjetos = await prisma.alocacaoProjeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alocacaoProjetoWithIdOnly = await prisma.alocacaoProjeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlocacaoProjetoFindManyArgs>(args?: SelectSubset<T, AlocacaoProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlocacaoProjeto.
     * @param {AlocacaoProjetoCreateArgs} args - Arguments to create a AlocacaoProjeto.
     * @example
     * // Create one AlocacaoProjeto
     * const AlocacaoProjeto = await prisma.alocacaoProjeto.create({
     *   data: {
     *     // ... data to create a AlocacaoProjeto
     *   }
     * })
     * 
     */
    create<T extends AlocacaoProjetoCreateArgs>(args: SelectSubset<T, AlocacaoProjetoCreateArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlocacaoProjetos.
     * @param {AlocacaoProjetoCreateManyArgs} args - Arguments to create many AlocacaoProjetos.
     * @example
     * // Create many AlocacaoProjetos
     * const alocacaoProjeto = await prisma.alocacaoProjeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlocacaoProjetoCreateManyArgs>(args?: SelectSubset<T, AlocacaoProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlocacaoProjetos and returns the data saved in the database.
     * @param {AlocacaoProjetoCreateManyAndReturnArgs} args - Arguments to create many AlocacaoProjetos.
     * @example
     * // Create many AlocacaoProjetos
     * const alocacaoProjeto = await prisma.alocacaoProjeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlocacaoProjetos and only return the `id`
     * const alocacaoProjetoWithIdOnly = await prisma.alocacaoProjeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlocacaoProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlocacaoProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlocacaoProjeto.
     * @param {AlocacaoProjetoDeleteArgs} args - Arguments to delete one AlocacaoProjeto.
     * @example
     * // Delete one AlocacaoProjeto
     * const AlocacaoProjeto = await prisma.alocacaoProjeto.delete({
     *   where: {
     *     // ... filter to delete one AlocacaoProjeto
     *   }
     * })
     * 
     */
    delete<T extends AlocacaoProjetoDeleteArgs>(args: SelectSubset<T, AlocacaoProjetoDeleteArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlocacaoProjeto.
     * @param {AlocacaoProjetoUpdateArgs} args - Arguments to update one AlocacaoProjeto.
     * @example
     * // Update one AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlocacaoProjetoUpdateArgs>(args: SelectSubset<T, AlocacaoProjetoUpdateArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlocacaoProjetos.
     * @param {AlocacaoProjetoDeleteManyArgs} args - Arguments to filter AlocacaoProjetos to delete.
     * @example
     * // Delete a few AlocacaoProjetos
     * const { count } = await prisma.alocacaoProjeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlocacaoProjetoDeleteManyArgs>(args?: SelectSubset<T, AlocacaoProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlocacaoProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlocacaoProjetos
     * const alocacaoProjeto = await prisma.alocacaoProjeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlocacaoProjetoUpdateManyArgs>(args: SelectSubset<T, AlocacaoProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlocacaoProjetos and returns the data updated in the database.
     * @param {AlocacaoProjetoUpdateManyAndReturnArgs} args - Arguments to update many AlocacaoProjetos.
     * @example
     * // Update many AlocacaoProjetos
     * const alocacaoProjeto = await prisma.alocacaoProjeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlocacaoProjetos and only return the `id`
     * const alocacaoProjetoWithIdOnly = await prisma.alocacaoProjeto.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlocacaoProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, AlocacaoProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlocacaoProjeto.
     * @param {AlocacaoProjetoUpsertArgs} args - Arguments to update or create a AlocacaoProjeto.
     * @example
     * // Update or create a AlocacaoProjeto
     * const alocacaoProjeto = await prisma.alocacaoProjeto.upsert({
     *   create: {
     *     // ... data to create a AlocacaoProjeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlocacaoProjeto we want to update
     *   }
     * })
     */
    upsert<T extends AlocacaoProjetoUpsertArgs>(args: SelectSubset<T, AlocacaoProjetoUpsertArgs<ExtArgs>>): Prisma__AlocacaoProjetoClient<$Result.GetResult<Prisma.$AlocacaoProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlocacaoProjetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoCountArgs} args - Arguments to filter AlocacaoProjetos to count.
     * @example
     * // Count the number of AlocacaoProjetos
     * const count = await prisma.alocacaoProjeto.count({
     *   where: {
     *     // ... the filter for the AlocacaoProjetos we want to count
     *   }
     * })
    **/
    count<T extends AlocacaoProjetoCountArgs>(
      args?: Subset<T, AlocacaoProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlocacaoProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlocacaoProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlocacaoProjetoAggregateArgs>(args: Subset<T, AlocacaoProjetoAggregateArgs>): Prisma.PrismaPromise<GetAlocacaoProjetoAggregateType<T>>

    /**
     * Group by AlocacaoProjeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlocacaoProjetoGroupByArgs} args - Group by arguments.
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
      T extends AlocacaoProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlocacaoProjetoGroupByArgs['orderBy'] }
        : { orderBy?: AlocacaoProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlocacaoProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlocacaoProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlocacaoProjeto model
   */
  readonly fields: AlocacaoProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlocacaoProjeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlocacaoProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AlocacaoProjeto model
   */
  interface AlocacaoProjetoFieldRefs {
    readonly id: FieldRef<"AlocacaoProjeto", 'Int'>
    readonly tecnico: FieldRef<"AlocacaoProjeto", 'String'>
    readonly id_tecnico: FieldRef<"AlocacaoProjeto", 'Int'>
    readonly projeto_categoria: FieldRef<"AlocacaoProjeto", 'String'>
    readonly id_projeto_categoria: FieldRef<"AlocacaoProjeto", 'Int'>
    readonly usuario: FieldRef<"AlocacaoProjeto", 'String'>
    readonly id_usuario: FieldRef<"AlocacaoProjeto", 'Int'>
    readonly cliente: FieldRef<"AlocacaoProjeto", 'String'>
    readonly id_cliente: FieldRef<"AlocacaoProjeto", 'Int'>
    readonly qtd_horas_alocadas: FieldRef<"AlocacaoProjeto", 'Float'>
    readonly qtd_horas_comerciais: FieldRef<"AlocacaoProjeto", 'Float'>
    readonly createdAt: FieldRef<"AlocacaoProjeto", 'DateTime'>
    readonly updatedAt: FieldRef<"AlocacaoProjeto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlocacaoProjeto findUnique
   */
  export type AlocacaoProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter, which AlocacaoProjeto to fetch.
     */
    where: AlocacaoProjetoWhereUniqueInput
  }

  /**
   * AlocacaoProjeto findUniqueOrThrow
   */
  export type AlocacaoProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter, which AlocacaoProjeto to fetch.
     */
    where: AlocacaoProjetoWhereUniqueInput
  }

  /**
   * AlocacaoProjeto findFirst
   */
  export type AlocacaoProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter, which AlocacaoProjeto to fetch.
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProjetos to fetch.
     */
    orderBy?: AlocacaoProjetoOrderByWithRelationInput | AlocacaoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlocacaoProjetos.
     */
    cursor?: AlocacaoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlocacaoProjetos.
     */
    distinct?: AlocacaoProjetoScalarFieldEnum | AlocacaoProjetoScalarFieldEnum[]
  }

  /**
   * AlocacaoProjeto findFirstOrThrow
   */
  export type AlocacaoProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter, which AlocacaoProjeto to fetch.
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProjetos to fetch.
     */
    orderBy?: AlocacaoProjetoOrderByWithRelationInput | AlocacaoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlocacaoProjetos.
     */
    cursor?: AlocacaoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProjetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlocacaoProjetos.
     */
    distinct?: AlocacaoProjetoScalarFieldEnum | AlocacaoProjetoScalarFieldEnum[]
  }

  /**
   * AlocacaoProjeto findMany
   */
  export type AlocacaoProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter, which AlocacaoProjetos to fetch.
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlocacaoProjetos to fetch.
     */
    orderBy?: AlocacaoProjetoOrderByWithRelationInput | AlocacaoProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlocacaoProjetos.
     */
    cursor?: AlocacaoProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlocacaoProjetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlocacaoProjetos.
     */
    skip?: number
    distinct?: AlocacaoProjetoScalarFieldEnum | AlocacaoProjetoScalarFieldEnum[]
  }

  /**
   * AlocacaoProjeto create
   */
  export type AlocacaoProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * The data needed to create a AlocacaoProjeto.
     */
    data: XOR<AlocacaoProjetoCreateInput, AlocacaoProjetoUncheckedCreateInput>
  }

  /**
   * AlocacaoProjeto createMany
   */
  export type AlocacaoProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlocacaoProjetos.
     */
    data: AlocacaoProjetoCreateManyInput | AlocacaoProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlocacaoProjeto createManyAndReturn
   */
  export type AlocacaoProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many AlocacaoProjetos.
     */
    data: AlocacaoProjetoCreateManyInput | AlocacaoProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlocacaoProjeto update
   */
  export type AlocacaoProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * The data needed to update a AlocacaoProjeto.
     */
    data: XOR<AlocacaoProjetoUpdateInput, AlocacaoProjetoUncheckedUpdateInput>
    /**
     * Choose, which AlocacaoProjeto to update.
     */
    where: AlocacaoProjetoWhereUniqueInput
  }

  /**
   * AlocacaoProjeto updateMany
   */
  export type AlocacaoProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlocacaoProjetos.
     */
    data: XOR<AlocacaoProjetoUpdateManyMutationInput, AlocacaoProjetoUncheckedUpdateManyInput>
    /**
     * Filter which AlocacaoProjetos to update
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * Limit how many AlocacaoProjetos to update.
     */
    limit?: number
  }

  /**
   * AlocacaoProjeto updateManyAndReturn
   */
  export type AlocacaoProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * The data used to update AlocacaoProjetos.
     */
    data: XOR<AlocacaoProjetoUpdateManyMutationInput, AlocacaoProjetoUncheckedUpdateManyInput>
    /**
     * Filter which AlocacaoProjetos to update
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * Limit how many AlocacaoProjetos to update.
     */
    limit?: number
  }

  /**
   * AlocacaoProjeto upsert
   */
  export type AlocacaoProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * The filter to search for the AlocacaoProjeto to update in case it exists.
     */
    where: AlocacaoProjetoWhereUniqueInput
    /**
     * In case the AlocacaoProjeto found by the `where` argument doesn't exist, create a new AlocacaoProjeto with this data.
     */
    create: XOR<AlocacaoProjetoCreateInput, AlocacaoProjetoUncheckedCreateInput>
    /**
     * In case the AlocacaoProjeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlocacaoProjetoUpdateInput, AlocacaoProjetoUncheckedUpdateInput>
  }

  /**
   * AlocacaoProjeto delete
   */
  export type AlocacaoProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
    /**
     * Filter which AlocacaoProjeto to delete.
     */
    where: AlocacaoProjetoWhereUniqueInput
  }

  /**
   * AlocacaoProjeto deleteMany
   */
  export type AlocacaoProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlocacaoProjetos to delete
     */
    where?: AlocacaoProjetoWhereInput
    /**
     * Limit how many AlocacaoProjetos to delete.
     */
    limit?: number
  }

  /**
   * AlocacaoProjeto without action
   */
  export type AlocacaoProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlocacaoProjeto
     */
    select?: AlocacaoProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlocacaoProjeto
     */
    omit?: AlocacaoProjetoOmit<ExtArgs> | null
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


  export const AlocacaoProjetoScalarFieldEnum: {
    id: 'id',
    tecnico: 'tecnico',
    id_tecnico: 'id_tecnico',
    projeto_categoria: 'projeto_categoria',
    id_projeto_categoria: 'id_projeto_categoria',
    usuario: 'usuario',
    id_usuario: 'id_usuario',
    cliente: 'cliente',
    id_cliente: 'id_cliente',
    qtd_horas_alocadas: 'qtd_horas_alocadas',
    qtd_horas_comerciais: 'qtd_horas_comerciais',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlocacaoProjetoScalarFieldEnum = (typeof AlocacaoProjetoScalarFieldEnum)[keyof typeof AlocacaoProjetoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type AlocacaoProjetoWhereInput = {
    AND?: AlocacaoProjetoWhereInput | AlocacaoProjetoWhereInput[]
    OR?: AlocacaoProjetoWhereInput[]
    NOT?: AlocacaoProjetoWhereInput | AlocacaoProjetoWhereInput[]
    id?: IntFilter<"AlocacaoProjeto"> | number
    tecnico?: StringFilter<"AlocacaoProjeto"> | string
    id_tecnico?: IntFilter<"AlocacaoProjeto"> | number
    projeto_categoria?: StringFilter<"AlocacaoProjeto"> | string
    id_projeto_categoria?: IntFilter<"AlocacaoProjeto"> | number
    usuario?: StringFilter<"AlocacaoProjeto"> | string
    id_usuario?: IntFilter<"AlocacaoProjeto"> | number
    cliente?: StringFilter<"AlocacaoProjeto"> | string
    id_cliente?: IntFilter<"AlocacaoProjeto"> | number
    qtd_horas_alocadas?: FloatFilter<"AlocacaoProjeto"> | number
    qtd_horas_comerciais?: FloatFilter<"AlocacaoProjeto"> | number
    createdAt?: DateTimeFilter<"AlocacaoProjeto"> | Date | string
    updatedAt?: DateTimeFilter<"AlocacaoProjeto"> | Date | string
  }

  export type AlocacaoProjetoOrderByWithRelationInput = {
    id?: SortOrder
    tecnico?: SortOrder
    id_tecnico?: SortOrder
    projeto_categoria?: SortOrder
    id_projeto_categoria?: SortOrder
    usuario?: SortOrder
    id_usuario?: SortOrder
    cliente?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlocacaoProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlocacaoProjetoWhereInput | AlocacaoProjetoWhereInput[]
    OR?: AlocacaoProjetoWhereInput[]
    NOT?: AlocacaoProjetoWhereInput | AlocacaoProjetoWhereInput[]
    tecnico?: StringFilter<"AlocacaoProjeto"> | string
    id_tecnico?: IntFilter<"AlocacaoProjeto"> | number
    projeto_categoria?: StringFilter<"AlocacaoProjeto"> | string
    id_projeto_categoria?: IntFilter<"AlocacaoProjeto"> | number
    usuario?: StringFilter<"AlocacaoProjeto"> | string
    id_usuario?: IntFilter<"AlocacaoProjeto"> | number
    cliente?: StringFilter<"AlocacaoProjeto"> | string
    id_cliente?: IntFilter<"AlocacaoProjeto"> | number
    qtd_horas_alocadas?: FloatFilter<"AlocacaoProjeto"> | number
    qtd_horas_comerciais?: FloatFilter<"AlocacaoProjeto"> | number
    createdAt?: DateTimeFilter<"AlocacaoProjeto"> | Date | string
    updatedAt?: DateTimeFilter<"AlocacaoProjeto"> | Date | string
  }, "id">

  export type AlocacaoProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    tecnico?: SortOrder
    id_tecnico?: SortOrder
    projeto_categoria?: SortOrder
    id_projeto_categoria?: SortOrder
    usuario?: SortOrder
    id_usuario?: SortOrder
    cliente?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlocacaoProjetoCountOrderByAggregateInput
    _avg?: AlocacaoProjetoAvgOrderByAggregateInput
    _max?: AlocacaoProjetoMaxOrderByAggregateInput
    _min?: AlocacaoProjetoMinOrderByAggregateInput
    _sum?: AlocacaoProjetoSumOrderByAggregateInput
  }

  export type AlocacaoProjetoScalarWhereWithAggregatesInput = {
    AND?: AlocacaoProjetoScalarWhereWithAggregatesInput | AlocacaoProjetoScalarWhereWithAggregatesInput[]
    OR?: AlocacaoProjetoScalarWhereWithAggregatesInput[]
    NOT?: AlocacaoProjetoScalarWhereWithAggregatesInput | AlocacaoProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AlocacaoProjeto"> | number
    tecnico?: StringWithAggregatesFilter<"AlocacaoProjeto"> | string
    id_tecnico?: IntWithAggregatesFilter<"AlocacaoProjeto"> | number
    projeto_categoria?: StringWithAggregatesFilter<"AlocacaoProjeto"> | string
    id_projeto_categoria?: IntWithAggregatesFilter<"AlocacaoProjeto"> | number
    usuario?: StringWithAggregatesFilter<"AlocacaoProjeto"> | string
    id_usuario?: IntWithAggregatesFilter<"AlocacaoProjeto"> | number
    cliente?: StringWithAggregatesFilter<"AlocacaoProjeto"> | string
    id_cliente?: IntWithAggregatesFilter<"AlocacaoProjeto"> | number
    qtd_horas_alocadas?: FloatWithAggregatesFilter<"AlocacaoProjeto"> | number
    qtd_horas_comerciais?: FloatWithAggregatesFilter<"AlocacaoProjeto"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AlocacaoProjeto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlocacaoProjeto"> | Date | string
  }

  export type AlocacaoProjetoCreateInput = {
    tecnico: string
    id_tecnico: number
    projeto_categoria: string
    id_projeto_categoria: number
    usuario: string
    id_usuario: number
    cliente: string
    id_cliente: number
    qtd_horas_alocadas: number
    qtd_horas_comerciais: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlocacaoProjetoUncheckedCreateInput = {
    id?: number
    tecnico: string
    id_tecnico: number
    projeto_categoria: string
    id_projeto_categoria: number
    usuario: string
    id_usuario: number
    cliente: string
    id_cliente: number
    qtd_horas_alocadas: number
    qtd_horas_comerciais: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlocacaoProjetoUpdateInput = {
    tecnico?: StringFieldUpdateOperationsInput | string
    id_tecnico?: IntFieldUpdateOperationsInput | number
    projeto_categoria?: StringFieldUpdateOperationsInput | string
    id_projeto_categoria?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    qtd_horas_alocadas?: FloatFieldUpdateOperationsInput | number
    qtd_horas_comerciais?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnico?: StringFieldUpdateOperationsInput | string
    id_tecnico?: IntFieldUpdateOperationsInput | number
    projeto_categoria?: StringFieldUpdateOperationsInput | string
    id_projeto_categoria?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    qtd_horas_alocadas?: FloatFieldUpdateOperationsInput | number
    qtd_horas_comerciais?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProjetoCreateManyInput = {
    id?: number
    tecnico: string
    id_tecnico: number
    projeto_categoria: string
    id_projeto_categoria: number
    usuario: string
    id_usuario: number
    cliente: string
    id_cliente: number
    qtd_horas_alocadas: number
    qtd_horas_comerciais: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlocacaoProjetoUpdateManyMutationInput = {
    tecnico?: StringFieldUpdateOperationsInput | string
    id_tecnico?: IntFieldUpdateOperationsInput | number
    projeto_categoria?: StringFieldUpdateOperationsInput | string
    id_projeto_categoria?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    qtd_horas_alocadas?: FloatFieldUpdateOperationsInput | number
    qtd_horas_comerciais?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlocacaoProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tecnico?: StringFieldUpdateOperationsInput | string
    id_tecnico?: IntFieldUpdateOperationsInput | number
    projeto_categoria?: StringFieldUpdateOperationsInput | string
    id_projeto_categoria?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    id_usuario?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    qtd_horas_alocadas?: FloatFieldUpdateOperationsInput | number
    qtd_horas_comerciais?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type AlocacaoProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    tecnico?: SortOrder
    id_tecnico?: SortOrder
    projeto_categoria?: SortOrder
    id_projeto_categoria?: SortOrder
    usuario?: SortOrder
    id_usuario?: SortOrder
    cliente?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlocacaoProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_tecnico?: SortOrder
    id_projeto_categoria?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
  }

  export type AlocacaoProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    tecnico?: SortOrder
    id_tecnico?: SortOrder
    projeto_categoria?: SortOrder
    id_projeto_categoria?: SortOrder
    usuario?: SortOrder
    id_usuario?: SortOrder
    cliente?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlocacaoProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    tecnico?: SortOrder
    id_tecnico?: SortOrder
    projeto_categoria?: SortOrder
    id_projeto_categoria?: SortOrder
    usuario?: SortOrder
    id_usuario?: SortOrder
    cliente?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlocacaoProjetoSumOrderByAggregateInput = {
    id?: SortOrder
    id_tecnico?: SortOrder
    id_projeto_categoria?: SortOrder
    id_usuario?: SortOrder
    id_cliente?: SortOrder
    qtd_horas_alocadas?: SortOrder
    qtd_horas_comerciais?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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