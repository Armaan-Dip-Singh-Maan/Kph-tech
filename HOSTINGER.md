# Hostinger: Services / Partners / Why Choose Us not showing

## 1. Check what’s going wrong (diagnostic link)

After you deploy, open this URL on your live site:

**`https://YOUR-HOSTINGER-DOMAIN.com/api/debug-db`**

Example: `https://yoursite.com/api/debug-db`

It returns JSON that tells you:

- **`ok`** – `true` = DB connection works, `false` = DB failed (see `error`).
- **`database.type`** – `sqlite` | `mysql` | `unknown` (from your `DATABASE_URL`).
- **`counts`** – Number of rows in Services, Features, Partners. If all are `0`, the DB is empty.
- **`usingFallback`** – App is using built-in fallback content (sections still show, but from code, not DB).
- **`error`** – Shown when the DB connection or query failed.

So:

- **Sections missing** → Often the app isn’t running as Node (e.g. static export only), or the page is erroring before render. Use the debug link and check your Hostinger error logs.
- **Sections show but you want them from DB** → Create a real database, point `DATABASE_URL` to it, run migrations and seed (see below).

---

## 2. Why the “database” on Hostinger doesn’t work out of the box

This project uses **SQLite** by default (`provider = "sqlite"` in `prisma/schema.prisma`).  
Hostinger shared hosting usually gives **MySQL**, not SQLite. So:

- If you set `DATABASE_URL` to a **MySQL** URL (e.g. `mysql://user:pass@host/db`) but keep the schema as SQLite, Prisma will fail (wrong provider).
- If you don’t set `DATABASE_URL` or the DB doesn’t exist, the app catches the error and uses **fallback content** – so Services, Partners, and Why Choose Us should still appear with default data.

So “database on Hostinger” only works if you either:

- Use **MySQL** and change the app to use MySQL (see below), or  
- Use a **hosted SQLite** (e.g. Turso) and keep SQLite in the schema.

---

## 3. What is “actually happening”

| Situation | What you see | What the debug link shows |
|-----------|----------------|---------------------------|
| No DB / wrong URL | Sections still show (fallback content) | `ok: false`, `error` set, `usingFallback: true` |
| DB connected, tables empty | Sections show with default content | `ok: true`, `counts` all 0, `usingFallback: true` |
| DB connected, seeded | Sections show your DB content | `ok: true`, `counts` > 0, `usingFallback: false` |
| App not running as Node (e.g. static only) | Sections may be missing or empty | `/api/debug-db` may 404 or not be available |

So: **open the diagnostic link first** – it tells you exactly which of these is happening.

---

## 4. Use a real MySQL database on Hostinger (step-by-step)

### 4.1 Create the database on Hostinger

1. Log in to **Hostinger** → **Databases** → **MySQL Databases**.
2. Create a new database (note the **database name**).
3. Create a **user** and assign it to that database (note **username**, **password**, **host** – often `localhost` or an internal host like `mysql123.hostinger.com`).
4. Copy the connection string Hostinger shows, or build it:  
   `mysql://USERNAME:PASSWORD@HOST/DATABASE_NAME`

### 4.2 Switch this project to MySQL and create tables

The app is set up for **SQLite** by default. For Hostinger you must use **MySQL** and create tables once.

1. **Change the Prisma provider to MySQL**  
   In **`prisma/schema.prisma`**, change the datasource to:
   ```prisma
   datasource db {
     provider = "mysql"
     url      = env("DATABASE_URL")
   }
   ```
   (Replace `provider = "sqlite"` with `provider = "mysql"`.)

2. **Set your Hostinger DB URL** (on your machine or server, in `.env` or environment):
   ```bash
   export DATABASE_URL="mysql://USERNAME:PASSWORD@HOST/DATABASE_NAME"
   ```
   Use the real values from Hostinger. If the password has special characters, URL-encode them.

3. **Create tables in the Hostinger DB** (no migration history; creates tables from the schema):
   ```bash
   npx prisma db push
   ```

4. **Seed the database** (fills Services, Partners, Why Choose Us, footer, etc.):
   ```bash
   npx prisma db seed
   ```

5. **Redeploy / restart** your app and set the same `DATABASE_URL` in your hosting environment (e.g. Vercel env vars, or Hostinger Node/VPS env).

6. **Check** **`https://YOUR-DOMAIN.com/api/debug-db`** – you should see `ok: true` and `counts` with values > 0.

---

## 5. Quick reference

- **Diagnostic link:** `https://YOUR-DOMAIN.com/api/debug-db`
- **Default DB:** SQLite (file). Hostinger shared = MySQL; use MySQL + schema change above.
- **No DB / wrong DB:** App still shows Services, Partners, Why Choose Us via **fallback content**.
- **Seed (after DB is created and schema matches):**  
  `DATABASE_URL="mysql://..." npx prisma db seed`

- **Quick one-liner after setting `DATABASE_URL` and switching schema to MySQL:**  
  `npx prisma db push && npx prisma db seed`

If you tell me what you see at `/api/debug-db` (and whether you use Hostinger shared or VPS), I can tell you the exact next step.
