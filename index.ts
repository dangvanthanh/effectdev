import { Console, Effect } from "effect";

interface User {
	readonly id: number;
	readonly name: string;
}

const getUser = (userId: number): Effect.Effect<User, Error> => {
	const userDatabase: Record<number, User> = {
		1: { id: 1, name: "Hoa Long" },
		2: { id: 2, name: "Hai Huynh" },
	};

	const user = userDatabase[userId];

	if (user) {
		return Effect.succeed(user);
	}

	return Effect.fail(new Error("User not found"));
};

const example = getUser(2);

const program = Console.log(example);

Effect.runSync(program);
