import { Effect } from "effect";

export const success = Effect.succeed(42);
//              ▲
//              └─── Effect<number, never, never>
Effect.runPromise(success).then(console.log);

export const fail = Effect.fail(3);
//            ▲
//            └─── Effect<never, number, never>
Effect.runPromise(fail).catch(console.error);

export const sync = Effect.sync(() => new Date());
//            ▲
//            └─── Effect<Date, never, never>
Effect.runPromise(sync).then(console.log);

export const failSync = Effect.failSync(() => new Date());
//            ▲
//            └─── Effect<never, Date, never>
Effect.runPromise(failSync).catch(console.log);
