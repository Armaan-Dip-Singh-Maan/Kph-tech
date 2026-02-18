# Migrate to Hostinger MySQL (srv1439)

The schema is already set to **MySQL**. Use these steps once to create tables and seed data on Hostinger.

## 1. Set your database URL locally

Create or edit **`.env`** in the project root (do **not** commit this file):

```env
DATABASE_URL="mysql://u408069121_kt_prod:YOUR_PASSWORD_ENCODED@srv1439.hstgr.io/u408069121_kt_prod"
```

**Important – encode the password:**  
If your password contains special characters, URL-encode them in the URL:

| Character | Use in URL |
|-----------|------------|
| `@`       | `%40`      |
| `#`       | `%23`      |
| `%`       | `%25`      |
| `?`       | `%3F`      |

Example: if your password is `Kph@0987654`, in the URL use `Kph%400987654` (the `@` becomes `%40`).

Full example (replace `YOUR_PASSWORD_ENCODED` with your actual encoded password):

```env
DATABASE_URL="mysql://u408069121_kt_prod:YOUR_PASSWORD_ENCODED@srv1439.hstgr.io/u408069121_kt_prod"
```

You can use the IP instead of the hostname: `@193.203.166.175` instead of `@srv1439.hstgr.io`.

## 2. Create tables and seed data

From the project root, run:

```bash
npx prisma db push
npx prisma db seed
```

Or in one go:

```bash
npm run db:hostinger
```

- **`db push`** – Creates/updates all tables on Hostinger MySQL (no migration history).
- **`db seed`** – Fills Services, Partners, Why Choose Us, footer, nav, etc.

## 3. Use the same URL in production

Where the app runs (e.g. Vercel, Hostinger Node, or any host), set the **same** `DATABASE_URL` in the environment (with the encoded password). The app will then read/write from this MySQL database.

## 4. Verify

- Open **`https://YOUR-LIVE-SITE.com/api/debug-db`**  
- You should see `ok: true` and `counts` with values > 0.

---

**Local SQLite again (optional)**  
To use SQLite again locally, in `prisma/schema.prisma` set `provider = "sqlite"` and in `.env` set e.g. `DATABASE_URL="file:./dev.db"`. Switch back to `provider = "mysql"` and the Hostinger URL when you deploy or re-seed production.
