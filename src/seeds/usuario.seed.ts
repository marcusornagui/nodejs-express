import { Client } from "pg";
import { fakerPT_BR as faker } from '@faker-js/faker'

async function main() {

    console.log(`teste`);
    const client = new Client();
    await client.connect();

    const insertQuery = 'INSERT INTO usuario (nome, email, password, admin) VALUES ($1, $2, $3, $4) RETURNING *';

    for (let index = 1; index < 10; index++) {
        const randomFirtName = faker.person.firstName();
        const randomLastName = faker.person.lastName();
        const randomName = `${randomFirtName} ${randomLastName}`;
        const randomEmail =  faker.internet.email({firstName: randomFirtName, lastName: randomLastName});
        const randomPassword = faker.internet.password();
        const randomAdmin = faker.datatype.boolean();

        const res = await client.query(insertQuery, [randomName, randomEmail, randomPassword, randomAdmin]);

        console.log(`${res.rows[0].id} - ${res.rows[0].nome}`);
    }

    await client.end();
}

main();
