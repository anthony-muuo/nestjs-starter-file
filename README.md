## after clicking

**Use this template**

- Clone your newly created repository to your local machine:

  ```js
  git clone git@github.com:<your-username>/<your-repo-name>.git
  ```

  - Navigate to your repository's directory and proceed below.

    ```js
    pnpm install
    ```

  - Copy the env example file:

```js
cp.env.example.env;
```

- Update the docker-compose.yml where written update here with new project name

```js
pnpm docker:start
```

- Optional you can check if the migrations are working by running

```js
pnpm migration:generate src/migrations/createdUserTable
```

- then run the migration with _pnpm run migration:run_ everything fine!!

- You can now spin up your local server with this script:

```js
pnpm start:dev

```
